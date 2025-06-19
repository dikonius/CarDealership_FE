import PropTypes from 'prop-types';

function SuccessMessageComponent({ success }) {
  return (
    <div className="success-message">
      <h2 className="page-title">Skickat!</h2>
      <p className="success">{success}</p>
      <a href="/home" className="link">Tillbaka till hem</a>
    </div>
  );
}

SuccessMessageComponent.propTypes = {
  success: PropTypes.string.isRequired,
};

export default SuccessMessageComponent;