import { Link } from 'react-router-dom';
import Logo from '../images/Vector1.svg';
import BigWheel from '../images/Vector.svg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="page-container">
		<div className="login-wrapper">
				<div className="logo-container">
						<img src={Logo} alt="Verkstadium logotyp" className="logo"/>
							<div className='text-container'>
								<h1>Verkstadium</h1>
								<p>Vi har koll på verkstäder nära dig!</p>
								<Link to="/how-it-works" className='how-it-works'>Hur funkar det?</Link>
								<Link to="/my-pages" className='my-pages'>Mina sidor</Link>
			  
								
							</div>
						</div>
					<img src={BigWheel} alt="bakgrunds-dekoration" className="background-wheel"/>
				
				<div className='text-container-right'>
					<p>Har du problem med din bil?</p>

				</div>
				<div className='text-container-left'>
					<p>Ingen fara!</p> 
					
					<p>Skriv ner problemen här hos oss, vi löser en nära verkstad till billigast pris innom kort.</p>
					</div>

				</div>
				<p className='button-text'>Hjälpen finns bara ett knapptryck bort</p>
				
      
      
      
      {/* <Link
        to="/my-pages"
        className="button button-primary"
      >
        Mina sidor
      </Link> */}
      
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