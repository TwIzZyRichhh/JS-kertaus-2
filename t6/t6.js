'use strict';

const leffa1 = {
  title: 'Star Wars',
  rating: 5,
};

const leffa2 = {
  title: 'The Matrix',
  rating: 4,
};

const leffa3 = {
  title: 'Inception',
  rating: 4.9,
};

const leffat = [leffa1, leffa2, leffa3];

leffat.sort(function(a, b){
  return b.rating - a.rating;
});

console.log(leffat);

document.querySelector('#suosikki').innerHTML = `Suosikkileffa on ${leffat[0].title}`;

for (const leffa of leffat) {
  document.querySelector('#leffat').innerHTML += `<li>${leffa.title}, ${leffa.rating}</li>`;
}
