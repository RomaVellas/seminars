import React from "react";
import { IoClose } from "react-icons/io5";
import { FaRegGrimace } from "react-icons/fa";

import "./modal-error.css";

const ModalError = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const errorMessage = isOpen;

  const hendleClose = (event) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__header">
          <h2>Упс... У вас ошибка</h2>
          <button className="modal__btn-close" onClick={hendleClose}>
            <IoClose className="modal__icon-close" />
          </button>
        </div>
        <div className="modal__error-massage-wrapper">
          <FaRegGrimace className="modal__error-icon" />
          <p className="modal__error-massage">{errorMessage}</p>
        </div>
        <div className="modal__btns">
          <button onClick={hendleClose} className="modal__btn">
            Ок
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalError;
