let caunterValue = 0;
const removeBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

addBtn.addEventListener('click', () => {
    caunterValue +=1;
    value.textContent = caunterValue
});

removeBtn.addEventListener('click', () =>{
     caunterValue -=1;
     value.textContent = caunterValue
})