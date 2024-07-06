import "./VerifyModal.css";

const VerifyModal = ({ setShowVerifyModal, explainationLink }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-close-button">
        <p
          className="cross-btn"
          onClick={() => setShowVerifyModal(false)}
          title="Close"
        >
          &#x2718;
        </p>
      </div>
      <div className="modal-fixed-box">
        <div className="modal-fixed-container">
          {explainationLink.map((link, index) => (
            <p className="a-link" key={index}>
              <a
                key={index}
                className="a-link"
                href={link}
                rel="noreferrer"
                target="_blank"
                title="Follow this Link for Explaination."
              >
                {link}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifyModal;
