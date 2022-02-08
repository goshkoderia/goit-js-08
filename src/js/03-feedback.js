

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
    button: document.querySelector('button'),
};

refs.form.addEventListener('input',onFormInput);

function onFormInput (event){
   const message = event.currentTarget.value;
   localStorage.setItem('feedback-form-state',message);
}