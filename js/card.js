// Див внутри корзины, в которой мы добавляем товары
const cartWrapper = document.querySelector('.cart-wrapper')


//Отслеживаем клик по странице

window.addEventListener('click', function (event) {

    const popup = document.querySelector('#popup')
const menuIcon = document.querySelector('.menu-icon')
const menuWrapper = document.querySelector('.menu-icon-wrapper')
const navi = document.querySelector('#navi').cloneNode(1)



menuWrapper.addEventListener("click", hambHndler);

function hambHndler(e) {
  e.preventDefault();
  menuIcon.classList.toggle('menu-icon-active');
  popup.classList.toggle('open');
  document.body.classList.toggle('stop-scrolling');
};

    // Проверяем что клик был совершен по кнопке Добавить в корзину

    if (event.target.hasAttribute('data-cart')) {

        // Находим карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');

        //Собираем данные
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
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
                                                   <div class="cart-item__title">${productInfo.title}</div>
                                                      

                                                    <!-- cart-item__details -->
                                                   <div class="cart-item__details">

                                                  <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                    </div>

                                                    <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                     </div>

                                                     <div class="close">&#10006;</div>

                                                    </div>
                                                    <!-- // cart-item__details -->

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

   // Подсчет общей стоимости в корзине
   calcCardPrice ()

    }
});
