import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardValor = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const cardPalo = ["♦", "♥", "♠", "♣"];

  const elementsPalos = document.querySelectorAll(".palo");
  const elementCardValor = document.querySelector("#cardValor");
  const reloadButton = document.getElementById("reloadButton");

  const generarCarta = () => {
    const valorAleatorio = cardValor[Math.floor(Math.random() * cardValor.length)];
    const paloAleatorio = cardPalo[Math.floor(Math.random() * cardPalo.length)];

    elementCardValor.innerHTML = `<p>${valorAleatorio}</p>`;

    elementsPalos.forEach(el => {
      el.innerHTML =
        paloAleatorio === "♥" || paloAleatorio === "♦"
          ? `<p class="text-danger">${paloAleatorio}</p>`
          : `<p>${paloAleatorio}</p>`;
    });
  };

  reloadButton.addEventListener("click", generarCarta);

  generarCarta(); // genera una carta al cargar
};