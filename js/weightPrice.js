const odinButton= document.querySelector('.weight1')
const dvaButton= document.querySelector('.weight2')
const tmpNode = document.getElementById('11');

const price = document.querySelector('.price__currency')
const price2 = document.querySelector('.price__currency2')
 



odinButton.addEventListener('click', function () {
    price2.innerText = '1550 ₽'
})

dvaButton.addEventListener('click', function () {
    price2.innerText = '2100 ₽'
})



