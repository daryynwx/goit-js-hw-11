// js/main.js
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = e.target.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({
            message: 'Please enter a search query!',
            position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (data.hits.length === 0) {
            iziToast.info({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }

        createGallery(data.hits);
    } catch (error) {
        iziToast.error({
            message: 'An error occurred while fetching images.',
            position: 'topRight',
        });
        console.error(error);
    } finally {
        hideLoader();
    }
});

const loaderWrapper = document.querySelector('.loader-wrapper');





