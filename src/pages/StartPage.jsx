import { Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';

function StartPage() {
  return (
    <div className="page-container">
      <div className="login-wrapper">
		<div className="logo-container">
				<img src={Logo} alt="Verkstadium logotyp" className="logo"/>
					<div className='text-container'>
						<h1>Verkstadium</h1>
						<p>Vi har koll på verkstäder nära dig!</p>
						<p>Hur funkar det?</p>
	  
						
					</div>
				</div>
			<img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel"/>
		</div>
		<div className='register-container'>
			<p>Ny användare?</p>
			<p>Registrera dig!</p>

		</div>

		<div className='login-container'>
			<p>Redan användare?</p>
			<p>Logga in!</p>
		</div>



    </div>
  );
}

export default StartPage;