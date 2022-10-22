
const btn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color")

function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;

}
);
