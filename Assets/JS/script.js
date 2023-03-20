const forecastapiurl= "https://api.openweathermap.org/data/2.5/weather?q=";
const currentapiurl= "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey= "3ed16c2e8fec6eabeb503784d8e615d9";
const searchinput = document.querySelector("searchinput");
const searchbtn = document.querySelector(".search button");
const searchhistorybtn = document.querySelector("#history");
let cities = [];

function searchHistory() {
    // First we need to pull cities from local storage. Shown below.
    cities = JSON.parse(localStorage.getItem("cities") || "[]");
    // Followed by a template to create the cities as buttons
    let template = ``;
    for (let i = 0; i < cities.length; i++) {
        template += `
        <button class="searchhistorybtn>${cities[i]}<button>
        `;
    }
    searchhistorybtn.innerHTML = template;
}


async function checkForecast(searchinput){
    const response = await fetch(forecastapiurl + `${searchinput}&appid=${apikey}&units=imperial`);
    var data = await response.json();

    console.log(data);
    for (let i = 7; i < data.list.length; i += 8) {
        let unixDate = data.list[i].dt;
// Day 1 Forecast
    document.querySelector(".day1").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday1").innerHTML = "Temperature: " + Math.round(data.list[i].main.temp) + "°F";
    document.querySelector(".humidityday1").innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    document.querySelector(".windday1").innerHTML = "Wind: " + data.list[i].wind.speed + " mi/h";

// Day 2 Forecast
    document.querySelector(".day2").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday2").innerHTML = "Temperature: " + Math.round(data.list[i].main.temp) + "°F";
    document.querySelector(".humidityday2").innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    document.querySelector(".windday2").innerHTML = "Wind: " + data.list[i].wind.speed + " mi/h";

// Day 3 Forecast
    document.querySelector(".day3").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday3").innerHTML = "Temperature: " + Math.round(data.list[i].main.temp) + "°F";
    document.querySelector(".humidityday3").innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    document.querySelector(".windday3").innerHTML = "Wind: " + data.list[i].wind.speed + " mi/h";

// Day 4 Forecast
    document.querySelector(".day4").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday4").innerHTML = "Temperature: " + Math.round(data.list[i].main.temp) + "°F";
    document.querySelector(".humidityday4").innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    document.querySelector(".windday4").innerHTML = "Wind: " + data.list[i].wind.speed + " mi/h";

// Day 5 Forecast
    document.querySelector(".day5").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday5").innerHTML = "Temperature: " + Math.round(data.list[i].main.temp) + "°F";
    document.querySelector(".humidityday5").innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
    document.querySelector(".windday5").innerHTML = "Wind: " + data.list[i].wind.speed + " mi/h";
    }
}




async function checkCurrentWeather(searchinput){
    const response = await fetch(currentapiurl + `${searchinput}&appid=${apikey}&units=imperial`);
    var data = await response.json();

    let latitude = data.coord.lat;
    let longitude = data.coord.lon;

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mi/h";

    if (!cities.includes(data.name)) {
        cities.push(data.name);
    }
    localStorage.setItem("cities", JSON.stringify(cities));
    searchHistory();
};

function citysearchinput(event) {
    event.preventDefault();

    let searchinputEl = searchinput.value.trim;
    if (searchinputEl.length === 0) {
        alert("City name cannot be blank!");
        return;
    }
    searchinput.value ="";
    checkCurrentWeather();
}

function searchhistorybtnft(event) {
    if (event.target.matches("button")) {
        searchinput.value = "";

        checkCurrentWeather(event.target.textContent);
    }
}
searchbtn.addEventListener("click", ()=>{
    checkForecast(searchinput.value);
    checkCurrentWeather(searchinput.value);
})

searchHistory();
searchbtn.addEventListener("click", citysearchinput);
searchhistorybtn.addEventListener("click", searchhistorybtnft);