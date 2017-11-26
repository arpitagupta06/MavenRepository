/**
 * 
 */
 function callWeatherAPI(selectedCity) {         	
    var apiCall='http://api.openweathermap.org/data/2.5/weather?q='+selectedCity+
                '&APPID=8404c7a476caf1b503b74fcf57b11869';
    $.getJSON(apiCall,weatherCallBack);               
}   
 
function weatherCallBack(weatherData) {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var currentDay=daylist[day];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var prepand = (hour >= 12)? " PM ":" AM ";
            	
    document.write("City"+"     "+weatherData.name);document.write("<br>");
    document.write("Updated time"+" "+currentDay+" "+hour+":"+minute+" "+prepand);document.write("<br>");
    document.write("Weather"+" "+weatherData.weather[0].description);document.write("<br>");
    document.write("Temperature"+" "+weatherData.main.temp);document.write("<br>");
    document.write("Wind"+" "+weatherData.wind.speed);
   }