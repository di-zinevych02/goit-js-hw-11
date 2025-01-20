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
const loader = document.querySelector('.loader');

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
  loader.classList.add('active'); // Показати індикатор завантаження
  
  fetchPhotosByQuery(searchedQuery)
    .then(data => {
      loader.classList.remove('active');

      if (data.hits.length === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        // Очищаємо галерею перед новим запитом
        galleryEl.innerHTML = '';

        //  Очищаємо інпут через форму при умові, якщо повернеться порожній масив
        searchFormEl.reset();

        return;
      }
      

      const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');

      galleryEl.innerHTML = galleryTemplate;
      
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 300,
      });
      lightbox.refresh();
    })

    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong, please try again later.',
        position: 'topRight',
      });
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loader.classList.add('active');
    });
}
serchFormEl.addEventListener('submit', onSearchFormSubmit);
  
