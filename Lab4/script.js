// Geolocation API - Automatic Load page show current weather conditions
navigator.geolocation.getCurrentPosition((position) => {
  function doSomething(a, b){
    let currentLatitude = a;
    let currentLongitude = b;
    alert("Weather in your location will be loaded!");
    fetch("https://weatherdbi.herokuapp.com/data/weather/"+ currentLatitude + "," + currentLongitude)
    .then(res=>res.json())
    .then(json=>console.log(JSON.stringify(json)))
  };
  doSomething(position.coords.latitude, position.coords.longitude);
});




// Weather Web API
function SearchWeatherForm() {

  let inputCity = document.getElementById("search-input").value;

  if (inputCity === ""){
    alert("Please enter valid city name");
  } else {
    let refinedInputCity = inputCity.replace(/\s/g, "");
    // or 
    //let refinedInputCity1 = inputCity.split(" ").join("");

    fetch("https://weatherdbi.herokuapp.com/data/weather/" + refinedInputCity )
    .then(res=>res.json())
    .then(json=>console.log(json))

  };
}