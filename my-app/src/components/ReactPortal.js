import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ message, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  
  if (!modalRoot) {
    console.error("Modal root element not found!");
    return null; // Prevent rendering if modal-root is missing
  }

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "30%",
        left: "40%",
        background: "white",
        padding: "20px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "8px"
      }}
    >
      <h3>{message}</h3>
      <button onClick={onClose}>Close</button>
    </div>,
    modalRoot
  );
};

export default Modal;
