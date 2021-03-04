'use strict';

const popupTemplate = document.querySelector('#form-popup').content.querySelector('.form-popup');
const popupElement = popupTemplate.cloneNode(true);
const formFields = document.querySelectorAll('.form__field');
const inputName = document.querySelector('#form__name');
const inputNumber = document.querySelector('#form__number');
const inputs = document.querySelectorAll('.form__input');

const addMessage = (message) => {
  popupElement.querySelector('.form-popup__message').textContent = message;
}


for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('focus', () => {
    if (inputs[i] === inputName) {
      addMessage('Фамилия Имя Отчество');
    }

    if (inputs[i] === inputNumber) {
      addMessage('8 (911) 025-47-68');
    }

    formFields[i].append(popupElement);
  })

  inputs[i].addEventListener('blur', () => {
    popupElement.remove();
  })
};
