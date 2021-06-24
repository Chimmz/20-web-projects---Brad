import formValidator from "./validator.js";

const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email')
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

const inputFields = [username, email, password, password2];

const validateFields = function() {
   inputFields.forEach(field => {
      const value = field.value.trim();
      const errElement = field.parentElement.querySelector('small');

      if (formValidator.isEmpty(value)) {
         errElement.textContent = 'This field cannot be empty';
         errElement.style.visibility = 'visible'
      }
      if (field.type === 'email' && !formValidator.checkEmail(value)) {
         errElement.textContent = 'Invalid email entered';
      }
   })
   
}
form.addEventListener('submit', function(ev) {
   ev.preventDefault();
   validateFields();
})