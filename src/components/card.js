// Функции для работы с карточками проекта Mesto вынесите в файл card.js,
//  из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому). 
//  Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.

// import {handleOpenPopupZoom} from '../index.js/'
export {createCard}
export {removeCard}
export {likebtn}
import {initialCards} from './cards'
import {handleOpenPopupZoom} from '../index'


function createCard(name, link, removeCard,likebtn,handleOpenPopupZoom) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  
    cardContent.querySelector(".card__title").textContent = name;
    cardContent.querySelector(".card__image").src = link;
    const deleteButton = cardContent.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", removeCard);
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
 


function likebtn() {
  const btnliked = document.querySelector('.places__list') 
  btnliked.addEventListener('click', function(evt){
    if (evt.target.classList.contains('card__like-button')){
     evt.target.classList.toggle('card__like-button_is-active')
    }
  })
}likebtn()





