// Geolocation API - Automatic Load page show current weather conditions - Click Button
let getCurrentLocation = () => {
navigator.geolocation.getCurrentPosition((position) => {
  function doSomething(a, b){
    let currentLatitude = a;
    let currentLongitude = b;
    alert("Weather in your location will be loaded!");
    fetch("https://weatherdbi.herokuapp.com/data/weather/"+ currentLatitude + "," + currentLongitude)
    
    .then((res) => {
      if (res.ok){
       return res.json(); 
      } else {
       throw new Error("Network Response Error");
     }})
 
     .then( json => {
       displayWeather(json);
       displayWeatherForecast(json);
     })
    //.then(res=>res.json())
    //.then(json=>console.log(JSON.stringify(json)))
  };
  doSomething(position.coords.latitude, position.coords.longitude);
});
};

// Displays Main Weather Forecast for Today based on input and Click
function displayWeather(arg){
  // Current Weather Forecast
  let dash_region = document.getElementById("region");
  let dash_day = document.getElementById("day");
  let dash_temp = document.getElementById("temp");
  let dash_precip = document.getElementById("precip");
  let dash_humidity = document.getElementById("humidity");
  let dash_wind = document.getElementById("wind");
  let dash_icon = document.getElementById("icon");
  let dash_comment = document.getElementById("comment");

  dash_region.innerHTML = arg.region;
  dash_day.innerHTML = arg.currentConditions.dayhour;
  dash_temp.innerHTML = arg.currentConditions.temp.f + " °F";
  dash_precip.innerHTML = "Precipitation: " + arg.currentConditions.precip;
  dash_humidity.innerHTML = "Humidity: " + arg.currentConditions.humidity;
  dash_wind.innerHTML = "Wind: " + arg.currentConditions.wind.mile + " mph";
  // dash_icon.innerHTML = arg.currentConditions.iconURL;
  dash_icon.innerHTML = `<img src="${arg.currentConditions.iconURL}"/>`
  
  dash_comment.innerHTML = arg.currentConditions.comment;
};


// Displays 7 Day forecast based on input and click - must be reset before another search
function displayWeatherForecast(arg){
  let forecast_grid = document.getElementById("dashboard-forecast-grid");
  
  for(i = 1, l = arg.next_days.length; i < l; i++){
    var obj = arg.next_days[i];

    forecast_grid.innerHTML +=`
    <div id="day1">
      <p>${obj.day}</p>
      <p>${obj.comment}</p>
      <p>${obj.max_temp.f + "°F"}</p>
      <p>${obj.min_temp.f + "°F"}</p>
      <img src="${obj.iconURL}">
    </div>`;
  }
  
};

// The actual Function that runs when click incorporates two above functions for forecast
function SearchWeatherForm() {
  let forecast_grid = document.getElementById("dashboard-forecast-grid");
  let inputCity = document.getElementById("search-input").value;

  forecast_grid.innerHTML=""

  if (inputCity === ""){
    alert("Please enter valid city name");
  } 
  else {
    let refinedInputCity = inputCity.replace(/\s/g, "");

    fetch("https://weatherdbi.herokuapp.com/data/weather/" + refinedInputCity )
    .then((res) => {
     if (res.ok){
      return res.json(); 
     } else {
      throw new Error("Network Response Error");
    }})

    .then( json => {
      displayWeather(json);
      displayWeatherForecast(json);
    })

    .catch ((error) => console.error("Fetch Error:", error));
  };
};