import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginSchema } from '../data/loginSchema';

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

    // Placeholder for backend submission
    try {
      // Example: await fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) });
      console.log('Login submitted:', formData);
      navigate('/home');
    } catch (err) {
      setErrors({ api: 'Fel e-post eller lösenord. Försök igen.' });
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Inloggning</h1>
      {state?.success && <p className="success">{state.success}</p>}
      {errors.api && <p className="error api-error">{errors.api}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="E-post"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email || '\u00A0'}</p>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
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