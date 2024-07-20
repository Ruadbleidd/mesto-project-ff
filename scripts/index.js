// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

function createCard(name, link, alt, removeCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardContent = cardTemplate.querySelector(".card").cloneNode(true);

  cardContent.querySelector(".card__title").textContent = name;
  cardContent.querySelector(".card__image").src = link;
  cardContent.querySelector(".card__image").alt = alt;

  const deleteButton = cardContent.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", removeCard);
  return cardContent;

  function removeCard(evt) {
    const evtTarget = evt.target;
    const card = evtTarget.closest(".card");
    card.remove();
  }
}

const placeList = document.querySelector(".places__list");

initialCards.forEach(function (item) {
  const cardContent = createCard(item.link, item.name);
  placeList.append(cardContent);
});

// function removeCard(evt) {
//   const evtTarget = evt.target;
//   const card = evtTarget.closest(".card");
//   card.remove();
// }
