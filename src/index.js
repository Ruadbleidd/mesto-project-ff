// import "./index.css";
// import "./components/card";
// import "./components/cards";
// import { initialCards } from "./components/cards";
// // import { createCard, removeCard, likebtn  } from "./components/card.js";

// import { createCard } from "./components/card.js";

// import {
//   openModal,
//   closeModal,
//   closeModalOverlay,
// } from "./components/modal.js";

// import {
//   config,
//   getInitialUser,
//   newProfile,
//   deleteCard,
//   addLikeCard,
//   delLikeCard,
//   changeAvatar,
//   checkImageUrl,
//   newCards,
//   handleSubmit,
//   getCardsDescription,
// } from "./components/api.js";

// import {
//   toggleButtonState,
//   clearValidation,
//   enableValidation,
//   validationConfig,
// } from "./components/validation.js";

// const editBtn = document.querySelector(".profile__edit-button");
// const popupNewCardButtonOpen = document.querySelector(".profile__add-button");
// const popupDelCardQuestion = document.querySelector(".popup_type_question");
// const popupImage = document.querySelector(".popup_type_image");
// const popupAvatarUpdate = document.querySelector(".popup_type_update-avatar");
// const popupZoomImg = document.querySelector(".popup__image");
// const typeImageTitle = document.querySelector(".popup__caption");
// const updateAvatarForm = document.querySelector(
//   ".popup__form_type_update-avatar"
// );
// const newCardTitle = document.querySelector(".popup__input_type_card-name");

// const inputCardUrl = document.querySelector(".popup__input_type_url");

// // const profileForm = document.forms.profileEdit;
// const profileTitle = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description");
// const formCreateNC = document.forms.newplace;
// // Находим форму в DOM
// const popupEditForm = document.querySelector(".popup_type_edit");
// // Находим поля формы в DOM

// const profileAvatarImg = document.querySelector(".profile__image");
// const nameInput = popupEditForm.querySelector(".popup__input_type_name");
// const jobInput = popupEditForm.querySelector(".popup__input_type_description");

// // // Обработчик «отправки» формы, хотя пока
// // // она никуда отправляться не будет
// function submitEditPopup(evt) {
//   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//   // Так мы можем определить свою логику отправки.
//   // О том, как это делать, расскажем позже.

//   // Получите значение полей jobInput и nameInput из свойства value
//   profileTitle.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   // Выберите элементы, куда должны быть вставлены значения полей
//   newCardForm.reset();
//   closeModal(popupEditForm);

//   // Вставьте новые значения с помощью textContent
// }

// // // Прикрепляем обработчик к форме:
// // // он будет следить за событием “submit” - «отправка»
// popupEditForm.addEventListener("submit", submitEditPopup);

// export function openPopupZoom(imageSrc, titleText) {
//   popupZoomImg.src = imageSrc;
//   popupZoomImg.alt = titleText;
//   typeImageTitle.textContent = titleText;

//   openModal(popupImage);
// }

// export function handleOpenPopupZoom(event) {
//   const cardImg = event.target;

//   const card = cardImg.closest(".card");
//   const cardTitle = card.querySelector(".card__title").textContent;

//   openPopupZoom(cardImg.src, cardTitle);
// }

// const cardImageButton = document.querySelectorAll(".card__image");

// cardImageButton.forEach((button) => {
//   button.addEventListener("click", function () {
//     openModal(handleOpenPopupZoom);
//   });
// });

// const placeList = document.querySelector(".places__list");
// // initialCards.forEach(function (card) {
// //   const cardContent = createCard(
// //     card.name,
// //     card.link,
// //     // removeCard,
// //     // likebtn,
// //     handleOpenPopupZoom
// //   );
// //   placeList.append(cardContent);
// // });

// function addCards(cardsDataArray, currentUserId, method = "prepend") {
//   cardsDataArray.forEach((cardData) => {
//     const card = createCard({
//       img: cardData.link,
//       title: cardData.name,
//       functionDelCard: handleOpenDeletePopup,
//       handleLikeCard: handleLikeCard,
//       handlerOpenPopupZoom: handleOpenPopupZoom,
//       cardData: cardData,
//       currentUserId: currentUserId,
//     });
//     placeList[method](card);
//   });
// }

