import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { carSchema } from '../data/carSchema';

function useCars() {
    const [formData, setFormData] = useState({ brand: '', regNumber: '' });
    const [cars, setCars] = useState([]);
    const [editId, setEditId] = useState(null);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    
    // Load user cars on mount
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
            return;
        }
        try {
            const decoded = JSON.parse(atob(token));
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find((u) => u.email === decoded.email);
            if (user) {
                setCars(user.cars || []);
            } else {
                setErrors({ api: 'Användaren hittades inte.' });
            }
        } catch {
            setErrors({ api: 'Kunde inte ladda användardata.' });
        }
    }, [navigate]);
    
    const saveCar = ({ formData, errors }) => {
        if (errors) {
            setErrors(errors);
            return;
        }
        
        try {
            const token = localStorage.getItem('userToken');
            if (!token) {
                setErrors({ api: 'Ingen användare är inloggad.' });
                return;
            }
            
            // Extract email from token (e.g., 'mock-token-user@example.com' -> 'user@example.com')
            const email = token.replace('mock-token-', '');
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex((u) => u.email === email);
            
            if (userIndex === -1) {
                setErrors({ api: 'Användaren hittades inte.' });
                return;
            }
            
            let updatedCars = users[userIndex].cars || [];
            if (editId) {
                // Edit existing car
                updatedCars = updatedCars.map((car) =>
                    car.id === editId ? { ...car, ...formData } : car
            );
            setSuccess('Bil uppdaterad!');
            setEditId(null);
        } else {
            // Add new car
            if (updatedCars.some((car) => car.regNumber === formData.regNumber)) {
                setErrors({ regNumber: 'Registreringsnummer finns redan.' });
                return;
            }
            updatedCars.push({
                id: Date.now().toString(), // Simple unique ID
                brand: formData.brand,
                regNumber: formData.regNumber,
            });
            setSuccess('Bil tillagd!');
        }
        
        users[userIndex] = { ...users[userIndex], cars: updatedCars };
        localStorage.setItem('users', JSON.stringify(users));
        setCars(updatedCars);
        setFormData({ brand: '', regNumber: '' });
    } catch {
        setErrors({ api: 'Kunde inte spara bilen. Försök igen.' });
    }
};

const editCar = (car) => {
    setFormData({ brand: car.brand, regNumber: car.regNumber });
    setEditId(car.id);
    setErrors({});
    setSuccess('');
};

const deleteCar = (id) => {
    // *** START: Local Storage Implementation ***
    try {
        const token = localStorage.getItem('userToken');
        const decoded = JSON.parse(atob(token));
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex((u) => u.email === decoded.email);
        if (userIndex === -1) {
            setErrors({ api: 'Användaren hittades inte.' });
            return;
        }
        
        const updatedCars = users[userIndex].cars.filter((car) => car.id !== id);
        users[userIndex] = { ...users[userIndex], cars: updatedCars };
        localStorage.setItem('users', JSON.stringify(users));
        setCars(updatedCars);
        setSuccess('Bil raderad!');
    } catch {
        setErrors({ api: 'Kunde inte radera bilen. Försök igen.' });
    }
    // *** END: Local Storage Implementation ***
    
    // *** REPLACE WITH API CALL IN FUTURE ***
    /*
    try {
    const token = localStorage.getItem('userToken');
    const response = await fetch(`/api/cars/${id}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` },
    });
    if (!response.ok) {
    throw new Error(JSON.stringify({ api: 'Kunde inte radera bilen.' }));
    }
    setCars(cars.filter((car) => car.id !== id));
    setSuccess('Bil raderad!');
    } catch (err) {
    const errorObj = JSON.parse(err.message);
    setErrors(errorObj);
    }
    */
};

return {
    formData,
    setFormData,
    cars,
    errors,
    success,
    isEditing: !!editId,
    saveCar,
    editCar,
    deleteCar,
};
}

export default useCars;