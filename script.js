alert("hi")
var weathURL= "https://api.openweathermap.org/data/2.5/weather?lat=41.4&lon=-81&appid=cf895b6ea140ccd8bf7133bda48dc02f";

$.ajax({
    url: weathURL,
    method: "GET",
})
.then(function(response) {
    console.log(response);
})