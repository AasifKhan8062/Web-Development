let body = document.querySelector(".body");
let primaryMode = document
  .querySelector(".primaryMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Blue";
  });
let secondaryMode = document
  .querySelector(".secondaryMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Gray";
  });
let successMode = document
  .querySelector(".successMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Green";
  });
let dangerMode = document
  .querySelector(".dangerMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Red";
  });
let warningMode = document
  .querySelector(".warningMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Orange";
  });
let infoMode = document
  .querySelector(".infoMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "Cyan";
  });
let lightMode = document
  .querySelector(".lightMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
  });
let darkMode = document
  .querySelector(".darkMode")
  .addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
  });
