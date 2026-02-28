function getWeather() {

    const city = document.getElementById("cityInput").value;

    const apiKey = "5ba8e62974e7fe76499e83d420e172a7";

    const url =https://openweathermap.org/api;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML = "City not found!";
            return;
        }

        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const condition = data.weather[0].description;

        document.getElementById("weatherResult").innerHTML = `
            <p>🌡 Temperature: ${temperature} °C</p>
            <p>💧 Humidity: ${humidity}%</p>
            <p>☁ Condition: ${condition}</p>
        `;
    })
    .catch(error => {
        document.getElementById("weatherResult").innerHTML = "Error fetching data!";
    });
}
