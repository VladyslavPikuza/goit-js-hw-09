
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

let formData = {
  email: '',
  message: ''
};


const STORAGE_KEY = 'feedback-form-state';


const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


const onInput = (e) => {
  formData[e.target.name] = e.target.value.trim(); 
  saveToLocalStorage(); 
};


const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    formData = JSON.parse(savedData); 
    emailInput.value = formData.email || ''; 
    messageInput.value = formData.message || '';
  }
};


const onSubmit = (e) => {
  e.preventDefault();
  
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields'); 
    return;
  }

  console.log(formData); 
  form.reset(); 
  localStorage.removeItem(STORAGE_KEY); 
  formData = { email: '', message: '' }; 
};


form.addEventListener('input', onInput); 
form.addEventListener('submit', onSubmit); 


document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
