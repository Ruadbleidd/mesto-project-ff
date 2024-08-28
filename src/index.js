
import './index.css'
import './components/card'
import './components/cards'

import {
    openModal,
    closeModal,
    closeModalOverlay,
    
  } from './components/modal.js';


const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');


const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');


const typeImage = document.querySelector('.popup__image');
const typeImageTitle = document.querySelector('.popup__caption');

const newCardTitle = document.querySelector('.popup__input_type_card-name');

const inputCard = document.querySelector('.popup__input_type_url');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');




// Находим форму в DOM
const formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
const nameInput = document.querySelector('.profile__title')
const jobInput =  document.querySelector('.popup__input_type_description')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;
    // Получите значение полей jobInput и nameInput из свойства value
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

function openPopupZoom(imageSrc, titleText) {
    typeImage.src = imageSrc;
    typeImage.alt = titleText;
    typeImageTitle.textContent = titleText;
  
    openModal(popupImage);
  }

  export function handleOpenPopupZoom(event) {
    const cardImg = event.target;
  
    const card = cardImg.closest(".card");
    const cardTitle = card.querySelector(".card__title").textContent;
  
    openPopupZoom(card.src, cardTitle);
  }


  function openPopupNewCard() {
    inputCard.value = "";
    inputCard.value = "";
    
    openModal(popupNewCard);
  }





// функция добавления карточки 
 const addCard = document.querySelector('.places__list')

 function addCards (cardList){
      cardList.forEach((cardAdds) => {
        
        const cardImg = cardAdds.link;
        const cardTitle = cardAdds.name;
        
      })
 }
 addCard.append(addCards)

// добавления слушателей и функции закрытия нажатием на крестик
function addListenersclosePopup() {
  const popupList = document.querySelectorAll(".popup");
  const popupBtnCloseList = document.querySelectorAll(".popup__close");

  popupBtnCloseList.forEach((popupBtn, index) => {
    popupBtn.addEventListener("click", () => {
      closeModal(popupList[index]);
    });
  });
}

// добавления слушателей и функции закрытия попапа нажатием на оверлей
function addListenersclosePopupOverlay() {
  const popupList = Array.from(document.querySelectorAll(".popup"));

  popupList.forEach((popupItem) => {
    popupItem.addEventListener("mousedown", closeModalOverlay);
  });
}

function addEventListenerClosePopupEsc(){
  const popupList = document.querySelectorAll(".popup");
  popupList.forEach((popupClose,index) => {
    popupClose.addEventListener("Escape", () => {
      closeModalEsc(popupClose[index])
    })
  })
}
addEventListenerClosePopupEsc()


addListenersclosePopup();
addListenersclosePopupOverlay()

function OpenPopupEdit (){
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    
    profileDescription.textContent = jobInput.value;
    profileTitle.textContent = nameInput.value;
    openModal(popupEdit)

} 




editBtn.addEventListener('click',OpenPopupEdit);

addBtn.addEventListener('click',openPopupNewCard);

