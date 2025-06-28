import { useLocation, Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './MyPages.css';

function MyPagesPage() {
  const { state } = useLocation();

  return (
    <div className="page-container">
      {/* Header / Branding */}
      <div className="login-wrapper">
        <div className="logo-container">
          <Link to="/home">
            <img src={Logo} alt="Verkstadium logotyp" className="logo" />
          </Link>
          <div className="text-container">
            <h1>Verkstadium</h1>
            <p>Vi har koll på verkstäder nära dig!</p>
            <Link to="/how-it-works" className="how-it-works">
              Hur funkar det?
            </Link>
          </div>
        </div>
        <img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel" />
      </div>

      {/* Main Content */}
      <h1 className="page-title">Mina sidor</h1>
      {state?.success && <p className="success">{state.success}</p>}
      <p className="page-text">Se ditt personliga innehåll och inställningar här.</p>

      <div className="button-group">
        <Link to="/my-pages/settings" className="button button-secondary">
          Inställningar
        </Link>
        <Link to="/my-pages/cars" className="button button-tertiary">
          Mina bilar
        </Link>
        <Link to="/home" className="button button-primary">
          Tillbaka till hem
        </Link>
		</div>
      </div>
    </div>
  );
}

export default MyPagesPage;
