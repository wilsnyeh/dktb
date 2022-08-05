import React, { useEffect, useState } from 'react'
import "../HomePage.css"
import { Navigate, Link } from 'react-router-dom';
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
      console.log(data.parks)
      return response;
    }
    fetchData();
  }, [fetchUrl, token])

  return (
    // token ?
    
      <div>
        <Header />
        <div className="input-group">
          <input type="Search" onChange={event => setSearch(event.target.value)} className="form-control rounded " placeholder="State abbreviation" aria-label="Search" aria-describedby="search-addon" />
        </div>
        <div className='parkslist'>
          {parks && parks.filter(park => park.state.includes(search.toUpperCase())).map((park) => {
            return (
//               <div class="card">
//   <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top" alt="Fissure in Sandstone"/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#!" class="btn btn-primary">Button</a>
//   </div>
// </div> {park.name}
<div class="container">
<div class="row g-3">
<div class="col-12 col-md-6 cold-lg-4">

              <div className="card" key={park.id}>
              <img src={park.image_url} alt="" class="card-img-top" />
              <div class="card-body">
                    <h5><span className="card-title">{"   " + park.city + ", " + park.state}</span></h5>
                  <p className="card-text">{park.description}</p>
                  <a class="btn btn-primary" to={'/parks/' + park.id}>Read More</a>
                </div>
                </div>
                </div>
                </div>
                </div>
            )
          })}
        </div>
      </div>
      // : <Navigate to="/login" />

  )
}
export default ParksList;

