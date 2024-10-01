export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active",
  };
  
  const showError = (formElement,inputElement, errorMessage) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    formError.textContent = errorMessage;
    formError.classList.add(validationConfig.errorClass);
    // console.log(inputElement.id);
  };
  
  const hideError = (formElement,inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    formError.classList.remove(validationConfig.errorClass);
    formError.textContent = "";
  
    // console.log(inputElement.id);
  };
  
  

  const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      // встроенный метод setCustomValidity принимает на вход строку
      // и заменяет ею стандартное сообщение об ошибке
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      // если передать пустую строку, то будут доступны
      // стандартные браузерные сообщения
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      // теперь, если ошибка вызвана регулярным выражением,
      // переменная validationMessage хранит наше кастомное сообщение
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideError(formElement, inputElement);
    }
  };
  
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList,buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList,buttonElement);
      });
    });
  };
  
  export function enableValidation(){
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit',(evt) => {
        evt.preventDefault();
        });
        setEventListeners(formElement)
    });
  }
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
    }
  
  
 export const toggleButtonState =(inputList,buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
      buttonElement.disabled = false;
    }
    }
  
  enableValidation()
  


  export function clearValidation(formElement, validationConfig) {
    // Удаляем текст ошибок валидации и классы ошибок у полей ввода
    const inputElements = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    inputElements.forEach((inputElement) => {
      hideInputError(formElement, inputElement);
    });
  
    // Деактивируем кнопку отправки формы
    const submitButton = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
    toggleButtonState(inputElements, submitButton);
  }







  
  
  
   