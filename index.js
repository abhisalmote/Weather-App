window.onload = function() {
    const apiKey = "df0cf4cf6e65b1cecfb4eb1f9db5747e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button"); // Select the button using the "button" tag inside the ".search" element
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWheather(city){
        const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./mist.png";
        }
    }

    searchBtn.addEventListener("click", ()=> {
        checkWheather(searchBox.value);
    });
};
