function getWeather() {
    var city = document.getElementById('cityInput').value;
  
    // Make API request to get weather data
    fetch('https://api.weatherapi.com/v1/current.json?key=d4d75cf31c604db693435541232106 &q=' + city)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '';
  
    var location = data.location.name + ', ' + data.location.country;
    var temperature = data.current.temp_c;
    var condition = data.current.condition.text;
  
    var locationElement = document.createElement('p');
    locationElement.textContent = 'Location: ' + location;
    weatherInfo.appendChild(locationElement);
  
    var temperatureElement = document.createElement('p');
    temperatureElement.textContent = 'Temperature: ' + temperature + '°C';
    weatherInfo.appendChild(temperatureElement);
  
    var conditionElement = document.createElement('p');
    conditionElement.textContent = 'Condition: ' + condition;
    weatherInfo.appendChild(conditionElement);
  }
  