import React, { useEffect, useState } from 'react'
import "../HomePage.css"

function ParksList({ fetchUrl }) {
  const [parks, setParks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(fetchUrl);
      const data = await response.json()
      setParks(data.parks);
      return response;
    }
    fetchData();
  }, [fetchUrl])

  return (
      <div className='parkslist'>
      {parks.map((park) => {
        return (
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
        )
      })}        
      </div>
  )
}



export default ParksList;