// // const formCreateNC = document.forms.newplace;

// function openPopupNewCard() {
//   inputCardUrl.value = "";
//   newCardTitle.value = "";
//   // clearValidation(formCreateNC, validationConfig);
//   openModal(newCardPopup);
//   clearValidation(validationConfig);
// }

// const newCardPopup = document.querySelector(".popup_type_new-card");
// const newCardForm = newCardPopup.querySelector(".popup__form");
// function addNewCard(evt) {
//   evt.preventDefault();

//   const cardTitle = newCardTitle.value;
//   const cardUrl = inputCardUrl.value;

//   const newCards = createCard(
//     cardTitle,
//     cardUrl,
//     // removeCard,
//     // likebtn,
//     handleOpenPopupZoom
//   );
//   newCardForm.reset();
//   closeModal(newCardPopup);
//   placeList.prepend(newCards);
// }
// newCardForm.addEventListener("submit", addNewCard);

// // добавления слушателей и функции закрытия нажатием на крестик
// function addListenersClosePopup() {
//   const popupBtnCloseList = document.querySelectorAll(".popup__close");
//   popupBtnCloseList.forEach((popupBtn) => {
//     const popupContent = popupBtn.closest(".popup");
//     popupBtn.addEventListener("click", () => {
//       closeModal(popupContent);
//     });
//   });
// }

// // добавления слушателей и функции закрытия попапа нажатием на оверлей
// function addListenersClosePopupOverlay() {
//   const popupList = Array.from(document.querySelectorAll(".popup"));

//   popupList.forEach((popupItem) => {
//     popupItem.addEventListener("mousedown", closeModalOverlay);
//   });
// }

// addListenersClosePopup();
// addListenersClosePopupOverlay();

// function openPopupEdit() {
//   const buttonElement = popupEditForm.querySelector(".popup__button");
//   toggleButtonState(buttonElement);
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileDescription.textContent;

//   profileDescription.textContent = jobInput.value;
//   profileTitle.textContent = nameInput.value;
//   clearValidation(popupEditForm, validationConfig);
//   openModal(popupEditForm);
// }

// // Функция для обновления информации профиля
// function updateProfileInfo(name, about, avatar) {
//   profileTitle.textContent = name;
//   profileDescription.textContent = about;
//   profileAvatarImg.style.backgroundImage = `url('${avatar}')`;
// }

// Promise.all([getInitialUser(), getCardsDescription()])
//   .then(([dataUser, dataCards]) => {
//     const currentUserId = dataUser._id; //мой id

//     // Обновляем информацию о пользователе
//     updateProfileInfo(dataUser.name, dataUser.about, dataUser.avatar);
//     addCards(dataCards, currentUserId, "append");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Обработчик изменения данных профиля и отправки формы
// function handleEditFormSubmit(evt) {
//   // Функция, которая возвращает промис
//   function makeRequest() {
//     const name = nameInput.value;
//     const about = jobInput.value;

//     return newProfile(name, about).then((userData) => {
//       // Обновляем DOM с новыми данными профиля
//       profileTitle.textContent = userData.name;
//       profileDescription.textContent = userData.about;
//     });
//   }
//   // Вызываем универсальную функцию handleSubmit
//   handleSubmit(makeRequest, evt);
// }

// //Обработчик создания новой карточки
// function handleCreateNewCardSubmit(evt) {
//   function makeRequest() {
//     // Получаем значения полей
//     const cardImg = inputCardUrl.value;
//     const cardTitle = newCardTitle.value;

//     // Отправляем запрос на создание новой карточки
//     return createCard(cardTitle, cardImg).then((newCardData) => {
//       // Передаем данные новой карточки в функцию addCards
//       newCards([newCardData], newCardData.owner._id, "prepend");
//     });
//   }
//   // Вызываем универсальную функцию
//   handleSubmit(makeRequest, evt);
// }

// //функция обработчик открытия попапа подтверждения удаления
// function handleOpenDeletePopup(cardElement, cardId) {
//   currentCardElement = { element: cardElement, id: cardId };
//   openModal(popupDelCardQuestion); // Открываем попап подтверждения
// }

