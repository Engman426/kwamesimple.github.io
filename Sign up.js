const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate name field
  if (nameInput.value === "") {
    alert("Please enter your name");
    nameInput.focus();
    return false;
  }

  // Validate email field
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }

  // Validate password field
  if (passwordInput.value === "") {
    alert("Please enter a password");
    passwordInput.focus();
    return false;
  }

  // Validate confirm password field
  if (confirmPasswordInput.value === "") {
    alert("Please confirm your password");
    confirmPasswordInput.focus();
    return false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match");
    confirmPasswordInput.focus();
    return false;
  }

  // If all fields are valid, submit the form
  alert("Form submitted successfully");
  form.submit();
});
