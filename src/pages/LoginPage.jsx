import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Inloggning</h1>
      <form className="form">
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
          className="button button-secondary"
        >
          Logga in
        </button>
      </form>
      <Link to="/register" className="link">Har du inget konto? Registrera dig</Link>
    </div>
  );
}

export default LoginPage;