// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-function';

const serchFormEl = document.querySelector('.js-search-form');
const btnFormEl = document.querySelector('.search-btn');
const galleryEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === "") {
    iziToast.warning({
      message: 'Please enter a search term.',
      position: 'topRight',
    });

    return;
  }

  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      if (data.total === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';

        searchFormEl.reset();

        return;
      }
      const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
      console.log(galleryTemplate);

      galleryEl.innerHTML = galleryTemplate;
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
      });
    });
};
serchFormEl.addEventListener('submit', onSearchFormSubmit);
  
