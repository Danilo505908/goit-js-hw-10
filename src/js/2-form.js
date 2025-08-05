const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
email: '',
message: '',
};

loadFormData();

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {
const { name, value } = event.target;
formData[name] = value.trim();
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(event) {
event.preventDefault();

if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
}

console.log(formData);
localStorage.removeItem(STORAGE_KEY);
formData = { email: '', message: '' };
form.reset();
}

function loadFormData() {
const savedData = localStorage.getItem(STORAGE_KEY);
if (!savedData) return;

try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
} catch (error) {
    console.error('Error parsing saved form data:', error);
}
}
