import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Hem</h1>
      <p className="page-text">Välkommen till Verkstadium!</p>
      
      <Link
        to="/my-pages"
        className="button button-primary"
      >
        Mina sidor
      </Link>
      
      <Link
        to="/feature-form"
        className="button button-tertiary"
      >
        Ett Knapptryck bort
      </Link>
    </div>
  );
}

export default HomePage;