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

const serchFormEl = document.querySelector('search-input');
const btnFormEl = document.querySelector('search-btn');
const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedQuery = event.currentTarget.elements.value;
  
};

btnFormEl.addEventListener("submit", onSearchFormSubmit);
  
