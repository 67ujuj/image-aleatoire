var imagehtml = document.getElementById('imagehtml');
let startphoto = 1;
function taMer(nb) {
  if (nb == 0) {
    console.log('pas de photos');
  } else if (nb < 0) {
    console.log('inférieur a 0 !');
  } else if (nb > 0) {
    console.log('Vous voulez afficher', nb, 'photos.');
  }
  let x = 0;
  while (x < nb) {
    x++;
    console.log(x);
    imagehtml.innerHTML += `<img class = "ligneimage" src = "https://picsum.photos/200?random=${startphoto}">`;
    startphoto++;
  }
}

//
window.addEventListener('scroll', () => {
  console.log('scrolled', window.scrollY); //scrolled from top
  console.log(window.innerHeight); //visible part of screen
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    taMer(6);
  }
});

var nb = 9;
taMer(nb);
