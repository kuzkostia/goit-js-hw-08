import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const mainForm = document.querySelector('.feedback-form');

mainForm.addEventListener('input', throttle(onInputData, 500));
mainForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = mainForm.elements;
reloadPage();

function onInputData(event) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem(KEY);
  event.currentTarget.reset();
  dataForm = {};
}
