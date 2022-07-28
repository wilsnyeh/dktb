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
    