// //функция обработчик удаления карточки
// function handleDeleteCardSubmit(evt) {
//   evt.preventDefault(); // Предотвращаем стандартную отправку формы

//   if (currentCardElement) {
//     deleteCard(currentCardElement.id)
//       .then(() => {
//         currentCardElement.element.remove(); // Удаляем карточку из DOM
//         closePopup(popupDelCardQuestion); // Закрываем попап после успешного удаления
//       })
//       .catch((err) => {
//         console.error(`Ошибка при удалении карточки: ${err}`);
//       });
//   }
// }

// //функция обработчик установки/удаления лайка
// function handleLikeCard(cardElement, cardId, isLiked) {
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const likeCounter = cardElement.querySelector(".card__like-number");

//   if (isLiked) {
//     delLikeCard(cardId)
//       .then((updatedCard) => {
//         likeButton.classList.remove("card__like-button_is-active");
//         likeCounter.textContent = updatedCard.likes.length;
//       })
//       .catch((err) => {
//         console.error(`Ошибка при удалении лайка: ${err}`);
//       });
//   } else {
//     addLikeCard(cardId)
//       .then((updatedCard) => {
//         likeButton.classList.add("card__like-button_is-active");
//         likeCounter.textContent = updatedCard.likes.length;
//       })
//       .catch((err) => {
//         console.error(`Ошибка при добавлении лайка: ${err}`);
//       });
//   }
// }

// //функция обработчик смены аватара
// function handleAvatarChange(evt) {
//   function makeRequest() {
//     const avatarInputValue = avatarInput.value;

//     // Проверяем URL перед обновлением аватара
//     return checkImageUrl(avatarInputValue).then((isValid) => {
//       if (isValid) {
//         return changeAvatar(avatarInputValue).then((updatedData) => {
//           profileAvatarImg.style.backgroundImage = `url('${updatedData.avatar}')`;
//         });
//       } else {
//         console.error("Указанный URL-адрес не является допустимым.");
//       }
//     });
//   }
//   // Вызываем универсальную функцию handleSubmit
//   handleSubmit(makeRequest, evt);
// }

// editBtn.addEventListener("click", openPopupEdit);

// //слушатель открытия попапа смены аватара
// profileAvatarImg.addEventListener("click", () => openModal(popupAvatarUpdate));

// //слушатель открытия попапа создания новой карточки
// popupNewCardButtonOpen.addEventListener("click", openPopupNewCard);

// // Слушатель на подтверждение удаления карточки
// popupDelCardQuestion.addEventListener("submit", handleDeleteCardSubmit);

// updateAvatarForm.addEventListener("submit", handleAvatarChange);

// // addBtn.addEventListener("click", openPopupNewCard);
// // formCreateNC.addEventListener("submit", handleCreateNewCardSubmit);
// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// popupEditForm.addEventListener("submit", handleEditFormSubmit);

// enableValidation(validationConfig);


import { createCard } from "./components/card.js";

import { handleSubmit } from "./components/utilis.js";

import {
  getInitialUser,
  getCardsDescription,
  cgetCardsDescriptiongeAvatar,
  renameUserData,
  deleteCard,
  addLikeCard,
  delLikeCard,
  changeAvatar,
  checkImageUrl,
  createNewCard,
} from "./components/api.js";

import {
  validationConfig,
  enableValidation,
  clearValidation,
  disableButton,
} from "./components/validation.js";

import {
  openPopup,
  closePopup,
  closePopupOverlay,
} from "./components/modal.js";

let currentCardElement = null; // Переменная для хранения текущей карточки

const popupEditButtonOpen = document.querySelector(".profile__edit-button");
const popupNewCardButtonOpen = document.querySelector(".profile__add-button");

const popupEdit = document.querySelector(".popup_type_edit");
const popupAvatarUpdate = document.querySelector(".popup_type_update-avatar");
const popupDelCardQuestion = document.querySelector(".popup_type_question");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupZoom = document.querySelector(".popup_type_image");

const updateAvatarForm = document.querySelector(
  ".popup__form_type_update-avatar"
);

