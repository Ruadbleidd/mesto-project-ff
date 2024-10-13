
// export const validationConfig = {  
//     formSelector: ".popup__form",  
//     inputSelector: ".popup__input",  
//     submitButtonSelector: ".popup__button",  
//     inactiveButtonClass: "popup__button_submit_inactive",  
//     inputErrorClass: "popup__input_type_error",  
//     errorClass: "popup__input-error_active",  
//   };  


    
// import { validationConfig} from "../index";  
  
  
  
// export const showInputError = (formElement, inputElement, errorMessage) => {  
//   // Находим элемент ошибки внутри самой функции  
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  
//   console.log('kek')
//   // Остальной код такой же  
//   inputElement.classList.add(validationConfig,inputErrorClass);  
//   errorElement.textContent = errorMessage;  
//   errorElement.classList.add(validationConfig.errorClass);  
  
// };  
export const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {  
  console.log('showInputError called');
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  
  if (errorElement) {
    inputElement.classList.add(validationConfig.inputErrorClass);  
    errorElement.textContent = errorMessage;  
    errorElement.classList.add(validationConfig.errorClass);  
  }
};



// export const showInputError = function showInputError(formElement, inputElement, errorMessage, validationConfig) { 
//   // Находим элемент ошибки внутри самой функции 
//   const errorElement = formElement.querySelector(".".concat(inputElement.id, "-error")); 
//   if (validationConfig && validationConfig.inputErrorClass) { // Проверяем, есть ли класс ошибки в объекте конфигурации 
//     inputElement.classList.add(validationConfig.inputErrorClass); // Добавляем класс ошибки из объекта конфигурации в элемент ввода 
//   } 
//   errorElement.textContent = errorMessage; 
//   if (validationConfig && validationConfig.errorClass) { // Проверяем, есть ли класс ошибки в объекте конфигурации 
//     errorElement.classList.add(validationConfig.errorClass); // Добавляем класс ошибки из объекта конфигурации в элемент ошибки 
//   } 
// };    
 
// export const disableButton = (buttonElement,validationConfig) => {   
//   const inactiveBtn = document.querySelector(validationConfig.inactiveButtonClass) 
//   buttonElement.disabled = true;   
//   buttonElement.classList.add(inactiveBtn); // добавляем класс для стилизации неактивной кнопки   
// };   
 
 
 
 
 
export const hideInputError = (formElement, inputElement, validationConfig) => {  
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);  
  if (errorElement) {
    inputElement.classList.remove(validationConfig.inputErrorClass);  
    errorElement.classList.remove(validationConfig.errorClass);  
    errorElement.textContent = "";  
    inputElement.setCustomValidity("");  
  }
}; 
  // export const hideInputError = function hideInputError(formElement, inputElement, validationConfig) { 
  //   // Находим элемент ошибки 
  //   const errorElement = formElement.querySelector(".".concat(inputElement.id, "-error")); 
  //   if (validationConfig && validationConfig.inputErrorClass) { // Проверяем, есть ли класс ошибки в объекте конфигурации 
  //     inputElement.classList.remove(validationConfig.inputErrorClass); // Убираем класс ошибки из элемента ввода 
  //   } 
  //   if (validationConfig && validationConfig.errorClass) { // Проверяем, есть ли класс ошибки в объекте конфигурации 
  //     errorElement.classList.remove(validationConfig.errorClass); // Убираем класс ошибки из элемента ошибки 
  //   } 
  //   errorElement.textContent = ""; 
  //   inputElement.setCustomValidity(""); 
  // };  
 
 
 
 
 
 
  // Функция принимает массив полей  
    
 export const hasInvalidInput = (inputList) => {  
    // проходим по этому массиву методом some  
    return inputList.some((inputElement) => {  
      // Если поле не валидно, колбэк вернёт true  
      // Обход массива прекратится и вся функция  
      // hasInvalidInput вернёт true  
      return !inputElement.validity.valid;  
    });  
  };  
    
  // Функция isValid теперь принимает formElement и inputElement,  
  // а не берёт их из внешней области видимости  
    
  // export const isValid = (formElement, inputElement,validationConfig,errorMessage) => {  
  //   if (inputElement.validity.patternMismatch) {  
  //     // встроенный метод setCustomValidity принимает на вход строку  
  //     // и заменяет ею стандартное сообщение об ошибке  
  //     inputElement.setCustomValidity(inputElement.dataset.errorMessage);  
  //   } else {  
  //     // если передать пустую строку, то будут доступны  
  //     // стандартные браузерные сообщения  
  //     inputElement.setCustomValidity("");  
  //   }if (!inputElement.validity.valid) {  
  //     // теперь, если ошибка вызвана регулярным выражением,  
  //     // переменная validationMessage хранит наше кастомное сообщение  
  //     showInputError(formElement,errorMessage,inputElement,validationConfig,inputElement.validationMessage);  
  //   } else {  
  //     hideInputError(formElement, inputElement,validationConfig);  
  //   }  
  // };  
  export const isValid = (formElement, inputElement, validationConfig) => {  
    if (inputElement.validity.patternMismatch) {  
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);  
    } else {  
      inputElement.setCustomValidity("");  
    }  
  
    if (!inputElement.validity.valid) {  
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);  
    } else {  
      hideInputError(formElement, inputElement, validationConfig);  
    }  
  }; 



 
  
  // Функция для деактивации кнопки  
  // export const disableButton = (buttonElement,validationConfig) => {   
  //   buttonElement.disabled = true;   
  //   buttonElement.classList.add(validationConfig.inactiveButtonClass); // добавляем класс для стилизации неактивной кнопки   
     
  // };   
  export const disableButton = (buttonElement, validationConfig) => {   
    console.log('omg');
    buttonElement.disabled = true;   
    buttonElement.classList.add(validationConfig.inactiveButtonClass); // добавляем класс для стилизации неактивной кнопки   
  };
 
 
    
  // Функция для активации кнопки  
  // const enableButton = (buttonElement,validationConfig) => {   
  //   buttonElement.disabled = false;   
  //   buttonElement.classList.remove(validationConfig.inactiveButtonClass); // Убираем класс неактивной кнопки   
  // }; 
  export const enableButton = (buttonElement, validationConfig) => {   
    console.log('omg')
    buttonElement.disabled = false;   
    buttonElement.classList.remove(validationConfig.inactiveButtonClass); // Убираем класс неактивной кнопки   
  };
    
  // Функция принимает массив полей ввода  
  // и элемент кнопки, состояние которой нужно менять  
    
  // export const toggleButtonState = (inputList, buttonElement,validationConfig) => {  
  //   // Если есть хотя бы один невалидный инпут  
  //   if (hasInvalidInput(inputList)) {  
  //     // сделай кнопку неактивной  
  //     disableButton(buttonElement,validationConfig);  
  //   } else {  
  //     // иначе сделай кнопку активной  
  //     enableButton(buttonElement,validationConfig);  
  //   }  
  // };  
  export const toggleButtonState = (inputList, buttonElement, validationConfig) => {  
    if (hasInvalidInput(inputList)) {  
      disableButton(buttonElement, validationConfig);  
    } else {  
      enableButton(buttonElement, validationConfig);  
    }  
  };


    
