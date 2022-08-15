const btnMinus = document.querySelector('[ data-action="minus"]')
const btnPlus = document.querySelector('[ data-action="plus"]')
const counter = document.querySelector('[ data-counter]')
console.log(counter)

btnMinus.addEventListener('click', function () {
    if (counter.innerText <= 0) {
        return counter.innerText == 0
    }
    counter.innerText = --counter.innerText
    
});

btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText
});