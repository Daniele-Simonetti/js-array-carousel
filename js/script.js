// Consegna:
// Dati tre array contenenti:
//  - una lista ordinata di 5 immagini,
//  - una lista ordinata dei relativi 5 luoghi e
//  - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
//  - titolo e
//  - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.


// 1.inserire gli array dati con la consegna
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
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// 2.creare un div con classe "img" nel quale inserisco con un ciclo for le immagini dell'array per testare lo slide di destra e con lo stesso metodo creo un ciclo for per visualizzare le immagini nello slide di sinistra

// 2.1 l'immagine viene visualizzata quando ha la classe "active"

// 3.1 se clicco sulla freccia down allora l'immagine selezionata precedentemente nello slide di destra perde la sua classe selcted e la acquisice quella sucessiva e la foto di destra perde la classe active e la prende quella sucessiva

// 3.2 se clicco sulla freccia up allora l'immagine selezionata nello slide di destra perde la sua classe selcted e la acquisice quella precedente e la foto di destra selezionata perde la classe active e la acquisisce quella precedente

// 4. quando un'immagine è selezionata creo un div all'interno del "div class=img",precedentemente creato, con classe img-text e al suo interno creo un h2 e un div con scritto all'interno quello dato negli array attraverso un altro ciclo for


// const buttonNext = document.querySelector('.slider .arrow-down');
// const buttonPrev = document.querySelector('.slider .arrow-up');


// buttonNext.addEventListener ('click', function () {
  
//   const elementActive = document.querySelector('.main-box .img-box .active');

//   const listClasses = elementActive.classList;
  
//   let last = false;
  
//   for (let i = 0; i < listClasses.lenght; i++) {
//     if (listClasses[i] == 'last') {
//       last = true;
//     }
//   }

//   if (last == false) {

//     elementActive.classList.remove('active');

//     const elementNext = elementActive.nextElementSibling;

//     elementNext.classList.add('active');
//   } 

//   let first = false;
  
//   for (let i = 0; i < listClasses.lenght; i++) {
//     if (listClasses[i] == 'first') {
//       first = true;
//     }
//   }

//   if (first == false) {

//     elementActive.classList.remove('active');

//     const elementPrev = elementActive.previousElementSibling;

//     elementPrev.classList.add('active');
//   } 
// });

