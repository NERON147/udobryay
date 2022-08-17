window.addEventListener('click', function (event) {
    
    
    //Объявляем переменную для счетчика из-за области видимости
    let counter;
    //Проверяем клик строго по кнопке
    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus" ) {
// Назодим обертку и + и -
const counterWraper =  event.target.closest('.counter-wrapper')
     
// находим див с числом
 counter = counterWraper.querySelector('[data-counter]')
    }


    // Проверяем является ли элемент кнопкой +
    if(event.target.dataset.action === "plus") {
     counter.innerText = ++counter.innerText
    }
    // Проверка на товар который находится в корзине
    if (event.target.closest('.cart-wrapper') && event.target.closest('.close') || parseInt(counter.innerText) === 1 ) {
        // Удаляем товар из корзины
         event.target.closest('.cart-item').remove()
     }

     // Отображение статуса корзины Пустая / Полная
     
        toogleStatus()
        
    
   
    // Проверяем является ли элемент кнопкой -
    if(event.target.dataset.action === "minus") {
        if (parseInt(counter.innerText) <= 1) {
            return counter.innerText == 1
        }
        counter.innerText = --counter.innerText
    } 
    
    calcCardPrice ()
    // Проверяем был клик на + или - внутри корзины
    if(event.target.hasAttribute('[data-action]' && event.target.closest('.cart-wrapper'))) {
        // Подсчет общей стоимости в корзине
   calcCardPrice ()
    }

    
})


