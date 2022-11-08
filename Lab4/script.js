// Geolocation API - Automatic Load page show current weather conditions
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
       console.log(json);
       displayWeather(json);
       //displayWeatherForecast(json);
     })
    //.then(res=>res.json())
    //.then(json=>console.log(JSON.stringify(json)))
  };
  doSomething(position.coords.latitude, position.coords.longitude);
});

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
  }

function displayWeatherForecast(arg){
  let forecast_grid = document.getElementsByClassName("dashboard-forecast-grid");

  for(i = 0, l = arg.next_days.length; i < l; i++){
    var obj = arg.next_days[i];

    forecast_grid.innerHTML +=`
    <div class="day1">
      <p id="fDay">${obj.day}</p>
      <p id="fComment">${obj.comment}</p>
      <p id="fMax">${obj.max_temp.f + "°F"}</p>
      <p id="fMin">${obj.min_temp.f}</p>
      <img src="${obj.iconURL}">
    </div>`;

    console.log(obj + "day: " + i);

    // let divDay = () => {
      
  }
};

// Weather Web API
function SearchWeatherForm() {
  let weatherObject;
  let inputCity = document.getElementById("search-input").value;

  if (inputCity === ""){
    alert("Please enter valid city name");
  } 
  else {

    let refinedInputCity = inputCity.replace(/\s/g, "");

    // or 
    //let refinedInputCity1 = inputCity.split(" ").join("");

    fetch("https://weatherdbi.herokuapp.com/data/weather/" + refinedInputCity )
    .then((res) => {
     if (res.ok){
      return res.json(); 
     } else {
      throw new Error("Network Response Error");
    }})

    .then( json => {
      console.log(json);
      displayWeather(json);
      displayWeatherForecast(json);
    })

    .catch ((error) => console.error("Fetch Error:", error));
  };
  
}