import { Navigate, Outlet } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = localStorage.getItem('userToken');
  return !!token; // Returns true if token exists, false otherwise
};

function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;