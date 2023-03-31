import { galleryItems } from './gallery-items.js';
// Change code below this line


const arrayImages = galleryItems.map(({ preview, description, original }) => {
    return `<li class="gallery__item"><a href='${original}'
     class="gallery__link"> <img class='gallery__image' src='${preview}'data-source='${original}' alt='${description}' width='340'></img></a></li>`
}).join('')
console.log(arrayImages)

const galleryList = document.querySelector('.gallery')
galleryList.insertAdjacentHTML('afterbegin', arrayImages)






galleryList.addEventListener('click', clickOnPicture)
function clickOnPicture(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src= ${evt.target.dataset.source} width="800" height="600"/>`)
    instance.show()
    window.addEventListener('keydown', onClick)
   
    function onClick(click) {
        if (click.key === "Escape") {
    
            instance.close()
              
        }
    }
}
const lightbox = new SimpleLightbox( '.gallery a', {
    
  captionDelay: 250,
  captionsData: "alt",
}
)


