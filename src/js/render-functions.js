import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const loaderWrapper = document.querySelector('.loader-wrapper');

// Створення розмітки галереї
export function createGallery(images) {
    const markup = images
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${likes}</p>
        <p><b>Views:</b> ${views}</p>
        <p><b>Comments:</b> ${comments}</p>
        <p><b>Downloads:</b> ${downloads}</p>
      </div>
    </li>
  `
        )
        .join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh(); // Оновлюємо SimpleLightbox після додавання
}

// Очищення галереї
export function clearGallery() {
    gallery.innerHTML = '';
}

// Показ/приховування лоадера
export function showLoader() {
    loaderWrapper.classList.remove('hidden');
}

export function hideLoader() {
    loaderWrapper.classList.add('hidden');
}
