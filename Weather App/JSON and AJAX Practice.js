// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
// API key: 2a84e77259135d77644d6d31eb7ef188

var weatherForecast = document.getElementById("weather-forecast");	//select the empty div element for the temperature and description
var btn = document.getElementById("btn");	//select the button
var icon = document.getElementById("icon");	//select the empty div element for the weather icon

//use the button to send the JSON request
btn.addEventListener("click", function() {	//add an event listener to the button
	var ourRequest = new XMLHttpRequest();	//create a new instance of the XMLHttpRequest
	ourRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=brighton&APPID=2a84e77259135d77644d6d31eb7ef188');	//'Get' the JSON from the given URL
	ourRequest.onload = function() {	//When the JSON loads, run the anonymous function to process the JSON data
		var ourData = JSON.parse(ourRequest.responseText);	//parse the JSON data (so it is treated as JSON arrays/objects and not merely text)
		renderHTML(ourData);	//function defined below to extract the required data and update the page
		renderBackground(ourData);	//function defined below to extract the required data and update the background
	};
	ourRequest.send();
	
});


//function to write code to update the HTML page
function renderHTML(data) {
	var htmlString = "";
	var temp = 0;
	var weather = "";
	var weatherIcon  = "";

	temp = Math.round(data.main.temp - 273);	//extracts the temperature, converts from deg Kelvin to deg Centigrade and rounds to nearest integer
	weather = data.weather[0].main;	//extracts the weather description
	weatherIcon = data.weather[0].icon;	//extracts the weather icon reference

	htmlString = '<p> The temperature in Brighton is: ' + temp + '&deg;C </p>';
	htmlString += '<p> Weather description: ' + weather + '</p>';
	
	weatherForecast.insertAdjacentHTML('beforeend', htmlString);	//updates the web page with the temperature and description

	var img = document.createElement("img");
 	img.src = "http://openweathermap.org/img/w/" + weatherIcon + ".png";	//finds the appropriate weather icon
	icon.appendChild(img);

}	


//function to update the background depending on the weather id
function renderBackground(data) {
	var id = 0;
	id = data.weather[0].id;	

	if (id >= 200 && id <= 232) {
		document.body.style.backgroundImage = "url('Images/thunderstorm.jpeg')";
	}
	else if (id >= 300 && id <= 321) {
		document.body.style.backgroundImage = "url('Images/drizzle.jpg')";
	}
	else if (id >= 500 && id <= 531) {
		document.body.style.backgroundImage = "url('Images/rain.jpg')";
	}
	else if (id >= 600 && id <= 622) {
		document.body.style.backgroundImage = "url('Images/snow.jpeg')";
	}
	else if (id == 701) {
		document.body.style.backgroundImage = "url('Images/mist.jpeg')";
	}
	else if (id == 721) {
		document.body.style.backgroundImage = "url('Images/haze.jpeg')";
	}
	else if (id == 800) {
		document.body.style.backgroundImage = "url('Images/clear.jpeg')";
	}
	else if (id >= 801 && id <= 804) {
		document.body.style.backgroundImage = "url('Images/clouds.jpeg')";
	}
	else 
		document.body.style.backgroundImage = "url('Images/storm.jpeg')";
	
	
}

