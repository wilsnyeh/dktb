import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../DetailPage.css"
import Header from '../mainpage/Header'
import "../DetailPage.css"
import FavoriteButton from '../components/FavoriteButton'


function ParkDetails({ detailUrl, weatherUrl, updateFavorites, userId, ...props }) {
  const [park, setPark] = useState({})
  const [weather, setWeather] = useState({})
  const { id } = useParams()
  const apiKey = '2f4e32d94a78c9492aa87395ac412181'

  const addFavoritePark = (park) => {
    const fetchConfig = {
      method: "put",
      body: JSON.stringify({"park": "park.id"}),
      headers: { "Content-Type": "application/json" }
    }
    console.log(id)
    console.log(userId)
    fetch(`http://localhost:8090/accounts/${userId}/`)
    .then(()=> updateFavorites())
    .catch((e) => console.error(e))
  }

  useEffect(() => {
    async function fetchData() {
      const Url = detailUrl + id;
      const response = await fetch(Url);
      const data = await response.json();
      setPark(data);
      return response;
    }
    fetchData();
  }, [detailUrl, id])

  useEffect(() => {
    if (Object.keys(park).length) {
      async function fetchData() {
        const Url = weatherUrl + park.city + "," + park.state + ",US&appid=" + apiKey + '&units=imperial';
        const response = await fetch(Url);
        const data = await response.json();
        // setWeather(data.main);
        setWeather(data.main);
        return response;
      }
      fetchData();
    }
  }, [park, weatherUrl])



  return (
    <div> <Header />
      <div className='parkdetail'>
        <div key={park.id} className="row">
          <div className="col-12">
            <h2 className="featurette-heading-detail">{park.name}</h2>
            <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
            <p className="lead">{park.description}</p>
          </div>
          <div className="image-container col-12 photo">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto parksphoto"
              src={park.image_url} alt="" />
            <div onClick={() => addFavoritePark(park.id)} className='overlay align-items-center justify-content'>
              <FavoriteButton />
            </div>
          </div>
        </div>
        <div>
          {weather
            ? <div><h5>Weather in {park.city} now: </h5><p>Temperature: {weather?.temp} °F</p><p>Humidity: {weather?.humidity}%</p> </div>
            : <></>
          }
        </div>
        <div className="col-12">
          {park.weather_info}
        </div>
        <div className='row row-details'>
          <div className="col-6">Entrance fee: {park.entrance_fee}</div>
          <div className="col-6">Contact number: {park.contact_num}</div>
        </div>
      </div>

      </div>
  )
}
export default ParkDetails
