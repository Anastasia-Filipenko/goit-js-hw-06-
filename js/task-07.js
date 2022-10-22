const inputEl = document.querySelector('#font-size-control');
const textEL = document.querySelector('#text')

inputEl.addEventListener('input', () =>{
    const textSize = Number(inputEl.value);
    textEL.style.fontSize = `${textSize}px`;
}
);