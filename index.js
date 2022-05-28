let countriesData = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
}

window.addEventListener("load", fetchCountries());
