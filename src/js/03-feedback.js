import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

const formData = {};

populateForm();

refs.form.addEventListener('input',throttle(onFormInput,500));

function onFormInput (event){
   formData[event.target.name] = event.target.value;
   localStorage.setItem('feedback-form-state',JSON.stringify(formData));
}

refs.form.addEventListener('submit', event=>
{   event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
   
});

function populateForm(){
    const saveFormText = JSON.parse(localStorage.getItem('feedback-form-state'));

    if(saveFormText === null){
        return;
    }
    refs.input.value = saveFormText['email'] || '';
    refs.textarea.value = saveFormText['message'] || '';
}