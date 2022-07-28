import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import id from "./ParksList"

const parkUrl = "http://localhost:8080/parks/list/"


function ParkDetails({ detailUrl, weatherUrl, ...props }) {
  const [park, setPark] = useState({})
  const [weather, setWeather] = useState({})
  const { id } = useParams()
  const apiKey = ''

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
        const Url = weatherUrl + park.city + "," + park.state + ",US&appid=" + apiKey + '&units=metric';
        const response = await fetch(Url);
        const data = await response.json();
        // setWeather(data.main);
        setWeather(data.main);
        console.log(data);
        return response;
      }
      fetchData();}
  }, [park, weatherUrl])


  return (
    <div className='parkslist'>    
      <div key={park.id} className="row">
        <div className="col-9">
          <h2 className="featurette-heading">{park.name}</h2>
          <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
          <p className="lead">{park.description}</p>
        </div>
        <div className="col-3 photo">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto parksphoto"
            src={park.image_url} alt="" />
        </div>
        <hr className="featurette-divider" />
      </div>
      <div>
      <h1>Temperature: {weather.temp} C</h1>
      <h1>Humidity: {weather.humidity}%</h1>  
         
      </div>
    </div>
  )
}
export default ParkDetails

