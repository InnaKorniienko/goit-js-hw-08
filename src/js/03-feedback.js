import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form')
console.log(formEl);
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(onFormInput,500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function onFormSubmit(e) {
    e.preventDefault();
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

updateForm();

function updateForm() {
    if (localStorage.getItem(STORAGE_KEY) === null) {
return
    }
    const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
      formEl.elements.email.value = savedForm.email;
      formEl.elements.message.value = savedForm.message;
}

