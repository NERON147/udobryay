function calcCardPrice () {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');
    const cartDeliveryEl2 = document.querySelector('[data-cart-delivery2]');


    let totalPrice = 0;

    cartItems.forEach(function (item) {

      const amountEL = item.querySelector('[data-counter]')
      const priceEL = item.querySelector('.price__currency')
      
      const currentPrice = parseInt(amountEL.innerText) * parseInt(priceEL.innerText)
     

      totalPrice += currentPrice
        // Отображаем цену на странице
        totalPriceEl.innerText = totalPrice

    })


    
    // Работаем с "Доставить"

// Скрываем либо показываем блок доставки
if (totalPrice > 0) {
    cartDeliveryEl.classList.remove('none')
}else {
    cartDeliveryEl.classList.add('none')
}

if (totalPrice > 0) {
    cartDeliveryEl2.classList.remove('none')
}else {
    cartDeliveryEl2.classList.add('none')
}




if (totalPrice > 1100) {
    deliveryCost.classList.add('free')
    deliveryCost.innerText = 'Бесплатно'
}else {
    deliveryCost.classList.remove('free')
    deliveryCost.innerText = '250 ₽'
}


}

