// export const config = {
//   baseUrl: "https://nomoreparties.co/v1/wff-cohort-21",
//   headers: {
//     authorization: "6854f039-1743-430f-9824-0ce1c546e773",
//     "Content-Type": "application/json",
//   },
// };

// export const request = (endpoint, options = {}) => {
//   // базовый URL и конечный
//   const url = `${config.baseUrl}${endpoint}`;

//   const headers = {
//     ...config.headers,
//     ...options.headers,
//   };

//   // Выполняем запрос и проверяем ответ
//   return fetch(url, {
//     ...options,
//     headers,
//   }).then(checkResponse);
// };


// //запрос на сервер для получения обьекта с первоначальными данными пользователя
// export const getInitialUser = () => {
//   return request("/users/me").then((result) => {
//     console.log(result);
//     return result;
//   });
// };


// //запрос на сервер для получения массива обьектов с данными карточек других пользователей
// export const getCardsDescription = () => {
//   return request("/cards").then((result) => {
//     console.log(result);
//     return result;
//   });
// };


// export const getInitialCards = () => {
//   return fetch(`${config.baseUrl}/cards`, {
//     headers: config.headers,
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   });
// };

// getInitialCards()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err); // выводим ошибку в консоль
//   });




// //получаем информацию о юзерах
// const getUsers = () => {
//   return request("/users/me").then((result) => {
//     console.log(result);
//     return result;
//   });
// };



// export const newProfile = (name, about) => {
//   request("/users/me", {
//     method: "PATCH",
//     headers: {
//       authorization: "6854f039-1743-430f-9824-0ce1c546e773",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       about: about,
//     }),
//   }).then((data) => {
//     console.log("Профиль обновлен:", data);
//     return data;
//   });
// };





// export const newCards = (cardTitle, cardImg) => {
//   return request("/cards", {
//     method: "POST",
//     body: JSON.stringify({
//       name: cardTitle,
//       link: cardImg,
//     })
//   });
// };





// export function checkResponse(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
// }

// export const deleteCard = (cardId) => {
//   return request(`/cards/${cardId}`, {
//     method: "DELETE",
//   });
// };


// //запрос на сервер для постановки лайка
// export const addLikeCard = (cardId) => {
//   return request(`/cards/likes/${cardId}`, {
//     method: "PUT",
//   });
// };


// //запрос на сервер для удаления лайка
// export const delLikeCard = (cardId) => {
//   return request(`/cards/likes/${cardId}`, {
//     method: "DELETE",
//   });
// };


// //запрос на сервер с данными нового аватара
// export const changeAvatar = (avatar) => {
//   return request("/users/me/avatar", {
//     method: "PATCH",
//     body: JSON.stringify({
//       avatar: avatar,
//     }),
//   });
// };


// //функция проверки действительности и URL изображения
// export const checkImageUrl = (url) => {
//   return fetch(url, { method: "HEAD" })
//     .then((response) => {
//       if (!response.ok) {
//         return Promise.reject(`Ошибка: ${response.status}`);
//       }
//       // Проверка на url
//       const contentType = response.headers.get("Content-Type");
//       if (contentType && contentType.startsWith("image/")) {
//         return true;
//       } else {
//         return Promise.reject("Ошибка: Это не url");
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       return false;
//     });
// };




// import { closeModal } from "./modal.js";

// // export function checkResponse(res) {
// //   if (res.ok) {
// //     return res.json();
// //   } else {
// //     return Promise.reject(`Ошибка: ${res.status}`);
// //   }
// // }

// // универсальная функция управления текстом кнопки
// export function renderLoading(
//   isLoading,
//   button,
//   buttonText = "Сохранить",
//   loadingText = "Сохранение..."
// ) {
//   if (isLoading) {
//     button.textContent = loadingText;
//   } else {
//     button.textContent = buttonText;
//   }
// }

// // универсальная функция, которая принимает функцию запроса, объект события и текст во время загрузки
// export function handleSubmit(request, evt, loadingText = "Сохранение...") {
//   // всегда нужно предотвращать перезагрузку формы при сабмите
//   evt.preventDefault();
//   //находим ближайший к форме попап
//   const popup = evt.target.closest(".popup_is-opened");
//   // универсально получаем кнопку сабмита из `evt`
//   const submitButton = evt.submitter;
//   // записываем начальный текст кнопки до вызова запроса
//   const initialText = submitButton.textContent;
//   // изменяем текст кнопки до вызова запроса
//   renderLoading(true, submitButton, initialText, loadingText);
//   return (
//     request()
//       .then(() => {
//         // любую форму нужно очищать после успешного ответа от сервера
//         // а также `reset` может запустить деактивацию кнопки сабмита (смотрите в `validate.js`)
//         evt.target.reset();
//         closeModal(popup) //закрываем попап после успешного ответа (я думал нельзя в utils что либо импортировать,
//         // чтобы не было жесткой связки)
//       })
//       .catch((err) => {
//         // в каждом запросе нужно ловить ошибку
//         console.error(`Ошибка: ${err}`);
//       })
//       // в каждом запросе в `finally` нужно возвращать обратно начальный текст кнопки
//       .finally(() => {
//         renderLoading(false, submitButton, initialText);
//       })
//   );
// }


import { checkResponse } from "./utilis";

export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-21",
  headers: {
    authorization: "6854f039-1743-430f-9824-0ce1c546e773",
    "Content-Type": "application/json",
  },
};

// Универсальная функция запроса с проверкой ответа
export const request = (endpoint, options = {}) => {
  // базовый URL и конечный
  const url = `${config.baseUrl}${endpoint}`;

  const headers = {
    ...config.headers,
    ...options.headers,
  };

  // Выполняем запрос и проверяем ответ
  return fetch(url, {
    ...options,
    headers,
  }).then(checkResponse);
};

//запрос на сервер для получения обьекта с первоначальными данными пользователя
export const getInitialUser = () => {
  return request("/users/me").then((result) => {
    console.log(result);
    return result;
  });
};

//запрос на сервер для получения массива обьектов с данными карточек других пользователей
export const getCardsDescription = () => {
  return request("/cards").then((result) => {
    console.log(result);
    return result;
  });
};

// Функция для обновления профиля на сервере
export const renameUserData = (name, about) => {
  return request("/users/me", {
    method: "PATCH",
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((data) => {
    console.log("Профиль обновлен:", data);
    return data;
  });
};

//запрос на сервер для удаления карточки
export const deleteCard = (cardId) => {
  return request(`/cards/${cardId}`, {
    method: "DELETE",
  });
};

//запрос на сервер для установки лайка
export const addLikeCard = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: "PUT",
  });
};

//запрос на сервер для удаления лайка
export const delLikeCard = (cardId) => {
  return request(`/cards/likes/${cardId}`, {
    method: "DELETE",
  });
};

//запрос на сервер с данными нового аватара
export const cgetCardsDescriptiongeAvatar = (avatar) => {
  return request("/users/me/avatar", {
    method: "PATCH",
    body: JSON.stringify({
      avatar: avatar,
    }),
  });
};

// //запрос на сервер для создания новой карточки
export const createNewCard = (cardTitle, cardImg) => {
  return request("/cards", {
    method: "POST",
    body: JSON.stringify({
      name: cardTitle,
      link: cardImg,
    }),
  });
};

//функция проверки действительности и URL изображения
export const checkImageUrl = (url) => {
  return fetch(url, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(`Ошибка: ${response.status}`);
      }
      // Проверка на url
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.startsWith("image/")) {
        return true;
      } else {
        return Promise.reject("Ошибка: Это не url");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
};