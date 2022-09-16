import { crosshair } from './miras.js';
import { paintCard } from './paintCard.js';

// const main = document.getElementById('main');
// paintCard(main, crosshair);

if (typeof localStorage.getItem('typefilter') === 'object') {
  const type = 'ALL';
  localStorage.setItem('typefilter', type);
  document.getElementById(`button-ALL`).classList.add('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
  paintCard(crosshair, type, false);
} else if (typeof localStorage.getItem('typefilter') === 'string') {
  const typeFilter = localStorage.getItem('typefilter');
  paintCard(crosshair, typeFilter, false);
  document.querySelectorAll('button').forEach((button) => {
    if (button.value === typeFilter) {
      button.classList.add('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
      button.disabled = true;
    }
  });
}
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = localStorage.getItem('typefilter');
    document.getElementById(`button-${filter}`).classList.remove('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
    document.getElementById(`button-${filter}`).disabled = false;
    localStorage.setItem('typefilter', button.value);
    document.getElementById(`button-${button.value}`).classList.add('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
    document.getElementById(`button-${button.value}`).disabled = true;
    paintCard(crosshair, button.value, false);
    reRender();
  });
});
reRender();

document.getElementById('searcher').addEventListener('keyup', () => {
  if (localStorage.getItem('typefilter') !== 'ALL') {
    const filter = localStorage.getItem('typefilter');
    document.getElementById(`button-${filter}`).classList.remove('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
    localStorage.setItem('typefilter', 'ALL');
    document.getElementById(`button-ALL`).classList.add('bg-gray-200', 'shadow-polvillo', 'text-[#222]');
  }
  paintCard(crosshair, document.getElementById('searcher').value, true);
});

function reRender() {
  document.querySelectorAll('div.code-crosshire').forEach((text) => {
    text.addEventListener('click', () => {
      const eleCode = text.children[0];
      navigator.clipboard.writeText(eleCode.textContent);
      //Crea el efecto de la tarjeta "Copied"
      text.children[2].classList.remove('translate-y-5');
      setTimeout(() => {
        text.children[2].classList.add('translate-y-5');
      }, 2500);
    });

    text.addEventListener('mouseenter', () => {
      text.children[1].children[0].classList.add('scale-110', '-translate-y-1');
    });
    text.addEventListener('mouseleave', () => {
      text.children[1].children[0].classList.remove('scale-110', '-translate-y-1');
    });
  });
}
