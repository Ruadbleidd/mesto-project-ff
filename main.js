(()=>{"use strict";function e(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0);return c.querySelector(".card__title").textContent=e,c.querySelector(".card__image").src=t,c.querySelector(".card__delete-button").addEventListener("click",n),c.querySelector(".card__like-button").addEventListener("click",r),c.querySelector(".card__image").addEventListener("click",o),c}function t(e){e.target.closest(".card").remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function r(e){document.addEventListener("keydown",u),e.classList.add("popup_is-opened")}function o(e){document.removeEventListener("keydown",u),e.classList.remove("popup_is-opened")}function c(e){e.target===e.currentTarget&&o(e.currentTarget)}function u(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}var a=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_type_image"),p=document.querySelector(".popup__image"),s=document.querySelector(".popup__caption"),l=document.querySelector(".popup__input_type_card-name"),_=document.querySelector(".popup__input_type_url"),m=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),v=document.querySelector(".popup_type_edit"),f=v.querySelector(".popup__input_type_name"),q=v.querySelector(".popup__input_type_description");function S(e){var t,n,o=e.target,c=o.closest(".card").querySelector(".card__title").textContent;t=o.src,n=c,p.src=t,p.alt=n,s.textContent=n,r(d)}v.addEventListener("submit",(function(e){e.preventDefault(),m.textContent=f.value,y.textContent=q.value,g.reset(),o(v)})),document.querySelectorAll(".card__image").forEach((function(e){e.addEventListener("click",(function(){r(S)}))}));var k=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var o=e(r.name,r.link,t,n,S);k.append(o)}));var L=document.querySelector(".popup_type_new-card"),g=L.querySelector(".popup__form");g.addEventListener("submit",(function(r){r.preventDefault();var c=e(l.value,_.value,t,n,S);g.reset(),o(L),k.prepend(c)})),document.querySelectorAll(".popup__close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){o(t)}))})),Array.from(document.querySelectorAll(".popup")).forEach((function(e){e.addEventListener("mousedown",c)})),a.addEventListener("click",(function(){f.value=m.textContent,q.value=y.textContent,y.textContent=q.value,m.textContent=f.value,r(v)})),i.addEventListener("click",(function(){r(L)}));var E="button_inactive",h="form__input_type_error",x="form__input-error_active",b=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(E),t.disabled=!1):(t.classList.add(E),t.disabled=!0)};Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");b(t,n),t.forEach((function(r){r.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(h),n.classList.remove(x),n.textContent=""}(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(h),r.textContent=n,r.classList.add(x)}(e,t,t.validationMessage)})(e,r),b(t,n)}))}))}(e)}))})();