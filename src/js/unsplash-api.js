
export function getPhotos(query) {

    const BASE_URL = "https://api.unsplash.com";
const END_POINT = "/search/photos";
const API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";

const params = new URLSearchParams({
    query,
    page: 1,
    per_page: 20,
    orientation: "portrait",
    client_id: API_KEY,
})
    
    return fetch(`${BASE_URL}${END_POINT}/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
    })
}

getPhotos("cat")
    .then(resp => console.log(resp))
.catch(error => console.log(error.message))