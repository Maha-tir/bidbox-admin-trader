import React from "react";
// import "../../style/modal.css";

function Modal({
  message,
  buttonAction,
  icon,
  typeModal,
  classMessage,
  typeButton,
  inputText,
  onModal,
}) {
  const checkCuttLoss = () => {
    const inputCheck = document.querySelector("#reason");
    if (inputCheck.value.length > 0) {
      onModal(true);
    } else {
      // onModal(false);
      alert("Mohon untuk mengisi alasan terlebih dahulu");
    }
  };
  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex align-items-center flex-column">
                <div className="modal-icon" id={typeModal}>
                  <i className={icon}></i>
                </div>
                {message ? (
                  <p className={classMessage}>{message}</p>
                ) : (
                  "Tambahkan text anda"
                )}
                {inputText ? (
                  <input
                    type="text"
                    id="reason"
                    name="reason"
                    className="input-control"
                    placeholder="Enter your reason"
                    required
                  />
                ) : null}
              </div>
            </div>
            <div className={`modal-footer ${typeButton}`}>
              <button
                type="button"
                className="sch-modal-cancel"
                onClick={() => onModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="sch-modal-action"
                onClick={checkCuttLoss}
              >
                {buttonAction}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Modal;
