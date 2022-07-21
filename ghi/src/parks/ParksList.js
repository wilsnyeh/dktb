import React, { useEffect, useState } from 'react'

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
    <div>
      {parks.map((park) => {
        return (
          <div key={park.id} className="row featurette">
            <div className="col-md-9">
              <h2 className="col-md-5 mycols m-3">{park.name}</h2>
              <h3 className="col-md-5 mycols m-3 text-muted ">{" " + park.city + ", " + park.state}</h3>
              <p className="lead col-md-5 mycols m-3">{park.description}</p>
            </div>
            <div className="col-md-3">
              <img className="col-md-9 mycols m-3"
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
