function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = '48d37d78902d5bd1c3a8c89ee9b26a85';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather span:first-child');
            const weather = document.querySelector('#weather span:last-child');
            city.innerText = `${data.name}@${data.weather[0].main}`;
            weather.innerText = `${data.main.temp}℃, ${data.main.humidity}%`;
        });
}
function onGeoError() {
    alert('Can not access your location')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);