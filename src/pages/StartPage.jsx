import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to Verkstadium</h1>
      <div className="button-group">
        <Link to="/register" className="button button-primary">Register</Link>
        <Link to="/login" className="button button-secondary">Log In</Link>
      </div>
    </div>
  );
}

export default StartPage;