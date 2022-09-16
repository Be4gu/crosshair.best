const main = document.getElementById('main');
export function paintCard(crosshiresJSON, type, searcher) {
  let aux;
  if (searcher) {
    aux = crosshiresJSON.filter((crosshair) => crosshair.alter.includes(type.toUpperCase()));
    aux = shuffle(aux);
  } else {
    if (type !== 'ALL') {
      aux = crosshiresJSON.filter((crosshair) => crosshair.type.includes(type.toLowerCase()));
      aux = shuffle(aux);
    } else {
      aux = crosshiresJSON;
      aux = shuffle(aux);
    }
  }
  main.innerHTML = '';
  aux.forEach((elements) => {
    main.innerHTML += `
      <div class="card-crosshair relative h-44 w-72 overflow-hidden rounded-lg border border-white/90 bg-[#141414] shadow-polvillo md:w-56">
      <div class="absolute top-0 left-0 flex h-32 w-full justify-center bg-white/50">
        <span class="absolute bottom-2 left-2 text-xl font-semibold text-white">${elements.name}</span>
        <img src="${elements.pathImg}" alt="" srcset="" />
      </div>
      <div class="code-crosshire absolute left-0 bottom-0 h-12 w-full cursor-pointer border-t border-white/50">
        <span class="hidden">${elements.codeCrosshair}</span>

        <div class="absolute inset-0 flex h-full w-full items-center justify-center bg-[#ef2d5e]">
          <svg class="h-8 w-8 stroke-white delay-100 duration-200 ease-in-out hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            ></path>
          </svg>
        </div>
        <a class="absolute bottom-0 left-0 h-5 w-20 translate-y-5 rounded-tr-md bg-black/80 text-center text-sm font-bold text-white duration-200">Copied</a>
      </div>
    </div>
    `;
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}
