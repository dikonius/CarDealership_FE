import { Link } from 'react-router-dom';

function HowItWorksPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Hur funkar det?</h1>
      <p className="page-text">Här ska vara beskrivning</p>
      <Link to="/" className="button button-primary">Tillbaka</Link>
    </div>
  );
}

export default HowItWorksPage;