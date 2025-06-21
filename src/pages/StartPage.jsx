import { Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './StartPage.css';

function StartPage() {
  return (
    <div className="start-page-container">
      <div className="start-login-wrapper">
		<div className="logo-container">
				<img src={Logo} alt="Verkstadium logotyp" className="logo"/>
					<div className='text-container'>
						<h1>Verkstadium</h1>
						<p>Vi har koll på verkstäder nära dig!</p>
						<p>Hur funkar det?</p>
	  
						
					</div>
				</div>
			<img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel"/>
		
		<div className='register-container'>
			<p className='welcome-text'>Ny användare?</p>
			<p className='welcome-text'>Registrera dig!</p>

		</div>

		<div className='login-container'>
			<p className='welcome-text'>Redan användare?</p>
			<p className='welcome-text'>Logga in!</p>
		</div> 
		</div>



    </div>
  );
}

export default StartPage;