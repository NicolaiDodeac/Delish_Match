import termsArray from "../public/terms.json"
const termsListEl = document.querySelector('.terms-list');

function renderTerms(termsArray) {
  const markup = termsArray
    .map(term => `<li class="terms-text"><h3 class="terms-item-title">${term.title}</h3><p>${term.content}</p></li>`)
    .join('');

  termsListEl.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTerms(termsArray);
});
