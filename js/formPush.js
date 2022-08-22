const token = "5704317545:AAF437LLv5g5GPegKVvaVvQgPV-v7nnqHFI";
const chatId = "-1001585192425";
const URI_API = `https://api.telegram.org/bot${token}/sendMessage`;
const success = document.getElementById('success');
document.getElementById('form-group').addEventListener('submit', function (e) {
    e.preventDefault()

    let message = `<b> Заявка с сайта! </b>\n`;
    message += `<b> Название товара:  </b> ${this.productName}\n`;
    message += `<b> Кол-во:  </b> ${this.productCounter}\n`;
    message += `<b> Цена:  </b> ${this.productPrice}\n`;

    message += `<b> Отправитель:  </b> ${this.name.value}\n`;
    message += `<b> Телефон:  </b> ${this.tel.value}\n`;
    message += `<b> Адрес:  </b> ${this.adres.value}\n`;
    message += `<b> Когда доставить:  </b> ${this.time.value}\n`;
    message += `<b> Комментарий:  </b> ${this.comment.value}\n`;
    console.log(message)

    axios.post(URI_API, {
        chat_id: chatId,
        parse_mode: 'html',
        text: message,
    })
    .then((res) => {
        this.name.value = "";
        this.tel.value = "";
        this.adres.value = "";
        this.time.value = "";
        this.comment.value = "";
        success.innerHTML = "Спасибо! Ваш заказ сформирован, с Вами свяжутся через несколько минут!"
        success.style.display = "block";
        
    })


    
})


