let apiKey="2ca45efc5cb64cf79c9140219252010"
let weatherURL="http://api.weatherapi.com/v1/current.json?key=2ca45efc5cb64cf79c9140219252010&q=35244"

const outputParagraph = document.getElementById("weatherData")

fetch(weatherURL)
	.then(response => {
		return response.json();
	})
	.then(data => {
		console.log(JSON.stringify(data, null, 2));
		outputParagraph.textContent = "The current weather in Birmingham, Alabama is " + data.current.temp_f + " degrees Fahrenheit";
	})
	.catch(err => {
		console.log(err);
		outputParagraph.textContent = "Error!";
	})