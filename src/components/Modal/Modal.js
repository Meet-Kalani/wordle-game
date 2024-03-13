import React from "react";

function Modal({ isModalOpen, setIsModalOpen, warning }) {
  const handleClose = () =>{
    setIsModalOpen(false)
  }

  return (
    isModalOpen && (
      <div className="warning-modal">
        <span className="warning">{warning}</span>
        <button type="button" className="close-btn" onClick={handleClose}>
          Close
        </button>
      </div>
    )
  );
}

export default Modal;
