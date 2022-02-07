// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
//перемення ссилка на галерею
const galleryRef = document.querySelector(".gallery") 
//нужно перебрать galleryitems и создать новий массив с нужними тегаими и и атрибутами
const imagesMarkup = galleryItems.map(({preview,original,description})=>
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"></a>`).join("");

console.log(imagesMarkup);
//с помощью insertAdjacentHtml() добавить новій массив в галерею 
galleryRef.insertAdjacentHTML("beforeend",imagesMarkup);



let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

