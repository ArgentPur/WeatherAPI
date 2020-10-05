alert("hi")
var weathURL= "https://api.openweathermap.org/data/2.5/weather?lat=41.392780&lon=-82.014999&appid=cf895b6ea140ccd8bf7133bda48dc02f";
var fiveDayURL="https://api.openweathermap.org/data/2.5/forecast?lat=41.392780&lon=-82.014999&appid=cf895b6ea140ccd8bf7133bda48dc02f";
$.ajax({
    url: weathURL,
    method: "GET",
})
.then(function(response) {
    console.log(response);
});
alert("good day")
$.ajax({
    url: fiveDayURL,
    method: "GET",
})
.then(function(response) {
    console.log(response);
});

