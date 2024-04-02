export function getImages(query) {
    const BASE_URL = "https://pixabay.com/";
    const END_POINT = "api/";
    const API_KEY = "43200126-fe47e1a89238cebb9641f8f5f";
    const params = new URLSearchParams({
        symbol : `${query}`,
    });
    const url = `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${params}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url).then(res => res.json());
}

