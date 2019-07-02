"use strict";

let quoteDiv = document.querySelector(".quote");
let quoteText = document.querySelector("#quote-text");
let authorName = document.querySelector("#quote-author");
let newQuoteButton = document.querySelector("#new-quote");
let showAgain = document.querySelector("#show-again");

quoteText.textContent="Здесь собрана полная коллекция цитат \n знаменитого философа 21 века \n  Джейсона Стейтема";

let themesSources=[
    "http://2d.by/wallpapers/d/dzheyson_stethem.jpg",
    "http://img.desktopwallpapers.ru/men/pics/wide/1920x1080/e2370795ea7dcf208bbdc30a0ae8d131.jpg",
    "http://www.gandex.ru/upl/oboi/gandex.ru-26_71d26745323a6e450a05279411e55ff6.jpg",
    "https://i.pinimg.com/originals/2a/0e/97/2a0e97d9e292e0326f52b5d9cf0cf274.jpg",
    "http://www.setwalls.ru/pic/201305/1920x1080/setwalls.ru-47786.jpg",
    "https://i.pinimg.com/originals/d0/87/a8/d087a85ec0e4bcf69f19403624c57873.jpg",
    "https://i1.wallbox.ru/wallpapers/main2/201718/akter-kostum-dzejson-stethem.jpg",
    "https://wallbox.ru/wallpapers/main2/201727/1499318691595dc9a36c36d9.15728174.jpg",
    "http://hotwalls.ru/wallpapers/stethem_v_ochkah_i_kostyume/download/1920x1200.jpg"

];
let quotesSources=[
    "Когда я родился участковый застрелился.",
    "Делу время, потехе час. \n Пиво, водочка и квас.",
    "11 классов для понтов, \n 9 - для пацанов.",
    "А мне бы крышу повыше, \n  ночи потище, слова послаще,\n  и пиваса почаще.",
    "Живи, кайфуй, гуляй, играй, упал вставай, наглей, ругай, чужих роняй, своих спасай, пельмени, суп, картошка, чай.",
    "Водка, пиво, коньячок, \n я иду на турничок!",
    "Лучше с кентами на велике, чем с чертями на гелике.",
    "Если предали один раз-то это только первый раз.  Если предали ещё - это уже второй.",
    "Не тот велик, кто не велик, \n а велик тот, кто велик."
];

let images = [];
let quotes=[];

function prepareImages() {

    images = [...new Set(themesSources)];
    quotes = [...new Set(quotesSources)];

    images.sort((a, b) => Math.random() - 0.5);
    quotes.sort((a, b) => Math.random() - 0.5);
    images.push("http://hq-wallpapers.ru/wallpapers/1/hq-wallpapers_ru_mens_3559_1920x1080.jpg");
    quotes.push("Стетхэм, да ты задолбал нести фигню!")
}

function changeTheme() {
    showAgain.style = "display:none";
    newQuoteButton.style = "display:block";
    authorName.textContent = "Jason Statham";

    if (!images.length) prepareImages();

    let deletedImages = images.splice(0, 1);
    let deletedQuotes = quotes.splice(0, 1);

    let image = deletedImages[0];
    let quote = deletedQuotes[0];

    document.body.style.backgroundImage = 'url(' + image + ')';
    quoteText.textContent = quote;
    if (!images.length) {
        authorName.textContent = "Bruce Willis";
        showAgain.style="display:block";
        newQuoteButton.style = "display:none";
    }
}

newQuoteButton.addEventListener('click', changeTheme);
showAgain.addEventListener('click', changeTheme);


/*
    if (!images.length) {
        newQuoteButton.addEventListener('click', lastMessage)
    }
}
function lastMessage() {
    //newQuoteButton.disabled = true;
    newQuoteButton.style="display:none";
    document.body.style.backgroundImage = 'url("http://hq-wallpapers.ru/wallpapers/1/hq-wallpapers_ru_mens_3559_1920x1080.jpg")';
    quoteText.textContent = "Стетхэм, да ты задолбал нести фигню!";
    authorName.textContent = "Bruce Willis";
    showAgain.style="display:block";
}

 */
