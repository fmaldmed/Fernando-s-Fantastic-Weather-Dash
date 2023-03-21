const forecastapiurl= "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
const currentapiurl= "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apikey= "3ed16c2e8fec6eabeb503784d8e615d9";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const searchhistorybtn = document.querySelector("#history");
let cities = [];

function searchHistory() {
    // First we need to pull cities from local storage. Shown below.
    cities = JSON.parse(localStorage.getItem("cities") || "[]");
    // Followed by a template to create the cities as buttons.
    let template = ``;
    for (let i = 0; i < cities.length; i++) {
        template += `
        <button class="searchhistorybtn>${cities[i]}<button>
        `;
    }
    searchhistorybtn.innerHTML = template;
}


function checkForecast(latitude, longitude) {
    let forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=imperial&q=`;

    fetch(forecasturl)
    .then(function (response) {
        return response.json();
    })


    for (let i = 7; i < response.list.length; i += 8) {
        // let unixDate = data.list[i].dt;
// Day 1 Forecast
    document.querySelector(".day1").innerHTML = moment(data.list[i+1], "X").format("MM/DD/YYYY");
    document.querySelector(".tempday1").innerHTML = "Temperature: " + Math.round(data.list[i+1].main.temp) + "°F";
    document.querySelector(".humidityday1").innerHTML = "Humidity: " + data.list[i+1].main.humidity + "%";
    document.querySelector(".windday1").innerHTML = "Wind: " + data.list[i+1].wind.speed + " mi/h";

// Day 2 Forecast
    document.querySelector(".day2").innerHTML = moment(data.list[i+2], "X").format("MM/DD/YYYY");
    document.querySelector(".tempday2").innerHTML = "Temperature: " + Math.round(data.list[i+2].main.temp) + "°F";
    document.querySelector(".humidityday2").innerHTML = "Humidity: " + data.list[i+2].main.humidity + "%";
    document.querySelector(".windday2").innerHTML = "Wind: " + data.list[i+2].wind.speed + " mi/h";

// Day 3 Forecast
    document.querySelector(".day3").innerHTML = moment(data.list[i+3], "X").format("MM/DD/YYYY");
    document.querySelector(".tempday3").innerHTML = "Temperature: " + Math.round(data.list[i+3].main.temp) + "°F";
    document.querySelector(".humidityday3").innerHTML = "Humidity: " + data.list[i+3].main.humidity + "%";
    document.querySelector(".windday3").innerHTML = "Wind: " + data.list[i+3].wind.speed + " mi/h";

// Day 4 Forecast
    document.querySelector(".day4").innerHTML = moment(data.list[i+4], "X").format("MM/DD/YYYY");
    document.querySelector(".tempday4").innerHTML = "Temperature: " + Math.round(data.list[i+4].main.temp) + "°F";
    document.querySelector(".humidityday4").innerHTML = "Humidity: " + data.list[i+4].main.humidity + "%";
    document.querySelector(".windday4").innerHTML = "Wind: " + data.list[i+4].wind.speed + " mi/h";

// Day 5 Forecast
    document.querySelector(".day5").innerHTML = moment(data.list[i+5], "X").format("MM/DD/YYYY");
    document.querySelector(".tempday5").innerHTML = "Temperature: " + Math.round(data.list[i+5].main.temp) + "°F";
    document.querySelector(".humidityday5").innerHTML = "Humidity: " + data.list[i+5].main.humidity + "%";
    document.querySelector(".windday5").innerHTML = "Wind: " + data.list[i+5].wind.speed + " mi/h";
    }
}





async function checkCurrentWeather(searchinput){
    const response = await fetch(currentapiurl + searchinput + `&appid=${apikey}`);
    var data = await response.json();

    

    console.log(data);
    
    let city = data.name;
    let date = moment().format("MM/DD/YYYY");
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let wind = data.wind.speed;
    let humidity = data.main.humidity
    let latitude = data.coord.lat;
    let longitude = data.coord.lon;

    document.querySelector(".city").innerHTML = city;
    document.querySelector(".icon").innerHTML = icon;
    document.querySelector(".day").innerHTML = date;
    document.querySelector(".temp").innerHTML = temp;
    document.querySelector(".humidity").innerHTML = humidity;
    document.querySelector(".wind").innerHTML = wind;

    if (!cities.includes(data.name)) {
        cities.push(data.name);
    }
    localStorage.setItem("cities", JSON.stringify(cities));
    searchHistory();
    checkForecast(latitude, longitude);
};

searchbtn.addEventListener("click", ()=>{
    checkCurrentWeather(searchinput.value);
    searchHistory();
})

