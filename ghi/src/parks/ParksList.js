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
      return response;
    }
    fetchData();
  }, [fetchUrl, token])

  return (
    token ?
      <div>
        <Header />
        <div className="input-group">
          <input type="Search" onChange={event => setSearch(event.target.value)} className="form-control rounded " placeholder="Search State ex. (CA, AZ)" aria-label="Search" aria-describedby="search-addon" />
        </div>
        <span></span>
        <div className='m-5'>
          <div style={{ justifyContent: "space-around" }} className='row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-1'>
            {parks && parks.filter(park => park.state.includes(search.toUpperCase())).map((park) => {
              return (
                <div key={park.id} className="card mb-5 mx-2 shad_bottom off_white list-border">
                  <div className="col">
                    <div className="card-body">
                      <h2 className="card-title "><Link className='link-success' to={'/parks/' + park.id}>{park.name}</Link></h2>
                      <h4 className="card-subtitle mb-2 text-muted"><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
                      <p className="card-text">{park.description}</p>
                      <Link to={'/parks/' + park.id}>
                        <img className="card-img-bottom"
                          src={park.image_url} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      : <Navigate to="/" />

  )
}
export default ParksList;
