const API_URL = "http://localhost:3001/seminars/";

// Запрос семинаров с сервера

export const fetchGetSeminars = async (setSeminars, setModalError) => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(
        "Извините пожалуйста, не получилось отобразить семинары. Попробуйте обновить страницу."
      );
    }
    await response.json().then((date) => {
      setSeminars(date);
    });
  } catch (error) {
    setModalError(error.message);
  }
};

// Запрос одного семинара с сервера

export const fetchGetSeminar = async (id, setFormData) => {
  try {
    const response = await fetch(API_URL + id);
    if (!response.ok) {
      throw new Error("Что-то пошло не так...");
    }
    await response.json().then((date) => {
      setFormData({
        title: date.title,
        description: date.description,
        date: date.date,
        time: date.time,
      });
    });
  } catch (error) {
    console.error("Ошибка при получении данных: ", error.message);
  }
};

// Запрос на изменение семинара на сервере

export const fetchUpdateSeminar = async (id, data, setModalError) => {
  try {
    const response = await fetch(API_URL + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        "Ошибка при изменении объекта, попробуйте обновить страницу."
      );
    }

    const updatedData = await response.json();

    console.log("Объект обновлен:", updatedData);
  } catch (error) {
    setModalError(error.message);
  }
};

// Запрос на удаление семинара на сервере

export const featchDeleteSeminar = async (id, setModalError) => {
  try {
    const response = await fetch(API_URL + id, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        "Ошибка при удалении объекта, попробуйте обновить страницу."
      );
    }

    const result = await response.json();
    console.log("Объект удален:", result);
  } catch (error) {
    setModalError(error.message);
  }
};
