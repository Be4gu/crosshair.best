const miras = [
  {
    'name': 'Black',
    'type': 'streamer',
    'alter': 'BLACK',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;c;5;u;00076EFF;h;0;f;0;0t;1;0l;2;0o;0;0a;1;0f;0;1t;1;1o;1;1a;1;1m;0;1f;0',
  },
  {
    'name': 'Hitbox',
    'type': 'streamer',
    'alter': 'HITBOX',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;c;5;o;1;0o;4;0a;1;0f;0;1b;0;S;c;1;s;0.616',
  },
  {
    'name': 'StarWraith',
    'type': 'streamer',
    'alter': 'STARWRAITH',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;c;1;o;0;d;1;f;0;m;1;0l;1;0o;1;0a;1;0e;0.375;1b;0;S;s;0.823;o;1',
  },
  {
    'name': 'Lembo',
    'type': 'streamer',
    'alter': 'LEMBO',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;c;1;h;0;f;0;0o;0;0a;1;0f;0;1t;0;1l;0;1o;0;1a;0;1m;0;1f;0;S;s;1.007;o;1',
  },
  {
    'name': 'LucasRojo',
    'type': 'streamer',
    'alter': 'LUCASROJO',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;h;0;0t;1;0l;2;0o;0;0a;1;0f;0;1b;0;S;c;0;o;1',
  },
  {
    'name': 'Zoker',
    'type': 'streamer',
    'alter': 'ZOKER',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;s;1;P;c;8;u;000000FF;h;0;b;1;f;0;0v;5;0g;1;0o;0;0a;1;0f;0;1b;0;S;s;0.4;o;1',
  },
  {
    'name': 'SirMaza',
    'type': 'streamer',
    'alter': 'SIRMAZA',
    'pathPrimary': 'img/descarga.png',
    'pathDown': 'img/descarga (2).png',
    'pathSniper': 'img/descarga (1).png',
    'codeCrosshair': '0;p;0;s;1;P;c;1;d;1;f;0;0l;2;0o;1;0a;0.128;0e;0.2;1b;0;A;c;1;o;1;d;1;0b;0;1b;0',
  },
];
const main = document.getElementById('main');
miras.forEach((miras2) => {
  main.innerHTML += `
  <div class="w-56 h-44 bg-[#141414] overflow-hidden relative rounded-lg border border-white/50 shadow-sm shadow-white/50">
        <div class="w-full flex justify-center absolute bg-white/50 top-0 left-0 h-32">
          <span class="absolute bottom-2 left-2 text-xl text-white font-semibold">${miras2.name}</span>
          <img src="${miras2.pathPrimary}" alt="" srcset="" />
        </div>
        <div class="code-crosshire w-full h-12 absolute left-0 bottom-0 border-t border-white/50 cursor-pointer">
          <span class=" hidden">${miras2.codeCrosshair}</span>
          
          <div class="bg-[#EF2D5E] h-full w-full absolute inset-0 flex justify-center items-center">
            <svg class="w-8 h-8 stroke-white ease-in-out delay-100 hover:-translate-y-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              ></path>
            </svg>
          </div>
          <a class="duration-200 absolute bg-black/80 translate-y-5 w-20 text-center text-white rounded-tr-md h-5 font-bold text-sm bottom-0 left-0">Copied</a>
        </div>
      </div>
  `;
});

document.querySelectorAll('div.code-crosshire').forEach((text) => {
  text.addEventListener('click', () => {
    const eleCode = text.children[0];
    // eleCode.select();
    // eleCode.setSelectionRange(0,99999);

    navigator.clipboard.writeText(eleCode.textContent);

     navigator.clipboard.readText().then(resp =>{
      if (resp === eleCode.textContent) {
        console.log(`ValueSpan:${eleCode.textContent} \nValueClip:${resp}`);
        console.log("CHUTA A LA PERFECCION");
      }
     });

    // console.log(text.children[0].textContent);
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
