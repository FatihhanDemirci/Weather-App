const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const content = document.querySelector(".content");

btn.addEventListener("click", () => {
  const inputText = input.value;
  getApi(inputText);
});

//APİ Description//
// "These data were obtained from the 'openweathermap' address; you can run it by entering your own API_KEY."//
const getApi = async (value) => {
  const key = "APİ_KEY";
  let url = ` https://api.openweathermap.org/data/2.5/weather?q=${value}&${key}&units=metric`;
  let response = await fetch(url);
  let data = await response.json();
  printValue(data);
};

const printValue = (data) => {
  let city = data.name;
  let country = data.sys.country;
  let temp = data.main.temp;
  let feels = data.main.feels_like;
  let sunrise = data.sys.sunrise;
  let sunset = data.sys.sunset;
  let description = data.weather[0].description;
  let wind = data.wind.speed;

  content.innerHTML = `
  <h3>${city} / ${country}</h3>
        <br />
        <div class="degree">
          <h1>${temp} °C</h1>
        </div>
        <br />
        <div class="desc">
          <h3>${description}</h3>
        </div>
        <div class="wind">
          <h3>Wind : ${wind}</h3>
        </div>
        <br />
        <div class="feels-like">
          <h3>${feels}°C</h3>
        </div>
         <div class="sun">
          <h3>${sunrise}°C</h3>
          <h3>${sunset}°C</h3>
        </div>
  `;
};
