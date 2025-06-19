import { useLocation, Link } from 'react-router-dom';

function MyPagesPage() {
  const { state } = useLocation();

  return (
    <div className="page-container">
      <h1 className="page-title">Mina sidor</h1>
      {state?.success && <p className="success">{state.success}</p>}
      <p className="page-text">Se ditt personliga innehåll och inställningar här.</p>
      <div className="button-group">
        <Link to="/my-pages/settings" className="button button-secondary">Inställningar</Link>
        <Link to="/my-pages/cars" className="button button-tertiary">Mina bilar</Link>
        <Link to="/home" className="button button-primary">Tillbaka till hem</Link>
      </div>
    </div>
  );
}

export default MyPagesPage;