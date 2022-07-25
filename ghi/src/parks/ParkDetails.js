import React, { useEffect, useState } from 'react'

const parkUrl = "http://localhost:8080/parks/list/"

function ParkDetails({id}) {
    const [park, setPark] = useState("")

    useEffect(() => {
        async function fetchData() {
            const Url = parkUrl + id
            const response = await fetch(Url);
            console.log("RESPONSEEEEEEEEEEEE",response);
            const data = await response.json();
            setPark(data.park);
            console.log("DARAAAAAAAAAAAAAAA",data);
            return response;
        }
        fetchData();
    }, [id])

  return (
    <div className='parkslist'>
    {park.map((p) => {
        return (
          <div key={p.id} className="row">
            <div className="col-9">
              <h2 className="featurette-heading">{p.name}</h2>
              <h4><span className="text-muted">{"   " + p.city + ", " + p.state}</span></h4>
              <p className="lead">{p.description}</p>
            </div>
            <div className="col-3 photo">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto parksphoto"  
                      src={p.image_url} alt="" />
            </div>
            <hr className="featurette-divider" />
          </div>
        )
      })} 
    </div>
  )
}
export default ParkDetails

