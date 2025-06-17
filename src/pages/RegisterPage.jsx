import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Registrering</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Användarnamn"
          className="input"
        />
        <input
          type="email"
          placeholder="E-post"
          className="input"
        />
        <input
          type="password"
          placeholder="Lösenord"
          className="input"
        />
        <button
          type="submit"
          className="button button-primary"
        >
          Registrera
        </button>
      </form>
      <Link to="/login" className="link">Har du redan ett konto? Logga in</Link>
    </div>
  );
}

export default RegisterPage;