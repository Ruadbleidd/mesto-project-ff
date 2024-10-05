// Функции для работы с карточками проекта Mesto вынесите в файл card.js,
//  из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому).
//  Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.
// import {addLikeCard,delLikeCard,newCards} from "./api"



// // export { createCard}; 
 
 
// // function createCard(name, link, removeCard, likeCard, zoomCard) { 
// //   const cardTemplate = document.querySelector("#card-template").content; 
// //   const cardContent = cardTemplate.querySelector(".card").cloneNode(true); 
 
// //   cardContent.querySelector(".card__title").textContent = name; 
// //   cardContent.querySelector(".card__image").src = link; 
// //   const deleteButton = cardContent.querySelector(".card__delete-button"); 
// //   deleteButton.addEventListener("click", removeCard); 
// //   const likeButton = cardContent.querySelector(".card__like-button"); 
// //   likeButton.addEventListener("click", likeCard); 
// //   const cardImage = cardContent.querySelector(".card__image"); 
// //   cardImage.addEventListener("click", zoomCard); 
  
 
// //   return cardContent; 
// // } 
    
// // function removeCard(evt) { 
// //   const evtTarget = evt.target; 
// //   const card = evtTarget.closest(".card"); 
// //   card.remove(); 
// // } 
 
// // function likebtn(evt) { 
// //   evt.target.classList.toggle("card__like-button_is-active"); 
// // }



// export function createCard({
//   img,
//   title,
//   functionDelCard,
//   handleLikeCard,
//   handlerOpenPopupZoom,
//   cardData,
//   currentUserId,
// }) {
  
//   const cardTemplate = document.querySelector("#card-template").content;
//   const cardContent = cardTemplate.querySelector(".card").cloneNode(true);
//   const buttonDelCard = cardContent.querySelector(".card__delete-button");
//   const buttonLikeCard = cardContent.querySelector(".card__like-button");
//   const cardImg = cardContent.querySelector(".card__image");
//   const cardTitle = cardContent.querySelector(".card__title");
//   const likeCounter = cardContent.querySelector(".card__like-number");

//   cardImg.src = img;
//   cardImg.alt = title;
//   cardTitle.textContent = title;

//   //подгружаем кол-во лайков с сервера
//   likeCounter.textContent = cardData.likes.length;

//   //проверяем есть ли наши лайки, если есть то красим сердце в черный
//   if (cardData.likes.some((like) => like._id === currentUserId)) {
//     buttonLikeCard.classList.add("card__like-button_is-active");
//   }

//   // проверка на владельца карточки
//   if (cardData.owner._id !== currentUserId) {
//     buttonDelCard.remove(); // Удаляем кнопку, если карточка создана не нами
//   } else {
//     // Вешаем событие только на свои карточки
//     buttonDelCard.addEventListener("click", () =>
//       functionDelCard(cardContent, cardData._id)
//     );
//   }

//   buttonLikeCard.addEventListener("click", () => {
//     const isLiked = buttonLikeCard.classList.contains(
//       "card__like-button_is-active"
//     );
//     handleLikeCard(cardContent, cardData._id, isLiked);
//   });
//   cardImg.addEventListener("click", handlerOpenPopupZoom);

//   return cardContent;
  
// }



export function createCard({
  img,
  title,
  functionDelCard,
  handleLikeCard,
  handlerOpenPopupZoom,
  cardData,
  currentUserId,
}) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const buttonDelCard = cardElement.querySelector(".card__delete-button");
  const buttonLikeCard = cardElement.querySelector(".card__like-button");
  const cardImg = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeCounter = cardElement.querySelector(".card__like-number");

  cardImg.src = img;
  cardImg.alt = title;
  cardTitle.textContent = title;

  //подгружаем кол-во лайков с сервера
  likeCounter.textContent = cardData.likes.length;

  //проверяем есть ли наши лайки, если есть то красим сердце в черный
  if (cardData.likes.some((like) => like._id === currentUserId)) {
    buttonLikeCard.classList.add("card__like-button_is-active");
  }

  // проверка на владельца карточки
  if (cardData.owner._id !== currentUserId) {
    buttonDelCard.remove(); // Удаляем кнопку, если карточка создана не нами
  } else {
    // Вешаем событие только на свои карточки
    buttonDelCard.addEventListener("click", () =>
      functionDelCard(cardElement, cardData._id)
    );
  }

  buttonLikeCard.addEventListener("click", () => {
    const isLiked = buttonLikeCard.classList.contains(
      "card__like-button_is-active"
    );
    handleLikeCard(cardElement, cardData._id, isLiked);
  });
  cardImg.addEventListener("click", handlerOpenPopupZoom);

  return cardElement;
}

// @todo: Функция удаления карточки

// export function delCard(evt) {
//   evt.target.closest(".card").remove();
// }

//лайк карточки
// export function likeCard(evt) {
//   if (evt.target.classList.contains("card__like-button")) {
//     evt.target.classList.toggle("card__like-button_is-active");
//   }
// }