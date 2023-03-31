import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const li= document.createElement('li')
// const img = document.createElement('img')
// li.append(img)
const arrayImages = galleryItems.map(({ preview, description, original }) => {
    return `<div class="gallery__item"><a href='${original}'
     class="gallery__link"> <img class='gallery__image' src='${preview}'data-source='${original}' alt='${description}' width='340'></img></a></div>`
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
console.log(basicLightbox)

//     })
   


// onShow: () => document.addEventListener("keydown",handleKeydown),
// //         onClose: () => document.removeEventListener("keydown", handleKeydown),
// //     })







// // function onclick(evt) {
// //     if (!evt.target.classList.contains("gallery")) {
// //         return;
// //     }
// // }const currentCard = evt.target.closest("gallery");
// //   const carId = Number(currentCard.dataset.carId);
// //   const data = galleryItems.find(({ id }) => id === carId);t