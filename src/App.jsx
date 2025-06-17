import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">Start</Link>
          </li>
          <li>
            <Link to="/how-it-works" className="nav-link">How It Works</Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li>
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/my-pages" className="nav-link">My Pages</Link>
          </li>
          <li>
            <Link to="/feature-form" className="nav-link">Feature Form</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;