const popupZoomImg = document.querySelector(".popup__image");
const popupZoomTitle = document.querySelector(".popup__caption");

const popupInputNewCardTitle = document.querySelector(
  ".popup__input_type_card-name"
);
const popupInputNewCardImg = document.querySelector(".popup__input_type_url");

const profileAvatarImg = document.querySelector(".profile__image");
const profileInfoTitle = document.querySelector(".profile__title");
const profileInfoDescription = document.querySelector(".profile__description");

// Находим форму в DOM(любую, не обязательно profileForm (форма профиля))
const profileForm = document.forms.profileEdit;
const formCreateNC = document.forms.newplace;

// Находим поля формы в DOM
const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");

const avatarInput = document.querySelector(".popup__input_type_update-avatar");

// @todo: DOM узлы

const cardsContainer = document.querySelector(".places__list");

// @todo: Вывести карточки на страницу

// Функция добавления карточки на страницу
function addCards(cardsDataArray, currentUserId, method = "prepend") {
  cardsDataArray.forEach((cardData) => {
    const card = createCard({
      img: cardData.link,
      title: cardData.name,
      functionDelCard: handleOpenDeletePopup,
      handleLikeCard: handleLikeCard,
      handlerOpenPopupZoom: handleOpenPopupZoom,
      cardData: cardData,
      currentUserId: currentUserId,
    });
    cardsContainer[method](card);
  });
}

//функция открытия попапа просмотра фото
function openPopupZoom(imageSrc, titleText) {
  popupZoomImg.src = imageSrc;
  popupZoomImg.alt = titleText;
  popupZoomTitle.textContent = titleText;

  openPopup(popupZoom);
}

//Обработчик открытия попапа увеличения фото
function handleOpenPopupZoom(event) {
  const cardImg = event.target;

  const card = cardImg.closest(".card");
  const cardTitle = card.querySelector(".card__title").textContent;

  openPopupZoom(cardImg.src, cardTitle);
}

// добавления слушателей и функции закрытия нажатием на крестик
function addListenersClosePopup() {
  const popupList = document.querySelectorAll(".popup");
  const popupBtnCloseList = document.querySelectorAll(".popup__close");

  popupBtnCloseList.forEach((popupBtn, index) => {
    popupBtn.addEventListener("click", () => {
      closePopup(popupList[index]);
    });
  });
}

// добавления слушателей и функции закрытия попапа нажатием на оверлей
function addListenersClosePopupOverlay() {
  const popupList = Array.from(document.querySelectorAll(".popup"));

  popupList.forEach((popupItem) => {
    popupItem.addEventListener("mousedown", closePopupOverlay);
  });
}

//функция открытия попапа редактирования
function openPopupEdit() {
  const buttonElement = popupEdit.querySelector(".popup__button");

  disableButton(buttonElement);

  nameInput.value = profileInfoTitle.textContent;
  jobInput.value = profileInfoDescription.textContent;

  clearValidation(profileForm, validationConfig);
  openPopup(popupEdit);
}

//функция открытия попапа создания новой карточки
function openPopupNewCard() {
  popupInputNewCardImg.value = "";
  popupInputNewCardTitle.value = "";
  clearValidation(formCreateNC, validationConfig);
  openPopup(popupNewCard);
}

// Функция для обновления информации профиля
function updateProfileInfo(name, about, avatar) {
  profileInfoTitle.textContent = name;
  profileInfoDescription.textContent = about;
  profileAvatarImg.style.backgroundImage = `url('${avatar}')`;
}

Promise.all([getInitialUser(), getCardsDescription()])
  .then(([dataUser, dataCards]) => {
    const currentUserId = dataUser._id; //мой id

    // Обновляем информацию о пользователе
    updateProfileInfo(dataUser.name, dataUser.about, dataUser.avatar);
    addCards(dataCards, currentUserId, "append");
  })
  .catch((err) => {
    console.log(err);
  });

