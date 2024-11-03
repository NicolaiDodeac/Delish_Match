import instr1_mob1x from '../img/how-to-play/how_to_play_1_mob_@1x.webp';
import instr1_mob2x from '../img/how-to-play/how_to_play_1_mob_@2x.webp';
import instr1_desk1x from '../img/how-to-play/how_to_play_1_desc_@1x.webp';
import instr1_desk2x from '../img/how-to-play/how_to_play_1_desc_@2x.webp';

import instr2_mob1x from '../img/how-to-play/how_to_play_2_mob_@1x.webp';
import instr2_mob2x from '../img/how-to-play/how_to_play_2_mob_@2x.webp';
import instr2_desk1x from '../img/how-to-play/how_to_play_2_desc_@1x.webp';
import instr2_desk2x from '../img/how-to-play/how_to_play_2_desc_@2x.webp';

const refs = {
  instructionsListEl: document.querySelector('.how-to-play-list'),
};

const instructions = [
  {
    text1:
      'Manage your kitchen and serve customers by preparing various dishes from fresh ingredients.',
    text2:
      'Each level has different objectives, such as serving a set number of customers or cooking special orders.',
    mob1: instr1_mob1x,
    mob2: instr1_mob2x,
    desk1: instr1_desk1x,
    desk2: instr1_desk2x,
  },
  {
    text1:
      'Use power-ups to speed up cooking or handle particularly demanding customers.',
    text2:
      'Become the top chef by completing levels and earning rewards as you build up your restaurant.',
    mob1: instr2_mob1x,
    mob2: instr2_mob2x,
    desk1: instr2_desk1x,
    desk2: instr2_desk2x,
  },
];

function instructionsTemplate(array) {
  return array
    .map((item, index) => {
      const reverseClass = index % 2 == 0 ? 'reverse' : '';
      return `
  <li class="how-to-play-item ${reverseClass}">
          <div class="htp-text-wrapper">
            <p class="htp-text">${item.text1}</p>
            <p class="htp-text">${item.text2}</p>
          </div>
          <picture>
            <source
              media="(min-width: 1200px)"
              srcset="
                ${item.desk1} 1x,
                ${item.desk2} 2x
              "
              type="image/webp"
            />
            <source
              media="(max-width: 1199px)"
              srcset="
                ${item.mob1} 1x,
                ${item.mob2} 2x
              "
              type="image/webp"
            />
            <img
              src="${item.mob1} "
              alt="${item.name}"
              width="288"
              height="160"
              class="htp-img"
              loading="lazy"
            />
          </picture>
        </li>`;
    })
    .join('');
}

function renderInstructions() {
  const markup = instructionsTemplate(instructions);
  refs.instructionsListEl.innerHTML = markup;
}

renderInstructions();
