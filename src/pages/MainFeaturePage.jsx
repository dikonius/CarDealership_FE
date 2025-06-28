import { Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './MainFeaturePage.css';

function FeatureFormPage() {
  return (
    <div className="page-container">
		<div className='background-wrapper'>
							<img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel"/>
						</div>
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
				</div>
		
				
      <h1 className="page-title">Funktionsformulär</h1>
      <form className="form">
        <select className="input">
    <option value="">Välj ett alternativ</option>
    <option value="alternativ1">Alternativ 1</option>
    <option value="alternativ2">Alternativ 2</option>
    <option value="alternativ3">Alternativ 3</option>
  </select>
        <textarea
          placeholder="Ytterligare detaljer"
          className="textarea"
        />
        
      </form>
      
	<button
          type="submit"
          className="send-button"
        >
          Skicka
        </button>
		<Link to="/home" className="link">Tillbaka till hem</Link>
    
	</div> 
  );
}

export default FeatureFormPage;