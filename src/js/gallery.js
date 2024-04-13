import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { getPhotos } from './unsplash-api';
import { refs } from './refs';
import { createMarkup } from './createMarkup';
import { showSpinner, stopSpinner } from './spinner';

refs.form.addEventListener('submit', onSubmit);
refs.loadBtn.addEventListener('click', onBtnClick);
let page = 1;
let searchQuery = null;

async function onSubmit(event) {
  event.preventDefault();
  refs.galleryList.innerHTML = '';
  showSpinner();
  searchQuery =
    event.currentTarget.elements['user-search-query'].value.trim();
  try {
      const response = await getPhotos(searchQuery, page)
    
      if (response.results.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      refs.galleryList.innerHTML = createMarkup(response.results);
      if (response.total > 20) {
        refs.loadBtn.classList.remove('is-hidden');
      }
  
    } catch (error) {
        console.log(error.message);
    } finally {
      stopSpinner();
      event.target.reset();
  }
}

async function onBtnClick() {
  showSpinner();
  page += 1;
  try {
    const response = await getPhotos(searchQuery, page)
    
      refs.galleryList.insertAdjacentHTML('beforeend', createMarkup(response.results));
      // Функція для скролу
      const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

      window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
      });
      const lastPage = Math.ceil(response.total / 20);
      if (lastPage === page) {
        refs.loadBtn.classList.add('is-hidden');
        return iziToast.info({
          message:
            "We're sorry, but you've reached the end of search results",
        });
      }
    
  } catch (error) {
    console.log(error.message);
  } finally {
  stopSpinner();
  }

}