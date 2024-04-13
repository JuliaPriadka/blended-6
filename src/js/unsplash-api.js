import axios from 'axios';

// export function getPhotos(query, page) {
//   const BASE_URL = 'https://api.unsplash.com';
//   const END_POINT = '/search/photos';
//   const API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

//   const params = new URLSearchParams({
//     query,
//     page,
//     per_page: 20,
//     orientation: 'portrait',
//     client_id: API_KEY,
//   });

//   return fetch(`${BASE_URL}${END_POINT}/?${params}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export async function getPhotos(query, page) {
  const response = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 20,
      orientation: 'portrait',
    },
  });
  return response.data;
}
