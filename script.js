document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
  
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
  
    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
  
    // Validate name (must not be empty)
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      nameInput.focus();
      return false;
    }
  
    // Validate email (must be a valid email address)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = "Invalid email address.";
      emailInput.focus();
      return false;
    }
  
    // Validate password (must be at least 6 characters long)
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long.";
      passwordInput.focus();
      return false;
    }
  
    // Validate confirm password (must match password)
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "Passwords do not match.";
      confirmPasswordInput.focus();
      return false;
    }
  
alert("Form submitted successfully!");
  document.getElementById("myForm").reset(); // Reset the form
});
  
  