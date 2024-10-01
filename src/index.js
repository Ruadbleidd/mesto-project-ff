import "./index.css";
import "./components/card";
import "./components/cards";
import { initialCards } from "./components/cards";
import { createCard, removeCard, likebtn } from "./components/card.js";



import {
  openModal,
  closeModal,
  closeModalOverlay,
} from "./components/modal.js";




const editBtn = document.querySelector(".profile__edit-button");
const addBtn = document.querySelector(".profile__add-button");

const popupImage = document.querySelector(".popup_type_image");

const popupZoomImg = document.querySelector(".popup__image");
const typeImageTitle = document.querySelector(".popup__caption");

const newCardTitle = document.querySelector(".popup__input_type_card-name");

const inputCardUrl = document.querySelector(".popup__input_type_url");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Находим форму в DOM
const popupEditForm = document.querySelector(".popup_type_edit");
// Находим поля формы в DOM
const nameInput = popupEditForm.querySelector(".popup__input_type_name");
const jobInput = popupEditForm.querySelector(".popup__input_type_description");

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
function submitEditPopup(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  newCardForm.reset();
  closeModal(popupEditForm);

  // Вставьте новые значения с помощью textContent
}

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
popupEditForm.addEventListener("submit", submitEditPopup);

export function openPopupZoom(imageSrc, titleText) {
  popupZoomImg.src = imageSrc;
  popupZoomImg.alt = titleText;
  typeImageTitle.textContent = titleText;

  openModal(popupImage);
}

export function handleOpenPopupZoom(event) {
  const cardImg = event.target;

  const card = cardImg.closest(".card");
  const cardTitle = card.querySelector(".card__title").textContent;

  openPopupZoom(cardImg.src, cardTitle);
}

const cardImageButton = document.querySelectorAll(".card__image");

cardImageButton.forEach((button) => {
  button.addEventListener("click", function () {
    openModal(handleOpenPopupZoom);
  });
});

const placeList = document.querySelector(".places__list");
initialCards.forEach(function (card) {
  const cardContent = createCard(
    card.name,
    card.link,
    removeCard,
    likebtn,
    handleOpenPopupZoom
  );
  placeList.append(cardContent);
});

function openPopupNewCard() {
  openModal(newCardPopup);
  // clearValidation(validationConfig);
}

const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = newCardPopup.querySelector(".popup__form");
function addNewCard(evt) {
  evt.preventDefault();

  const cardTitle = newCardTitle.value;
  const cardUrl = inputCardUrl.value;

  const newCard = createCard(
    cardTitle,
    cardUrl,
    removeCard,
    likebtn,
    handleOpenPopupZoom
  );
  newCardForm.reset();
  closeModal(newCardPopup);
  placeList.prepend(newCard);
}
newCardForm.addEventListener("submit", addNewCard);

// добавления слушателей и функции закрытия нажатием на крестик
function addListenersClosePopup() {
  const popupBtnCloseList = document.querySelectorAll(".popup__close");
  popupBtnCloseList.forEach((popupBtn) => {
    const popupContent = popupBtn.closest(".popup");
    popupBtn.addEventListener("click", () => {
      closeModal(popupContent);
    });
  });
}

// добавления слушателей и функции закрытия попапа нажатием на оверлей
function addListenersClosePopupOverlay() {
  const popupList = Array.from(document.querySelectorAll(".popup"));

  popupList.forEach((popupItem) => {
    popupItem.addEventListener("mousedown", closeModalOverlay);
  });
}

addListenersClosePopup();
addListenersClosePopupOverlay();

function openPopupEdit() {
  // const buttonElement = popupEditForm.querySelector(".popup__button");
  // toggleButtonState(buttonElement);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  profileDescription.textContent = jobInput.value;
  profileTitle.textContent = nameInput.value;
  // clearValidation(validationConfig);
  openModal(popupEditForm);
}

editBtn.addEventListener("click", openPopupEdit);

addBtn.addEventListener("click", openPopupNewCard);







export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const showError = (formElement,inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  formError.textContent = errorMessage;
  formError.classList.add(validationConfig.errorClass);
  // console.log(inputElement.id);
};

const hideError = (formElement,inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  formError.classList.remove(validationConfig.errorClass);
  formError.textContent = "";

  // console.log(inputElement.id);
};

const checkInputValidity = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    // встроенный метод setCustomValidity принимает на вход строку
    // и заменяет ею стандартное сообщение об ошибке
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    // если передать пустую строку, то будут доступны
    // стандартные браузерные сообщения
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    // теперь, если ошибка вызвана регулярным выражением,
    // переменная validationMessage хранит наше кастомное сообщение
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(inputList,buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList,buttonElement);
    });
  });
};

export function enableValidation(){
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit',(evt) => {
      evt.preventDefault();
      });
      setEventListeners(formElement)
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
  }


export const toggleButtonState =(inputList,buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
  }

enableValidation()



export function clearValidation(formElement, validationConfig) {
  // Удаляем текст ошибок валидации и классы ошибок у полей ввода
  const inputElements = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  inputElements.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });
}


