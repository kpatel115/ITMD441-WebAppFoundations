// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  function doSomething(a, b){
    console.log(a);
    console.log(b);
  };
  doSomething(position.coords.latitude, position.coords.longitude);
});




// Weather Web API
fetch("https://weatherdbi.herokuapp.com/data/weather/41.8446119,-87.6285002")
    .then(res=>res.json())
    .then(json=>console.log(json))