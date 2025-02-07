import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../form/Form";
import { featchDeleteSeminar } from "../api/api";

import "./modal.css";

export default function Modal({ setModalError, isOpen, onClose }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  if (!isOpen) return null;

  const hendleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  if (isOpen.modal === "close") {
    const onDeleteSeminar = (event) => {
      event.stopPropagation();
      setBtnDisabled(true);
      featchDeleteSeminar(isOpen.id, setModalError);
      onClose();
      setBtnDisabled(false);
    };

    const onСancellation = (event) => {
      event.stopPropagation();
      onClose();
    };

    return (
      <div className="modal__overlay">
        <div className="modal__content">
          <div className="modal__header">
            <h2>Удаление Семинара</h2>
            <button className="modal__btn-close" onClick={hendleClose}>
              <IoClose className="modal__icon-close" />
            </button>
          </div>
          <p className="modal__massage">Вы точно хотите удалить семинар?</p>
          <div className="modal__btns">
            <button
              disabled={btnDisabled}
              onClick={onDeleteSeminar}
              className="modal__btn"
            >
              Да
            </button>
            <button
              disabled={btnDisabled}
              onClick={onСancellation}
              className="modal__btn"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isOpen.modal === "create") {
    return (
      <div className="modal__overlay">
        <div className="modal__content">
          <div className="modal__header">
            <h2>Редактирование Семинара</h2>
            <button className="modal__btn-close" onClick={hendleClose}>
              <IoClose className="modal__icon-close" />
            </button>
          </div>
          <Form
            setModalError={setModalError}
            id={isOpen.id}
            onClose={onClose}
          />
        </div>
      </div>
    );
  }
}
