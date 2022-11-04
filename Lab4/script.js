// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  function doSomething(a, b){
    let currentLatitude = a;
    let currentLongitude = b;
    fetch("https://weatherdbi.herokuapp.com/data/weather/"+ currentLatitude + "," + currentLongitude)
    .then(res=>res.json())
    .then(json=>console.log(JSON.stringify(json)))
  };
  doSomething(position.coords.latitude, position.coords.longitude);
});




// // Weather Web API
// fetch("https://weatherdbi.herokuapp.com/data/weather/41.8446119,-87.6285002")
//     .then(res=>res.json())
//     .then(json=>console.log(json))