// Обработчик изменения данных профиля и отправки формы
function handleEditFormSubmit(evt) {
  // Функция, которая возвращает промис
  function makeRequest() {
    const name = nameInput.value;
    const about = jobInput.value;

    return renameUserData(name, about).then((userData) => {
      // Обновляем DOM с новыми данными профиля
      profileInfoTitle.textContent = userData.name;
      profileInfoDescription.textContent = userData.about;
    });
  }
  // Вызываем универсальную функцию handleSubmit
  handleSubmit(makeRequest, evt);
}

//Обработчик создания новой карточки
function handleCreateNewCardSubmit(evt) {
  function makeRequest() {
    // Получаем значения полей
    const cardImg = popupInputNewCardImg.value;
    const cardTitle = popupInputNewCardTitle.value;

    // Отправляем запрос на создание новой карточки
    return createNewCard(cardTitle, cardImg).then((newCardData) => {
      // Передаем данные новой карточки в функцию addCards
      addCards([newCardData], newCardData.owner._id, 'prepend');
    });
  }
  // Вызываем универсальную функцию
  handleSubmit(makeRequest, evt);
}

//функция обработчик открытия попапа подтверждения удаления
function handleOpenDeletePopup(cardElement, cardId) {
  currentCardElement = { element: cardElement, id: cardId };
  openPopup(popupDelCardQuestion); // Открываем попап подтверждения
}

//функция обработчик удаления карточки
function handleDeleteCardSubmit(evt) {
  evt.preventDefault(); // Предотвращаем стандартную отправку формы

  if (currentCardElement) {
    deleteCard(currentCardElement.id)
      .then(() => {
        currentCardElement.element.remove(); // Удаляем карточку из DOM
        closePopup(popupDelCardQuestion); // Закрываем попап после успешного удаления
      })
      .catch((err) => {
        console.error(`Ошибка при удалении карточки: ${err}`);
      });
  }
}

//функция обработчик установки/удаления лайка
function handleLikeCard(cardElement, cardId, isLiked) {
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCounter = cardElement.querySelector(".card__like-number");

  if (isLiked) {
    delLikeCard(cardId)
      .then((updatedCard) => {
        likeButton.classList.remove("card__like-button_is-active");
        likeCounter.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.error(`Ошибка при удалении лайка: ${err}`);
      });
  } else {
    addLikeCard(cardId)
      .then((updatedCard) => {
        likeButton.classList.add("card__like-button_is-active");
        likeCounter.textContent = updatedCard.likes.length;
      })
      .catch((err) => {
        console.error(`Ошибка при добавлении лайка: ${err}`);
      });
  }
}

//функция обработчик смены аватара
function handleAvatarChange(evt) {
  function makeRequest() {
    const avatarInputValue = avatarInput.value;

    // Проверяем URL перед обновлением аватара
    return checkImageUrl(avatarInputValue).then((isValid) => {
      if (isValid) {
        return cgetCardsDescriptiongeAvatar(avatarInputValue).then((updatedData) => {
          profileAvatarImg.style.backgroundImage = `url('${updatedData.avatar}')`;
        });
      } else {
        console.error("Указанный URL-адрес не является допустимым.");
      }
    });
  }
  // Вызываем универсальную функцию handleSubmit
  handleSubmit(makeRequest, evt);
}

//слушатель открытия попапа редактирования
popupEditButtonOpen.addEventListener("click", openPopupEdit);

//слушатель открытия попапа смены аватара
profileAvatarImg.addEventListener("click", () => openPopup(popupAvatarUpdate));

//слушатель открытия попапа создания новой карточки
popupNewCardButtonOpen.addEventListener("click", openPopupNewCard);

//слушатель создания новой карточки
formCreateNC.addEventListener("submit", handleCreateNewCardSubmit);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener("submit", handleEditFormSubmit);

//добавление слушателей закрытия попапа нажатием на крестик
addListenersClosePopup();

//вызов функции закрытия попапа нажатием на оверлей
addListenersClosePopupOverlay();

// Вызовем функцию включение валидации вызовом enableValidation
// все настройки передаются при вызове
enableValidation(validationConfig);

// Слушатель на подтверждение удаления карточки
popupDelCardQuestion.addEventListener("submit", handleDeleteCardSubmit);

updateAvatarForm.addEventListener("submit", handleAvatarChange);