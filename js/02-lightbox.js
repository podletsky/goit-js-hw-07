import { galleryItems } from './gallery-items.js';
// Change code below this line


const arrayImages = galleryItems.map(({ preview, description, original }) => {
    return `<li class="gallery__item"><a href='${original}'
     class="gallery__link"> <img class='gallery__image' src='${preview}'data-source='${original}' alt='${description}' width='340'></img></a></li>`
}).join('')
console.log(arrayImages)

const galleryList = document.querySelector('.gallery')
galleryList.insertAdjacentHTML('afterbegin', arrayImages)

const lightbox = new SimpleLightbox( '.gallery a', {
    
  captionDelay: 250,
  captionsData: "alt",
})


