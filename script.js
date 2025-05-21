const apiKey = "a5b7bc32c1ab067dd3bc19e4de773e20";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = "City not found!";
        return;
      }

      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>☁ Weather: ${data.weather[0].main}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = weather;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML =
        "Error fetching data.";
    });
}
