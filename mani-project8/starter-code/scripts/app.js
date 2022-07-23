// ! don't forget to wait for DOM content to be loaded!
const countriesElement = document.querySelector("#js-countries");
window.addEventListener("DOMContentLoaded", getCountries);

async function getCountries() {
  /* const response = await fetch('https://restcountries/v3.1/all', {
     method: 'GET'
   }); */
  try {
    const response = await fetch("https://restcountries/v3.1/all");
    const countries = await response.json();
    displayCountries(countries);
  } catch (error) {
    console.log(error);
  }
}
function displayCountries(countries) {
  countries.forEach((country) => {
    const {
      name: { common },
      flags: { svg },
    } = country;

    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const picture = document.createElement("picture");
    const img = document.createElement("img");

    h2.innerText = common;

    img.setAttribute("src", svg);
    img.setAttribute("alt", common);

    picture.appendChild(img);

    section.appendChild(h2);
    section.appendChild(picture);

    countriesElement.appendChild(section);
  });
}
