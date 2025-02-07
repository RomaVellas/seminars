import React, { useEffect, useState } from "react";
import { fetchGetSeminar, fetchUpdateSeminar } from "../api/api";

import "./form.css";

const Form = ({ setModalError, id, onClose }) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    fetchGetSeminar(id, setFormData);
  }, [id]);

  // Функция отправленя формы

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnDisabled(true);
    if (
      (formData.title === "") |
      (formData.description === "") |
      (formData.date === "") |
      (formData.time === "")
    ) {
      alert("Поля не должны быть пустыми!");
      setBtnDisabled(false);
    } else if (
      (formData.title.length > 40) |
      (formData.description.length > 80)
    ) {
      alert("Название не должно превышать 40 символов, а описание 80 символов");
      setBtnDisabled(false);
    } else {
      fetchUpdateSeminar(id, formData, setModalError);
      onClose();
      setBtnDisabled(false);
    }
  };

  // Функция для события onChange

  const handleChange = (event) => {
    if (event.target.name === "date") {
      const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}.${month}.${year}`;
      };

      const date = formatDate(event.target.value);

      setFormData({
        ...formData,
        [event.target.name]: date,
      });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  // Функция отмены отправки данных

  const onСancellation = (event) => {
    event.stopPropagation();
    onClose();
  };

  // Функция для изменения формата даты

  const formatDate = () => {
    const [day, month, year] = formData.date.split(".");
    return `${year}-${month}-${day}`;
  };

  // Отформатированная дата

  const formatedDate = formatDate();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title" className="form__section">
          <span className="form__section-name">Название:</span>
          <input
            className="form__input-text"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description" className="form__section">
          <span className="form__section-name">Описание:</span>
          <input
            className="form__input-text"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="date" className="form__section">
          <span className="form__section-name">Дата:</span>
          <input
            className="form__input-date"
            type="date"
            name="date"
            value={formatedDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="time" className="form__section">
          <span className="form__section-name">Время:</span>
          <input
            className="form__input-date"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="form__bottom-btns">
        <button
          disabled={btnDisabled}
          className="form__bottom-btn"
          type="submit"
        >
          Обновить данные
        </button>
        <button className="form__bottom-btn" onClick={onСancellation}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default Form;
