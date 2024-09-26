// Функции для работы с карточками проекта Mesto вынесите в файл card.js,
//  из него должна экспортироваться функция createCard, которую вы создали раньше (у вас она может называться по-другому).
//  Функции, обрабатывающие события лайка и удаления карточки, также должны находиться в этом файле и экспортироваться из него.

export { createCard, removeCard, likebtn };


function createCard(name, link, removeCard, likeCard, zoomCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  cardContent.querySelector(".card__title").textContent = name;
  cardContent.querySelector(".card__image").src = link;
  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", removeCard);
  const likeButton = cardContent.querySelector(".card__like-button");
  likeButton.addEventListener("click", likeCard);
  const cardImage = cardContent.querySelector(".card__image");
  cardImage.addEventListener("click", zoomCard);
 

  return cardContent;
}
   
function removeCard(evt) {
  const evtTarget = evt.target;
  const card = evtTarget.closest(".card");
  card.remove();
}

function likebtn(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
