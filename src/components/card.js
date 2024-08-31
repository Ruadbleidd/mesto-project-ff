// Функции для работы с карточками проекта Mesto вынесите в файл card.js,
//  из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). 
//  Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.

// import {handleOpenPopupZoom} from '../index.js/'
export {createCard,removeCard,likebtn}

import {initialCards} from './cards'
import {handleOpenPopupZoom} from '../index'
import {addCards} from '../index'

function createCard(name, link, removeCard) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  
    cardContent.querySelector(".card__title").textContent = name;
    cardContent.querySelector(".card__image").src = link;
    const deleteButton = cardContent.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", removeCard);
    const likeButton = cardContent.querySelector(".card__like-button");
    likeButton.addEventListener("click",likebtn);
    const cardImage = cardContent.querySelector(".card__image")
    cardImage.addEventListener("click",handleOpenPopupZoom)
    return cardContent;
    
  }
  
  const placeList = document.querySelector(".places__list");
  
  initialCards.forEach(function (card) {
    const cardContent = createCard(card.name, card.link, removeCard);
    placeList.append(cardContent);
  });
  
  function removeCard(evt) {
    const evtTarget = evt.target;
    const card = evtTarget.closest(".card");
    card.remove();
  }
 


function likebtn(evt) {
     evt.target.classList.toggle('card__like-button_is-active')
    }
  









