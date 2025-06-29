import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginSchema } from '../data/loginSchema';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate form data with Joi schema
    const { error } = loginSchema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    // *** START: Local Storage Implementation ***
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );
      if (!user) {
        setErrors({ api: 'Fel e-post eller lösenord. Försök igen.' });
        return;
      }

      // Simulate token for ProtectedRoute
      localStorage.setItem('userToken', btoa(JSON.stringify({ email: user.email, exp: Date.now() + 3600000 })));
      navigate('/home');
    } catch (err) {
      setErrors({ api: 'Kunde inte logga in. Försök igen senare.' });
    }
    // *** END: Local Storage Implementation ***

    // *** REPLACE WITH API CALL IN FUTURE ***
    /*
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Fel e-post eller lösenord. Försök igen.');
      }
      localStorage.setItem('userToken', data.token);
      navigate('/home');
    } catch (err) {
      setErrors({ api: err.message });
    }
    */
  };

  return (
    <div className="page-container">
		<div className="login-wrapper">
			<div className="logo-container">
				
                  <img src={Logo} alt="Verkstadium logotyp" className="logo" />
                
				<div className='text-container'>
					<h1>Verkstadium</h1>
					<p>Vi har koll på verkstäder nära dig!</p>

					
				</div>
				</div>
			</div>
			<img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel"/>
		
      
      {state?.success && <p className="success">{state.success}</p>}
      {errors.api && <p className="error api-error">{errors.api}</p>}
      <form className="form" onSubmit={handleSubmit}>
		 <div className="form-group">
          <label htmlFor="email">E-post:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-post"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email || '\u00A0'}</p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Lösenord:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Lösenord"
            className="input"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="error">{errors.password || '\u00A0'}</p>
        </div>

        <button type="submit" className="button button-secondary">
          Logga in
        </button>


	  


      
      </form>
      <Link to="/register" className="link">Har du inget konto? Registrera dig</Link>
	  
    </div>
  );
}

export default LoginPage;