import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const refs = {
  listEl: document.querySelector('.faq-list'),
};

const arrayFAQ = [
  {
    title: 'Can I play Delish Match : Match3 & Design offline?',
    text: 'Yes, the game can be played offline, but some features may require an internet connection.',
  },
  {
    title: 'Is the game suitable for children?',
    text: 'Yes, it’s designed to be family-friendly, but please check the age rating for specific guidance.',
  },
  {
    title: 'Are there in-app purchases?',
    text: 'Yes, the game offers optional in-app purchases to enhance the gameplay experience.',
  },
  {
    title: 'How do I get more lives or moves?',
    text: 'Lives usually regenerate over time, and extra moves can be purchased or earned by completing special tasks.',
  },
  {
    title: 'Can I sync the game across devices?',
    text: 'Yes, if you’re connected to a Google Play or Facebook account, your progress can be synced across multiple devices.',
  },
  {
    title: 'How often are new levels added?',
    text: 'New levels and content are added regularly through updates.',
  },
  {
    title: 'What do I do if I encounter a problem or bug?',
    text: 'You can report issues through the in-game support feature or via the app’s page on the Google Play Store.',
  },
];

function markupFAQ({ title, text }) {
  return `  <li class="ac" id="list-question">
        <h3 class="ac-header">
          <button type="button" class="ac-trigger">
            ${title}
            
          </button>
        </h3>
        <div class="ac-panel">
          <p class="ac-text">${text}</p>
        </div>
      </li>
      `;
}

function questionMarkup(array) {
  return array.map(markupFAQ).join('');
}

function insertQuestion(arrayFAQ) {
  const markup = questionMarkup(arrayFAQ);
  refs.listEl.innerHTML = markup;
}

insertQuestion(arrayFAQ);

new Accordion('.accordion-container', {});
