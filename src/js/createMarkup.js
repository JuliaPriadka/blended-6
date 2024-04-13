export function createMarkup(arr) {
  return arr
    .map(item => {
      return `<li><img src="${item.urls.small}" alt="${item.alt_description}"></li>`;
    })
    .join('');
}
