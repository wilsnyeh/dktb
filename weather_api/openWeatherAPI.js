import React, {useEffect, useState} from 'react'

BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q="
OPENWEATHER_API_KEY = "2f4e32d94a78c9492aa87395ac412181"

url = BASE_URL + QUERY + ",US&appid=" + OPENWEATHER_API_KEY + '&units=imperial';

function GetWeather({fetchUrl}) {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(fetchUrl);
            const data = await response.json()
            setWeather(data.weather);
            return response;
        }
        fetchData();
    }, [fetchUrl])
    }
    

    const CurrentDay = ({
        location, temperature, sunrise, sunset, }) => (
            #BOOTSTRAP DIV INFO#
        )

CurrentDay.Proptypes = {
    location: Proptypes.string.isRequired,
    temperature: Proptypes.string.isRequired,
    sunrise: Proptypes.string.isRequired,
    sunset: Proptypes.string.isRequired,
}

const Forecast = ({ forecast }) => (
    #BOOTSTRAP#
)

Forecast.Proptypes({
    currentDay: Proptypes.object
})