// export {openModal}
// export {closeModal}
// export {closeModalEsc}

// function openModal (popup){
// document.addEventListener('keydown',closeModalEsc)
// popup.classlist.add('popup_is-opened')
// }

// function closeModal () {

// }

// function closeModalEsc() {

// }

export function openModal(popup) {
  document.addEventListener("keydown", closeModalEsc);
  popup.classList.add("popup_is-opened");
}

// функция закрытия попапа
export function closeModal(popup) {
  document.removeEventListener("keydown", closeModalEsc);
  popup.classList.remove("popup_is-opened");
}

// функция закрытия попапа нажатием на оверлей
export function closeModalOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

// функция закрытия попапа нажатием на Esc
export function closeModalEsc(event) {
  if (event.key === "Escape") {
    const popupOpened = document.querySelector(".popup_is-opened");
    closeModal(popupOpened);
  }
}
