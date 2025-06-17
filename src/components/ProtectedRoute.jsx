import { Navigate, Outlet } from 'react-router-dom';

//auth logic here
const isAuthenticated = () => {
  // Exempel: Kontrollera om användaren är inloggad via API?
  return !!localStorage.getItem('userToken'); // Platshållare
};

function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;