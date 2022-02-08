import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const formData = {};

populateTextarea();

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.currentTarget.reset();
  const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
});

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    //console.log(savedMessage);
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}

// import '../css/common.css';
// import '../css/03-feedback.css';
// import throttle from 'lodash.throttle';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     input: document.querySelector('input'),
//     textarea: document.querySelector('textarea'),
// };

// const formData = {};

// populateForm();

// refs.form.addEventListener('input',throttle(onFormInput,500));

// function onFormInput (event){
//    formData[event.target.name] = event.target.value;
//    console.log(formData);
//    localStorage.setItem('feedback-form-state',JSON.stringify(formData));
// }

// refs.form.addEventListener('submit', event=>
// {   event.preventDefault();
//     localStorage.removeItem('feedback-form-state');
//     event.currentTarget.reset();
   
// });

// function populateForm(){
//     const saveFormText = JSON.parse(localStorage.getItem('feedback-form-state'));

//     if(saveFormText === null){
//         return;
//     }
//     refs.input.value = saveFormText['email'] || '';
//     refs.textarea.value = saveFormText['message'] || '';
// }