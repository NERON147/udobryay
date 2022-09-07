const odinButton= document.querySelector('.weight1')
const dvaButton= document.querySelector('.weight2')


const price = document.querySelector('.price__currency')
const price2 = document.querySelector('.price__currency2')



odinButton.addEventListener('click', function () {
    price2.innerText = '1550 ₽'
})

dvaButton.addEventListener('click', function () {
    price2.innerText = '2100 ₽'
})

console.log(price2.innerText)

