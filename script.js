// const emailField = document.getElementById('email');
// const passwordField = document.getElementById('password');
// const form = document.getElementById('form');

// function validate(){

// form.addEventListener('submit', function(event) {
//   let valid = true;

//   console.log("reached");
//   // Email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   alert(emailField);
//   if (!emailRegex.test(emailField.value)) {
//     valid = false;
//   } 

//   // Password validation
//   const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;
//   console.log(passwordField);
//   if (!passwordRegex.test(passwordField.value)) {
//     valid = false;
//   }

//   if (!valid) {
//     event.preventDefault(); // Prevent form submission if validation fails
//   }
// });

// }

const form = document.querySelector("form");
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

function validateAndEmail(){

  console.log("reached");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

  if(!emailField.value.match(emailRegex)){
    email_error.classList.add("error_display"); 
  }
  else{
    email_error.classList.remove("error_display");
  }

  if(!passwordField.value.match(passwordRegex)){
    password_error.classList.add("error_display"); 
  }
  else{
    password_error.classList.remove("error_display");
  }
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  validateAndEmail();


})