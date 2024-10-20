const conteiner = document.getElementById("conteiner");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  conteiner.classList.add("active");
});

login.addEventListener("click", () => {
  conteiner.classList.remove("active");
});
