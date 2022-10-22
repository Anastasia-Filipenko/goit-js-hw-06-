const itemEl = document.querySelectorAll('.item');

console.log(`Number of categories:`, itemEl.length);

const nameEl = document.querySelectorAll('h2');

nameEl.forEach(element => {
console.log(`Category:`, element.textContent),
console.log(`Elements:`, element.nextElementSibling.children.length)
})
    


