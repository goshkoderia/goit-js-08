// Add imports above this line
import '../css/common.css';
import '../css/01-gallery.css';
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector(".gallery") 

const imagesMarkup = galleryItems.map(({preview,original,description})=>
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"></a>`).join("");

console.log(imagesMarkup);
 
galleryRef.insertAdjacentHTML("beforeend",imagesMarkup);



let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

