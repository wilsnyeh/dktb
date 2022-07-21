import React, { useEffect, useState } from 'react'
import "../HomePage.css"

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
      <div className='root'>
      {parks.map((park) => {
        return (
          <div key={park.id} className="row">
            <div className="col-9">
              <h2 className="featurette-heading">{park.name}</h2>
              <h4><span class="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
              <p className="lead">{park.description}</p>
            </div>
            <div className="col-3">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" 
                      src={park.image_url} alt="" />
            </div>
            <hr className="featurette-divider" />
          </div>
        )
      })}        
      </div>



  )
}

<div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
      </div>
    </div>


export default ParksList;
