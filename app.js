import { rasmlar } from "./data.js";

const rasm = document.querySelector(".img-mahsulot");
const plus = document.querySelector(".pilus");
const minus = document.querySelector(".minus");
const raqam = document.querySelector(".raqam");

let hozirgi = 0;

function korsat() {
  rasm.src = rasmlar[hozirgi];
  raqam.textContent = hozirgi + 1;
}

plus.addEventListener("click", () => {
  hozirgi = (hozirgi + 1) % rasmlar.length;
  korsat();
});

minus.addEventListener("click", () => {
  hozirgi = (hozirgi - 1 + rasmlar.length) % rasmlar.length;
  korsat();
});
