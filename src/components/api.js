
export const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-21',
    headers: {
      authorization: '6854f039-1743-430f-9824-0ce1c546e773',
      'Content-Type': 'application/json'
    }
  }
  
  export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  
  
  getInitialCards()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    }); 