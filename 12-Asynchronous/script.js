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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

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


///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
    .then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    })
    .then(json => {
      const country = json.data.objects[0];
      if (!country) throw new Error(errorMsg);
      return country;
    });
};

const getCountryData = function (alpha3) {
  // Country 1
  getJSON(
    `https://api.restcountries.com/countries/v5/codes.alpha_3/${alpha3}`,
    'Country not found',
  )
    .then(country => {
      renderCountry(country);

      const neighbour = country.borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://api.restcountries.com/countries/v5/codes.alpha_3/${neighbour}`,
        'Neighbour not found',
      );
    })
    .then(country => renderCountry(country, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('AUS'); // Portugal
});

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}.
The AJAX call will be done to a URL with this format: https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=${API_KEY_2}`,
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://api.restcountries.com/countries/v5/codes.alpha_2/${data.countryCode}`,
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        },
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(json => {
      const country = json.data.objects[0];
      if (!country) throw new Error('Country not found');
      renderCountry(country);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

// whereAmI(31.4165, 31.8133);
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'));
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');

const char = 'a';
console.log(char.charCodeAt(0));



///////////////////////////////////////
// Building a Simple Promise

let lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

function wait(seconds) {
  return new Promise(function (resolve) {
    setInterval(resolve, seconds * 1000);
  });
}

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));



///////////////////////////////////////
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=${API_KEY_2}`,
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryCode}`);

      return fetch(
        `https://api.restcountries.com/countries/v5/codes.alpha_2/${data.countryCode}`,
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        },
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(json => {
      const country = json.data.objects[0];
      if (!country) throw new Error('Country not found');
      renderCountry(country);
    })
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*

const imgContainer = document.querySelector('.images');

function wait(seconds) {
  return new Promise(function (resolve) {
    setInterval(resolve, seconds * 1000);
  });
}

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImg('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 1 is loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

*/
