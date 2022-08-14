const btnMinus = document.querySelector('[ data-action="minus"]')
const btnPlus = document.querySelector('[ data-action="plus"]')
const counter = document.querySelector('[ data-counter]')
console.log(counter)

btnMinus.addEventListener('click', function () {
    console.log('Minus click')
    counter.innerText = --counter.innerText
    if (counter.innerText <= 0) {
        return counter.innerText == 0
    }
});

btnPlus.addEventListener('click', function () {
    console.log('Plus click')
    counter.innerText = ++counter.innerText
});