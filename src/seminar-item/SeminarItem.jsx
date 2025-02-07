import React from "react";
import { MdDelete } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";

import "./seminar-item.css";

const SeminarItem = ({
  openModal,
  id,
  title,
  description,
  date,
  time,
  photo,
}) => {
  return (
    <div className="seminar-item">
      <div className="seminar-item__img-btns">
        <img className="seminar-item__img" src={photo} alt="Seminar" />
        <button
          onClick={(event) => openModal(event, "create", id)}
          className="seminar-item__btns seminar-item__btn-create"
        >
          <IoMdCreate className="seminar-item__icon" />
        </button>
        <button
          onClick={(event) => openModal(event, "close", id)}
          className="seminar-item__btns seminar-item__btn-delete"
        >
          <MdDelete className="seminar-item__icon" />
        </button>
        <span className="seminar-item__date">
          {date}
          <br />
          {time}
        </span>
      </div>
      <h3 className="seminar-item__title">{title}</h3>
      <p className="seminar-item__description">{description}</p>
    </div>
  );
};

export default SeminarItem;
