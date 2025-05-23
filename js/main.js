(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let telephoneInput = document.querySelector('#contact-phone');

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    //Check for / remove existing error message
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    //Add the error message if message isn't empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;
    
    if (!value) {
      showErrorMessage(emailInput, 'Required field');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'Must enter a valid email address');
    return false;
    }

    if (value.indexOf('.') === -1) {
      showErrorMessage(emailInput, 'Must enter a valid email address (".com", ".net", etc.)');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault90;
    if (validateForm()) {
      alert('Sucess!  Form submitted');
    }
  })

  emailInput.addEventListener('input', validateEmail);

})();