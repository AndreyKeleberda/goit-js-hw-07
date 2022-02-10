import { galleryItems } from './gallery-items.js'

const galleryWrapper = document.querySelector('.gallery')
const markUp = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`,
  )
  .join('')

galleryWrapper.insertAdjacentHTML('afterbegin', markUp)

galleryWrapper.addEventListener('click', (event) => {
  event.preventDefault()
  const instance = basicLightbox.create(`
  <div class="modal">
      <img  src=${event.target.dataset.source} alt='image' class = "modalImage" />
  </div>
  `)
  instance.show()
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close()
    }
  })
  document.querySelector('.modal').addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') {
      instance.close()
    }
  })
})

console.log(galleryItems)
