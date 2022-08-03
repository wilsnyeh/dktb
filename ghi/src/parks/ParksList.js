import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../HomePage.css"
import { Navigate } from 'react-router-dom';
import Header from '../mainpage/Header'

function ParksList({ fetchUrl, token }) {
  const [parks, setParks] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(fetchUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setParks(data.parks);
      return response;
    }
    fetchData();
  }, [fetchUrl, token])

  return (    
    token ?
      <div>
      <Header/>
        <div className="input-group">
          <input type="Search" onChange={event => setSearch(event.target.value)} className="form-control rounded " placeholder="State abbreviation" aria-label="Search" aria-describedby="search-addon" />
        </div>
        <div className='parkslist'>
          {parks && parks.filter(park => park.state.includes(search.toUpperCase())).map((park) => {
            return (
              <div key={park.id} className="row">
                <div className="col-9">
                  <h2 className="featurette-heading" ><Link to={'/parks/' + park.id}>{park.name}</Link></h2>
                  <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
                  <p className="lead">{park.description}</p>
                </div>
                <div className="col-3 photo">
                  <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto parksphoto"
                    src={park.image_url} alt="" />
                </div>
                <hr className="featurette-divider" />
              </div>
            )
          })}
        </div>
      </div>
      : <Navigate to="/login" />
      
  )
}
export default ParksList;
