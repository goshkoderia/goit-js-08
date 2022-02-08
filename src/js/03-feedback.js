import '../css/common.css';
import '../css/03-feedback.css';
import {throttle} from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    button: document.querySelector('button'),
};
populateForm();
const formData = {};

refs.form.addEventListener('input',throttle(onFormInput,500));
refs.form.addEventListener('submit',onFormSubmit);

function onFormInput (event){
   formData[event.target.name] = event.target.value;
   console.log(formData);
   localStorage.setItem('feedback-form-state',JSON.stringify(formData));
}

function onFormSubmit (event){
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
}

function populateForm(){
    const saveFormText = JSON.parse(localStorage.getItem('feedback-form-state'));

    if(saveFormText){
        refs.input.value = saveFormText['email'];
        refs.textarea.value = saveFormText['message']
    }
}