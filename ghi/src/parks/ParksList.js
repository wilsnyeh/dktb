import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../HomePage.css"
import { Navigate } from 'react-router-dom';
import { useToken } from '../Auth'
import Header from '../mainpage/Header'

function ParksList({ fetchUrl, token }) {
  const [parks, setParks] = useState([])

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
  }, [fetchUrl])

<<<<<<< HEAD


  // const handleClick = (park) => {
  //   if (park.id) {
  //     setId(park.id)
  //   }
  // }
  // console.log(id);



  return (
    <div className="parks-list">
      {parks.map((park) => {
        return (
          <div key={park.id} className="row">
            <div className="col-9">
              <h2 className="featurette-heading" ><Link to={'/parks/' + park.id}>{park.name}</Link></h2>
              <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
              <p className="lead">{park.description}</p>
            </div>
            <div className="col-3 photo">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={park.image_url} alt="" />
            </div>
            <hr className="featurette-divider" />
          </div>
        )
      })}
    </div>
=======
  return (
    token ?
      <div> <Header />
        <div className='parkslist'>
          {parks.map((park) => {
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
>>>>>>> liamcahill
  )
}
export default ParksList;
