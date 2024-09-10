formData = {
email: "",
message: ""
}
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const updateFormData = () => {
    formData.email = emailInput.value.trim();
    formData.message = messageTextarea.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', updateFormData);

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email;
      messageTextarea.value = message;
      formData.email = email;
      formData.message = message;
  }
});

 form.addEventListener('submit', (event) =>{
 event.preventDefault()
 const {email, message} = formData
  if (email === "" || message === ""){
     alert('Fill please all fields');
     return
 }
console.log(formData);

localStorage.removeItem('feedback-form-state');
formData.email = "";
formData.message = "";
emailInput.value = "";
messageTextarea.value = "";
});
