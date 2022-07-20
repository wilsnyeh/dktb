import React, { useEffect, useState } from 'react'

function ParksList({fetchUrl}) {
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
    <div>
        <div className="row featurette">
          <div className="col-md-7">
          {parks.map((park) => {  
            return (
              <div key={park.id}>
                <div  className="row featurette">
                  <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">{park.name} 
                    <span className="text-muted">{park.city + ", " + park.state}</span></h2>
                    <p className="lead">{park.description}</p>
                  </div>
                  <div  className="col-md-5">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" 
                    src={park.image_url} alt="" />
                  </div>
                </div>
              </div>         
          )})}
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>

  )
}


export default ParksList;
