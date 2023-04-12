// // Задание 1

const submitBtn = document.getElementById("submit-btn");

addEventListener("click", function() {

const usernameInput = document.querySelector('input[name="user"]');
const passwordInput = document.querySelector('input[name="parol"]');
  
if (usernameInput.value === "artem" && passwordInput.value === "123") {
console.log("Вход успешен");
  } 
else {

console.log("Неверный логин или пароль");
  }
});

// Задание 2.

let num = 100;

if (num > 100) {
  document.write(num);
} else {
  console.log(num);
}



