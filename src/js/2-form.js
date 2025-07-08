 const formData ={
  email: '',
  message: '',
};
const KEY = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
const input = document.querySelector("input");


textarea.addEventListener("input", onTextareaInput);
input.addEventListener("input", onInputInput);
form.addEventListener("submit", onFormSubmit);
fillForm();

function onTextareaInput(event)
{
    formData.message = event.target.value;
    localStorage.setItem(KEY,JSON.stringify(formData));
}

function onInputInput(event)
{
    formData.email = event.target.value;
    
    localStorage.setItem(KEY,JSON.stringify(formData));
}


function fillForm() {
    const savedMassage=localStorage.getItem(KEY);
    if (savedMassage) {
        textarea.value = JSON.parse(savedMassage).message;
        input.value = JSON.parse(savedMassage).email;
        formData = JSON.parse(savedMassage);
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if(formData.email=== '' || formData.message === ''){
        alert('Please fill in all the fields!');
        return;
    }
    
    console.log(formData);
    localStorage.clear();
    // formData = { email: '', message: '' };
    formData.email = '';
    formData.message = '';
    event.currentTarget.reset();
}