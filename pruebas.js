// setInterval(() => {
//   const sep = document.getElementById('separador2');
//   if (sep.classList.contains('hidden')) {
//     sep.classList.remove('hidden');
//   } else {
//     sep.classList.add('hidden');
//   }
// }, 700);
const strin = 'H-o-l-a- -q-u-e- -t-a-l- -v-a- -t-o-d-o-!';
const a = strin.split('-');
console.log(a);
i = 0;
b = setInterval(() => {
  const sep = document.getElementById('separador');
  sep.innerHTML += a[i];
  i++;
  if (a.length === i) {
    clearInterval(b);
  }
}, 120);
