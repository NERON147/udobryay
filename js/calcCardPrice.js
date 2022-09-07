function calcCardPrice () {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDeliveryEl = document.querySelector('[data-cart-delivery]');
    const cartDeliveryEl2 = document.querySelector('[data-cart-delivery2]');
    const shopButton = document.querySelector('.bm')
    const minText = document.querySelector('.min')


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
    shopButton.disabled = false
    minText.classList.add('none')
    
    
}else {
    shopButton.disabled = true
    minText.classList.remove('none')

    
}


}

