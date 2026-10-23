'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag.url_svg}" alt="${data.names.common} flag" />
    <div class="country__data">
      <h3 class="country__name">${data.names.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages?.[0]?.name ?? 'N/A'}</p>
      <p class="country__row"><span>💰</span>${data.currencies?.[0]?.name ?? 'N/A'}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const API_KEY = 'rc_live_50f1dee2956743b89f470b38194bed19';

/*
const getCountryData = function (alpha3) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/codes.alpha_3/${alpha3}`,
  );
  request.setRequestHeader('Authorization', `Bearer ${API_KEY}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText).data.objects;

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag.url_svg}" alt="${data.names.common} flag" />
        <div class="country__data">
          <h3 class="country__name">${data.names.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages?.[0]?.name ?? 'N/A'}</p>
          <p class="country__row"><span>💰</span>${data.currencies?.[0]?.name ?? 'N/A'}</p>
        </div>
      </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};


// getCountryData('EGY');
// getCountryData('USA');

///////////////////////////////////////
// Welcome to Callback Hell

const getCountryAndNeighbour = function (alpha3) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5/codes.alpha_3/${alpha3}`,
  );
  request.setRequestHeader('Authorization', `Bearer ${API_KEY}`);
  request.send();

  request.addEventListener('load', function () {
    const response = JSON.parse(this.responseText);
    if (this.status !== 200) {
      return console.error(this.status, response.errors?.[0]?.message);
    }

    const [data] = response.data.objects;
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders ?? [];
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
    );
    request2.setRequestHeader('Authorization', `Bearer ${API_KEY}`);
    request2.send();

    request2.addEventListener('load', function () {
      const response2 = JSON.parse(this.responseText);
      if (this.status !== 200) {
        return console.error(this.status, response2.errors?.[0]?.message);
      }

      const [data2] = response2.data.objects;
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('PRT');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

*/

///////////////////////////////////////
// Consuming Promises

// const getCountryData = function (alpha3) {
//   fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${alpha3}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (alpha3) {
  fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${alpha3}`, {
    headers: {
      Authorization: 'Bearer rc_live_50f1dee2956743b89f470b38194bed19',
    },
  })
    .then(response => response.json())
    .then(json => {
      const country = json.data.objects[0];
      renderCountry(country);
      const neighbour = country.borders?.[0];
      if (!neighbour) return;
      return fetch(
        `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
        {
          headers: {
            Authorization: 'Bearer rc_live_50f1dee2956743b89f470b38194bed19',
          },
        },
      );
    })
    .then(response => response.json())
    .then(json => renderCountry(json.data.objects[0], 'neighbour'));
};

// getCountryData('USA');
