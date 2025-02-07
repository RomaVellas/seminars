import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Form from "../form/Form";
import { featchDeleteSeminar } from "../api/api";

import "./modal.css";

export default function Modal({ setModalError, isOpen, onClose }) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  if (!isOpen) return null;

  // Функция открытия модального окна

  const hendleClose = (event) => {
    event.stopPropagation();
    onClose();
  };

  // Если вызывается модальное окно для удаления семинара, будет отображаться этот блок

  if (isOpen.modal === "delete") {
    // Функция для удаления семинара

    const onDeleteSeminar = (event) => {
      event.stopPropagation();
      setBtnDisabled(true);
      featchDeleteSeminar(isOpen.id, setModalError);
      onClose();
      setBtnDisabled(false);
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
              onClick={hendleClose}
              className="modal__btn"
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Если вызывается модальное окно для изменения семинара, будет отображаться этот блок

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
