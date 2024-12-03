"use strict";

const cardInner = document.querySelector(".flip-card-inner");

cardInner.addEventListener("click", () => {
  cardInner.classList.toggle("flip");
});
