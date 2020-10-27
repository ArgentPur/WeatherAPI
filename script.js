
var weathURL= "https://api.openweathermap.org/data/2.5/weather?lat=41.392780&lon=-82.014999&units=imperial&appid=cf895b6ea140ccd8bf7133bda48dc02f";
var fiveDayURL="https://api.openweathermap.org/data/2.5/forecast?lat=41.392780&lon=-82.014999&units=imperial&appid=cf895b6ea140ccd8bf7133bda48dc02f";
var uvURL="https://api.openweathermap.org/data/2.5/uvi?lat=41.392780&lon=-82.01499&appid=cf895b6ea140ccd8bf7133bda48dc02f"
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
       console.log(data.main["temp"]);
       console.log(data.weather[0]["description"])

       var myJSON = JSON.stringify(data.name);
       document.getElementById("locale").innerHTML = myJSON;

       var myJSONA = JSON.stringify(data.main["temp"]);
       document.getElementById("todayTemp").innerHTML = myJSONA;

       var myJSONB = JSON.stringify(data.weather[0]["description"])
       document.getElementById("condition").innerHTML = myJSONB;

    }) 

   fetch(uvURL)
   .then(response => response.json())
   .then(data => {

    console.log(data.value);

    var uvJSON = JSON.stringify(data.value);
    document.getElementById("uvInfo").innerHTML = uvJSON;
    
    if(uvJSON > 4){
        alert("The UV index is high! You will get fried!")
    }

    if(uvJSON <4){
        alert("UV index is low.")
    }

   })  
   
   fetch(fiveDayURL)
   .then(response => response.json())
   .then(data => {

    console.log(data.list[0].main["temp"]);
    console.log(data.list[8].main["temp"]);
    console.log(data.list[16].main["temp"]);
    console.log(data.list[24].main["temp"]);
    console.log(data.list[32].main["temp"]);

    var aJSON = JSON.stringify(data.list[0].main["temp"] + "F") + "Tomorrow";
    document.getElementById("oneDay").innerHTML = aJSON;

    var bJSON = JSON.stringify(data.list[8].main["temp"] + "F") + "2 day";
    document.getElementById("twoDay").innerHTML = bJSON;

    var cJSON = JSON.stringify(data.list[16].main["temp"] + "F") +"3 day";
    document.getElementById("threeDay").innerHTML = cJSON;

    var dJSON = JSON.stringify(data.list[24].main["temp"] + "F") + "4 day";
    document.getElementById("fourDay").innerHTML = dJSON;

    var eJSON = JSON.stringify(data.list[32].main["temp"] + "F") + "5 day";
    document.getElementById("fiveDay").innerHTML = eJSON;
    
   })
   
   
   
   
})