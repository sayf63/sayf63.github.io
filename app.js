//Api to be used later
const strApi = 'https://api.open-meteo.com/v1/forecast?latitude=36.162838&longitude=-85.50164&current=temperature_2m,relative_humidity_2m,precipitation,weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FChicago';


//Weather variables to be used later in code
const strLocation = 'Cookeville';
let strTemp;
let strTempIcon;
let strSky;
let strWeathercode;
let strCurrentWeatherIcon;

//Used AI to assist in creation of weathercodeIcon and weathercode objects that contains the WMO
const weathercodeIcon = {
    0: "bi bi-brightness-low-fill",
    1: "bi bi-brightness-low-fill",
    2: "bi bi-cloud-sun",
    3: "bi bi-cloud-fill",
    45: "bi bi-cloud-fog-fill",
    48: "bi bi-cloud-fog-fill",
    51: "bi bi-cloud-drizzle-fill",
    53: "bi bi-cloud-drizzle-fill",
    55: "bi bi-cloud-drizzle-fill",
    56: "bi bi-cloud-drizzle-fill",
    57: "bi bi-cloud-drizzle-fill",
    61: "bi bi-cloud-rain-fill",
    63: "bi bi-cloud-rain-fill",
    65: "bi bi-cloud-rain-heavy-fill",
    66: "bi bi-cloud-rain-heavy-fill",
    67: "bi bi-cloud-rain-heavy-fill",
    71: "bi bi-cloud-snow-fill",
    73: "bi bi-cloud-snow-fill",
    75: "bi bi-cloud-snow-fill",
    77: "bi bi-cloud-snow-fill",
    80: "bi bi-cloud-rain-fill",
    81: "bi bi-cloud-rain-fill",
    82: "bi bi-cloud-rain-heavy-fill",
    85: "bi bi-cloud-snow-fill",
    86: "bi bi-cloud-snow-fill"
  };


  const weathercode = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snowfall: Slight intensity",
    73: "Snowfall: Moderate intensity",
    75: "Snowfall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
    85: "Snow showers: Slight",
    86: "Snow showers: Heavy"
  };
  


//Function that garners the API data, converts it through json and allows it to be readable in proper code
function getweather(strApi){
    fetch(strApi)
    .then(objResponse => objResponse.json())
    .then(objData => {
        strTemp = objData.current.temperature_2m
        strSky = objData.current.precipitation
        strWeathercode = objData.current.weather_code
        strCurrentWeatherIcon = weathercodeIcon[strWeathercode];
        if(strTemp < 30){
            strTempIcon = "bi bi-thermometer"
        } else {
            strTempIcon = "bi bi-thermometer-half"
        }
        document.getElementById('txtTemperatureNum').textContent = `${strTemp}°`
        document.querySelector("#TempIcon").className = strTempIcon;
        document.getElementById('txtSky').textContent = `${weathercode[strWeathercode]}`
        document.querySelector("#SkyIcon").className = weathercodeIcon[strWeathercode];
        console.log(strTemp)
    })
    document.getElementById('txtLocation').textContent = strLocation;
};
//Calling function
getweather(strApi);
