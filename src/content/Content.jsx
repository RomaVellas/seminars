import React, { useEffect, useState } from "react";
import SeminarItem from "../seminar-item/SeminarItem";
import Modal from "../modal/Modal";
import { fetchGetSeminars } from "../api/api";
import ModalError from "../modal-error/ModalError";

import "./content.css";

const Content = () => {
  const [isModal, setModal] = useState(null);
  const [isModalError, setModalError] = useState(null);
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    fetchGetSeminars(setSeminars, setModalError);
  }, [isModal]);

  const onCloseModal = () => {
    setModal(null);
  };

  const onCloseModalError = () => {
    setModalError(null);
  };

  const openModal = (event, modal, id) => {
    event.stopPropagation();
    setModal({ modal: modal, id: id });
  };

  if (!seminars[0]) {
    return (
      <>
        <h2 className="content__title">Семинаров нет</h2>
        <ModalError isOpen={isModalError} onClose={onCloseModalError} />
      </>
    );
  }

  return (
    <>
      <h2 className="content__title">
        Расписание семинаров на ближайшее время
      </h2>
      <div className="content-wrapper">
        <main className="content">
          {seminars.map((seminar) => (
            <SeminarItem
              openModal={openModal}
              key={seminar.id}
              id={seminar.id}
              title={seminar.title}
              description={seminar.description}
              date={seminar.date}
              time={seminar.time}
              photo={seminar.photo}
            />
          ))}
        </main>
      </div>
      <Modal
        onClose={onCloseModal}
        isOpen={isModal}
        setModalError={setModalError}
      />
      <ModalError isOpen={isModalError} onClose={onCloseModalError} />
    </>
  );
};

export default Content;
