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

// The actual Function that runs when click incorporates two above functions for forecast
function SearchWeatherForm() {
  let forecast_grid = document.getElementById("dashboard-forecast-grid");
  let inputCity = document.getElementById("search-input").value;
  let dash_content = document.getElementById("dashboard-content-grid");
  // let specialChar = /[^a-zA-Z ]/g;if (inputCity.match(specialChar))
  forecast_grid.innerHTML=""

  if (inputCity === ""){
    alert("Please enter valid city name");
  } else  {
    let refinedInputCity = inputCity.replace(/\s/g, "");

    fetch("https://weatherdbi.herokuapp.com/data/weather/" + refinedInputCity )
    .then((res) => {
     if (res){
      return res.json(); 
     } else {
      throw new Error("Network Response Error");
    }})

    .then( json => {
      if(json.status){
        console.log(json);
        alert(json + json.message);
        dash_content.innerHTML = "";
        forecast_grid.innerHTML = "";
        dash_content.innerHTML = json.message + "Please enter a valid input";
        
      } else {
      displayWeather(json);
      displayWeatherForecast(json);
  }})

    .catch ((error) => {
    console.error("Fetch Error:", error)
    forecast_grid.innerHTML = "";
  });
  };
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

// enter = search button
document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();  
  SearchWeatherForm();
    
});

// function formValidation() {

//   let forecast_grid = document.getElementById("dashboard-forecast-grid");
//   let inputCity = document.getElementById("search-input").value;
//   let specialChar = /[^a-zA-Z ]/g;
//   forecast_grid.innerHTML=""

//   if (inputCity.value.match(specialChar)){
//     let refinedInputCity = inputCity.replace(/\s/g, "");

//     fetch("https://weatherdbi.herokuapp.com/data/weather/" + refinedInputCity )
//     .then((res) => {
//      if (res.ok){
//       return res.json(); 
//      } else {
//       throw new Error("Network Response Error");
//     }})

//     .then( json => {
//       displayWeather(json);
//       displayWeatherForecast(json);
//     })

//     .catch ((error) => console.error("Fetch Error:", error));
//    } else {
//     alert("Please enter valid city name");
//   };
// };
