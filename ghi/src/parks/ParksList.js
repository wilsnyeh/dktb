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
          {parks.map((park) => {  
            return (
                <div key={park.id} class="row featurette parkslist">
                  <div className="col-md-9">
                    <h2 className="featurette-heading fw-normal lh-1">{park.name} 
                    <span className="text-muted">{park.city + ", " + park.state}</span></h2>
                    <p className="lead">{park.description}</p>
                  </div>
                  <div  className="col-md-3">
                    <img className="featurette-image img-fluid mx-auto" width="450" height="450" 
                    src={park.image_url} alt="" />
                  </div>
                  <hr className="featurette-divider" />
                </div>
                 
          )})}
          </div>

        

  )
}


export default ParksList;
