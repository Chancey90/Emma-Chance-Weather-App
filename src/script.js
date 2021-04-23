let currentTime = document.querySelector("#currentTime");
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
currentTime.innerHTML = `${days[day]} ${hours}:${minutes}`;

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#celcius-farenheit").innerHTML =
    Math.round(response.data.main.temp) + "&deg;C";
  document.querySelector("#humid").innerHTML =
    "Humidity: " + response.data.main.humidity;
  console.log(response);
  document.querySelector("#wind").innerHTML =
    "Wind Speed: " + response.data.wind.speed;
  document.querySelector("#feels-like").innerHTML =
    "Feels Like: " + Math.round(response.data.main.feels_like) + "&deg;C";
}

function handleCitySearch(event) {
  event.preventDefault();
  let apiKey = "8e0d36a0ebaace1d40dea538e5ba728b";
  let cityInput = document.querySelector("#form-control").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", handleCitySearch);
