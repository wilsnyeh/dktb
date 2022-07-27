import datetime as dt
import requests
import math
import os
import json
import sys

BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
# OPENWEATHER_API_KEY = "2f4e32d94a78c9492aa87395ac412181"
OPENWEATHER_API_KEY = os.environ["OPENWEATHER_API_KEY"]
CITY = "Charlotte"

def kelvin_to_celsius_fahrenheit(kelvin):
    celsius = kelvin - 273.15
    fahrenheit = celsius * (9/5) + 32
    return celsius, fahrenheit

url = BASE_URL + "appid=" + OPENWEATHER_API_KEY + "&q=" + CITY

response = requests.get(url).json()

temp_kelvin = response['main']['temp']
temp_celsius, temp_fahrenheit = kelvin_to_celsius_fahrenheit(temp_kelvin)
feels_like_kelvin = response['main']['feels_like']
feels_like_celsius, feels_like_fahrenheit = kelvin_to_celsius_fahrenheit(feels_like_kelvin)
wind_speed = response['wind']['speed']
humidity = response['main']['humidity']
description = response['weather'][0]['description']
sunrise_time = dt.datetime.utcfromtimestamp(response['sys']['sunrise']+response['timezone'])
sunset_time = dt.datetime.utcfromtimestamp(response['sys']['sunset']+response['timezone'])

print(f'Temprature in {CITY}: {math.trunc(temp_fahrenheit)}')
print(f'Best time to view the sunset is: {sunset_time}')
print(f'Best time to view the sunrise is: {sunrise_time}')
