'use strict';

const planOptions = document.querySelectorAll('.plan-option');

planOptions.forEach((option) => {
  option.addEventListener('click', (event) => {

    planOptions.forEach((item) => {
      item.classList.remove('plan-option--active');
    });

    event.currentTarget.classList.add('plan-option--active');
  });
});

const additionalOptions = document.querySelectorAll('.additional__options-item');

additionalOptions.forEach((option) => {
  option.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('item--active');
  });
});

const form = document.getElementById('leadForm');
const successIcon = document.getElementById('submit__positive-id');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const parent = input.parentElement;
    
    if (!input.value.trim()) {
      parent.classList.add('invalid');
      isValid = false;
    } else {
      parent.classList.remove('invalid');
    }
  });

  if (isValid) {

    successIcon.classList.add('positive-active');

    setTimeout(() => {
      form.reset();
      successIcon.classList.remove('positive-active');
    }, 3000);
  }
});