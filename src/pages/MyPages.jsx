import { Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './MyPages.css';

function MyPagesPage() {
  return (
    <div className="page-container">
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

        <h1 className="page-title">Mina sidor</h1>
        <p className="page-text">Se ditt personliga innehåll och inställningar här.</p>
        <Link to="/home" className="button button-primary">
          Tillbaka till hem
        </Link>
      </div>
    </div> 
  );
}

export default MyPagesPage;