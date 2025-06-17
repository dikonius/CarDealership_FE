import { Link } from 'react-router-dom';

function FeatureFormPage() {
  return (
    <div className="page-container">
      <h1 className="page-title">Funktionsformulär</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Ange din information"
          className="input"
        />
        <textarea
          placeholder="Ytterligare detaljer"
          className="textarea"
        />
        <button
          type="submit"
          className="button button-tertiary"
        >
          Skicka
        </button>
      </form>
      <Link to="/home" className="link">Tillbaka till hem</Link>
    </div>
  );
}

export default FeatureFormPage;