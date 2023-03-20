const forecastapiurl= "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=";
const currentapiurl= "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apikey= "3ed16c2e8fec6eabeb503784d8e615d9";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const cities = [];


async function checkForecast(city){
    const response = await fetch(forecastapiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    for (let i = 7; i < data.list.length; i += 8)
// Day 1 Forecast
    document.querySelector(".day1").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday1").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidityday1").innerHTML = data.main.humidity + "%";
    document.querySelector(".windday1").innerHTML = data.wind.speed + " mi/h";

// Day 2 Forecast
    document.querySelector(".day2").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday2").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidityday2").innerHTML = data.main.humidity + "%";
    document.querySelector(".windday2").innerHTML = data.wind.speed + " mi/h";

// Day 3 Forecast
    document.querySelector(".day3").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday3").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidityday3").innerHTML = data.main.humidity + "%";
    document.querySelector(".windday3").innerHTML = data.wind.speed + " mi/h";

// Day 4 Forecast
    document.querySelector(".day4").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday4").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidityday4").innerHTML = data.main.humidity + "%";
    document.querySelector(".windday4").innerHTML = data.wind.speed + " mi/h";

// Day 5 Forecast
    document.querySelector(".day5").innerHTML = moment(unixDate, "X").format("MM/DD/YYYY");
    document.querySelector(".tempday5").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidityday5").innerHTML = data.main.humidity + "%";
    document.querySelector(".windday5").innerHTML = data.wind.speed + " mi/h";
}




async function checkCurrentWeather(city){
    const response = await fetch(currentapiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mi/h";
}

searchbtn.addEventListener("click", ()=>{
    checkForecast(searchinput.value);
    checkCurrentWeather(searchinput.value);
})