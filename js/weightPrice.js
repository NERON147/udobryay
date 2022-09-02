const odinButton= document.querySelector('.weight1')
const dvaButton= document.querySelector('.weight2')
const triButton= document.querySelector('.weight3')
const chetireButton= document.querySelector('.weight4')
const pyatButton= document.querySelector('.weight5')
const shestButton= document.querySelector('.weight6')

const price = document.querySelector('.price__currency')
const price2 = document.querySelector('.price__currency2')



odinButton.addEventListener('click', function () {
    price.innerText = '500 ₽'
})

dvaButton.addEventListener('click', function () {
    price.innerText = '800 ₽'
})

triButton.addEventListener('click', function () {
    price.innerText = '900 ₽'
})

chetireButton.addEventListener('click', function () {
    price2.innerText = '500 ₽'
    console.log(price.innerText)
})

pyatButton.addEventListener('click', function () {
    price2.innerText = '800 ₽'
})

shestButton.addEventListener('click', function () {
    price2.innerText = '900 ₽'
})
