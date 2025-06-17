import { Link } from 'react-router-dom';

function MyPagesPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Mina sidor</h1>
      <p className="page-text">Se ditt personliga innehåll och inställningar här.</p>
      <Link to="/home" className="button button-primary">Tillbaka till hem</Link>
    </div>
  );
}

export default MyPagesPage;