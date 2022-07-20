#APIs

## State park API
https://www.nps.gov/subjects/developer/api-documentation.htm
## Weather API
https://openweathermap.org/api


## Create a Park

* **Method**: `GET`
* **Path**: /api/parks

Input:
```json
{
  "name": string,
  "images": string,
  "city": string,
  "address": string,
  "statecode": string,
  "weatherInfo": string,
  "image": string,
  "description": string
}
```

Output:
```json
{
  "id": int,
  "name": string,
  "city": string,
  "address": string,
  "statecode": string,
  "weatherInfo": string,
  "image": string,
  "description": string
}
```
Creating a new park uses the incoming
data to query the NPS API to get all the data and display the park on our list.


## Get list of Weather
* **Method** `GET`
* **Path**: /api/weather
Input:

```json
{
    "data": string
}
```

Output:

```json
{
    "data": string
}
```

Retrieving weather from a park using a Weather API to find the current weather at the specfic parks location and displaying that data onto the details page.