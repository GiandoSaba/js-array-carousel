const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const leftCol = document.querySelector('.slider-container .col-left');
const rightCol = document.querySelector('.slider-container .col-right');

// Dati tre array contenenti:
// - una lista ordinata di 5 immagini,
// - una lista ordinata dei relativi 5 luoghi e
// - una lista di 5 news,
// creare un carosello come nella foto allegata.


// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

//     MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

for (let i = 0; i < items.length; i++) {
    let image = 
    `<div class="image-container w-100">
        <img src="${items[i]}" class="w-100" alt="">
        <div class="text-container">
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
    </div>`;
    leftCol.innerHTML += image;
    let thumb = 
    `<div class="image-container">
        <img src="${items[i]}" class="w-100" alt="">
    </div>`;
    rightCol.innerHTML += thumb;
}

const images = document.querySelectorAll('.col-left .image-container');
const thumbs = document.querySelectorAll('.col-right .image-container');

images[0].classList.add('first', 'active');
images[images.length - 1].classList.add('last');
thumbs[0].classList.add('first', 'active');
thumbs[thumbs.length - 1].classList.add('last');

//     MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// - titolo e
// - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

const buttonUp = document.getElementById('buttonUp');
const buttonDown = document.getElementById('buttonDown');

buttonDown.addEventListener('click', function(){

    let imageLast = false
    const imageActive = document.querySelector('.col-left .image-container.active');
    const nextImage = imageActive.nextElementSibling;
    const thumbActive = document.querySelector('.col-right .image-container.active');
    const nextThumb = thumbActive.nextElementSibling;
    const imageActiveClasses = imageActive.classList;
    
    for (let i = 0; i < imageActiveClasses.length; i++) {
        if (imageActiveClasses[i] == 'last') {
            imageLast = true;
        }
    }
    if (!imageLast) {
        imageActive.classList.remove('active');
        nextImage.classList.add('active');
        thumbActive.classList.remove('active');
        nextThumb.classList.add('active');
    }

});

buttonUp.addEventListener('click', function(){

    let imageFirst = false
    const imageActive = document.querySelector('.col-left .image-container.active');
    const prevImage = imageActive.previousElementSibling;
    const thumbActive = document.querySelector('.col-right .image-container.active');
    const prevThumb = thumbActive.previousElementSibling;
    const imageActiveClasses = imageActive.classList;

    for (let i = 0; i < imageActiveClasses.length; i++) {
        if (imageActiveClasses[i] == 'first') {
            imageFirst = true;
        }
    }

    if(!imageFirst){
        imageActive.classList.remove('active');
        prevImage.classList.add('active');
        thumbActive.classList.remove('active');
        prevThumb.classList.add('active');
    }

});


//     BONUS:
// Aggiungere il ciclo infinito del carosello.Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.