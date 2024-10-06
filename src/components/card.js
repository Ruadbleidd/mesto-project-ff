// Функции для работы с карточками проекта Mesto вынесите в файл card.js,
//  из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому).
//  Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.


import {  addLikeCard,
  delLikeCard,} from "./api"

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
// const buttonLikeCard = document.querySelector(".card__like-button")

//функция обработчик установки/удаления лайка



// export function handleLikeCard(cardElement, cardId, isLiked) { 
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
export function handleLikeCard(cardElement, cardId, isLiked) {
  const { likeButton, likeCounter } = getCardElements(cardElement);
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

function getCardElements(cardElement) {
  return {
    likeButton: cardElement.querySelector(".card__like-button"),
    likeCounter: cardElement.querySelector(".card__like-number")
  };
}


