import React from "react";

function Modal(props) {
  const { show, title, children, className, handleModalOkayClick } = props;

  const modalclassName = `modal ${className} ${show ? " is-active" : ""}`;

  return (
    <div className={modalclassName}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={handleModalOkayClick}
          />
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button"
            onClick={handleModalOkayClick}
          >
            OK
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
