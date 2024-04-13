import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createMarkup';

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  const searchQuery =
    event.currentTarget.elements['user-search-query'].value.trim();

  getPhotos(searchQuery)
    .then(response => {
      if (response.results.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      refs.galleryList.innerHTML = createMarkup(response.results);
    })
    .catch(error => {
      console.log(error.message);
    });
}
