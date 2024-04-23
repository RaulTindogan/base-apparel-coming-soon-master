function validateEmail(event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    const error = document.getElementById('error-message')
    const input = document.querySelector('.input-container')
    const errorIcon = document.querySelector('.error-icon')

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      emailInput.focus(); 
      error.innerHTML = "Please enter a valid email"
      input.classList.add('email-error')
      errorIcon.classList.remove('inactive')
      return;
    }
    input.classList.remove('email-error')
    error.innerHTML = ""
    errorIcon.classList.add('inactive')
  }