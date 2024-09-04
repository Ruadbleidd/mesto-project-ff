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

  openPopupZoom(card.link, cardTitle);
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
}

const newCardPopup = document.querySelector(".popup_type_new-card");
const newCardForm = newCardPopup.querySelector(".popup__form");
function addNewCard(evt) {
  evt.preventDefault();
  const newCardData = {
    name: newCardTitle.value,
    link: inputCardUrl.value,
  };
  const newCard = createCard(
    newCardData,
    createCard,
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
    const popupContent = document.querySelector(".popup__content");
    const closestPopup = popupContent.closest(".popup");
    popupBtn.addEventListener("click", () => {
      closeModal(closestPopup);
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
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;

  profileDescription.textContent = jobInput.value;
  profileTitle.textContent = nameInput.value;
  openModal(popupEditForm);
}

editBtn.addEventListener("click", openPopupEdit);

addBtn.addEventListener("click", openPopupNewCard);
