
// Див внутри корзины, в которой мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')

//Отслеживаем клик по странице

window.addEventListener('click', function (event) {

  

    // Проверяем что клик был совершен по кнопке Добавить в корзину

    if (event.target.hasAttribute('data-cart')) {
       
        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');
        
        //Выводим сообщение 
        const toastLiveExample = document.getElementById('liveToast')
            const toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
          
        
        //Собираем данные
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            price: card.querySelector('[data-price]').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }


        //Проверяем есть ли такой же товар в корзине
        // cartWrapper.querySelector('[data-id="' + productInfo.id + '"]')
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)


        //Если товар есть в корзине
        if(itemInCart) {
         const counterElement = itemInCart.querySelector('[data-counter]')
         counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter) 
         
        }else {

        const cartItemHTML = `      
                             <div class="cart-item" data-id="${productInfo.id}">
                                 <div class="cart-item__top">
                                     <div class="cart-item__img">
                                             <img src="${productInfo.imgSrc}" alt="">
                                                 </div>
                                                  <div class="cart-item__desc">
                                                   <div class="cart-item__title" id="productName">${productInfo.title}</div>
                                                      

                                                   
                                                   <div class="cart-item__details">

                                                  <div class="items items--small counter-wrapper">
                                                    <div class="items__control minusBtn" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="" id="data-counter" id="productCounter">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                    </div>

                                                    <div class="price">
                                                    <div class="price__currency" id="productPrice">${productInfo.price}</div>
                                                     </div>

                                                     <div class="close">×</div>

                                                    </div>
                                                    

                                                    </div>
                                                 </div>
                                             </div>
    `;
    
        //отображаем товар в корзине
        cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML)
        }

        // Сбрасываем счетчик добавленного товара
        card.querySelector('[data-counter]').innerText = '1'

          // Отображение статуса корзины Пустая / Полная
   toogleStatus()
   countShop () 
   // Подсчет общей стоимости в корзине
   calcCardPrice ()
   countShop () 
    }
});

