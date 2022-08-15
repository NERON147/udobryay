function toogleStatus () {
    

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const oderForm = document.querySelector('#order-form')

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none')
    }else {
        const totalPriceEl = document.querySelector('.total-price');
        totalPriceEl.innerText = 0
        cartEmpty.classList.remove('none')
    };

    if (cartWrapper.children.length > 0) {
        oderForm.classList.remove('none')
    }else {
        oderForm.classList.add('none')
    }

}