//функция enableValidation принимает объект validationConfig 
export function enableValidation(validationConfig) { 
  const formList = Array.from( 
    document.querySelectorAll(validationConfig.formSelector) 
  ); 
  formList.forEach((formElement) => { 
    setEventListeners( 
      formElement, 
      validationConfig.inputSelector, 
      validationConfig.inputErrorClass, 
      validationConfig.errorClass, 
      validationConfig.submitButtonSelector, 
      validationConfig.inactiveButtonClass 
    ); 
  }); 
}
// функция setEventListeners принимает необходимые селекторы классов и передает их др.функциям 
// export function setEventListeners( 
//   formElement, 
//   inputSelector, 
//   inputErrorClass, 
//   errorClass, 
//   submitButtonSelector, 
//   inactiveButtonClass 
// ) { 
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
//   const buttonElement = formElement.querySelector(submitButtonSelector); 
//   toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
//   inputList.forEach((inputElement) => { 
//     inputElement.addEventListener("input", function () { 
//       isValid(formElement, inputElement, inputErrorClass, errorClass); 
//       toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
//     }); 
//   }); 
// }  
export function setEventListeners( 
  formElement, 
  inputSelector, 
  inputErrorClass, 
  errorClass, 
  submitButtonSelector, 
  inactiveButtonClass 
) { 
  const inputList = Array.from(formElement.querySelectorAll(inputSelector)); 
  const buttonElement = formElement.querySelector(submitButtonSelector); 
  toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
  inputList.forEach((inputElement) => { 
    inputElement.addEventListener("input", function () { 
      isValid(formElement, inputElement, { inputErrorClass, errorClass }); 
      toggleButtonState(inputList, buttonElement, inactiveButtonClass); 
    }); 
  }); 
}

 
  // Функция clearValidation, которая очищает  
  // ошибки валидации формы и делает кнопку отправки формы неактивной  
    
  // Пройтись по всем элементам формы и удалить текст ошибок валидации  
  // Убрать класс ошибок у соответствующих полей  
  // Деактивировать кнопку отправки формы  
    
  // export function clearValidation(formElement, validationConfig) {  
  //   // Удаляем текст ошибок валидации и классы ошибок у полей ввода  
  //   const inputElements = Array.from(  
  //     formElement.querySelectorAll(validationConfig.inputSelector)  
  //   );  
  //   inputElements.forEach((inputElement) => {  
  //     hideInputError(formElement, inputElement,validationConfig);  
  //   });  
    
  //   // Деактивируем кнопку отправки формы  
  //   const submitButton = formElement.querySelector(  
  //     validationConfig.submitButtonSelector  
  //   );  
  //   toggleButtonState(inputElements, submitButton,validationConfig);  
  // }  

  export function clearValidation(formElement, validationConfig) {  
    const inputElements = Array.from(  
      formElement.querySelectorAll(validationConfig.inputSelector)  
    );  
    inputElements.forEach((inputElement) => {  
      hideInputError(formElement, inputElement, validationConfig);  
    });  
  
    const submitButton = formElement.querySelector(  
      validationConfig.submitButtonSelector  
    );  
    toggleButtonState(inputElements, submitButton, validationConfig);  
  }