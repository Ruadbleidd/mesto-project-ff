// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
// Спасибо!
function createCard(name, link, removeCard) {
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
  const cardContent = createCard(card.link, card.name, removeCard);
  placeList.append(cardContent);
});

function removeCard(evt) {
  const evtTarget = evt.target;
  const card = evtTarget.closest(".card");
  card.remove();
}
