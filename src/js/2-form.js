 const formData ={
  email: '',
  message: '',
};
const KEY = 'feedback-form-state';
const form = document.querySelector("feedback-form");
const textarea = document.querySelecto("textarea");
const input = document.querySelector("input");

fillForm();

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


function onFormInput(event) {
    const { name, value } = event.target;
    if (name === 'email' || name === 'message') {
        formData[name] = value;
        localStorage.setItem(KEY, JSON.stringify(formData));
    }
}


function fillForm() {
    const savedData = localStorage.getItem(KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        textarea.value = parsedData.message || '';
        input.value = parsedData.email || '';
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if(formData.email === '' || formData.message === ''){
        alert('Please fill in all the fields!');
        return;
    }

    console.log(formData);
    localStorage.removeItem(KEY);
    formData.email = '';
    formData.message = '';
    event.currentTarget.reset();
}