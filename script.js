
var weathURL= "https://api.openweathermap.org/data/2.5/weather?lat=41.392780&lon=-82.014999&units=imperial&appid=cf895b6ea140ccd8bf7133bda48dc02f";
var fiveDayURL="https://api.openweathermap.org/data/2.5/forecast?lat=41.392780&lon=-82.014999&units=imperial&appid=cf895b6ea140ccd8bf7133bda48dc02f";
var uvURL="http://api.openweathermap.org/data/2.5/uvi?lat=41.392780&lon=-82.01499&appid=cf895b6ea140ccd8bf7133bda48dc02f"
$.ajax({
    url: weathURL,
    method: "GET",
})
.then(function(response) {
    console.log(response);
});

$.ajax({
    url: fiveDayURL,
    method: "GET",
})
.then(function(response) {
    console.log(response);
});

$.ajax({
    url: uvURL,
    method: "GET",
})
.then(function(response){
    console.log(response);
})

$(".button").on("click", function() {
   fetch(weathURL)
   .then(response => response.json())
   .then(data => {
       

       console.log(data.name);
       console.log(data.main["temp"])

       var myJSON = JSON.stringify(data.name);
       document.getElementById("locale").innerHTML = myJSON;

       var myJSONA = JSON.stringify(data.main["temp"]);
       document.getElementById("todayTemp").innerHTML = myJSONA;

    }) 

   fetch(uvURL)
   .then(response => response.json())
   .then(data => {

    console.log(data.value);

    var uvJSON = JSON.stringify(data.value);
    document.getElementById("uvInfo").innerHTML = uvJSON;


   })  
   
   fetch(fiveDayURL)
   .then(response => response.json())
   .then(data => {

    console.log(data.list[0].main["temp"]);
    console.log(data.list[8].main["temp"]);
    console.log(data.list[16].main["temp"]);
    console.log(data.list[24].main["temp"]);
    console.log(data.list[32].main["temp"]);

    var aJSON = JSON.stringify(data.list[0].main["temp"] + "F");
    document.getElementById("oneDay").innerHTML = aJSON;

    var bJSON = JSON.stringify(data.list[8].main["temp"] + "F");
    document.getElementById("twoDay").innerHTML = bJSON;

    var cJSON = JSON.stringify(data.list[16].main["temp"] + "F");
    document.getElementById("threeDay").innerHTML = cJSON;

    var dJSON = JSON.stringify(data.list[24].main["temp"] + "F");
    document.getElementById("fourDay").innerHTML = dJSON;

    var eJSON = JSON.stringify(data.list[32].main["temp"] + "F");
    document.getElementById("fiveDay").innerHTML = eJSON;
    
   })
   
   
   
   
})