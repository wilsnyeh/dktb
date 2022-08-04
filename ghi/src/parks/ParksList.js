import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import "../HomePage.css"
import { Navigate } from 'react-router-dom';
import { useToken } from '../Auth'
// import Header from '../mainpage/Header'
import "../ParksList.css"


function ParksList({ fetchUrl, token }) {
  const [parks, setParks] = useState([])

  useEffect(() => {
    async function fetchData() {
      // const handleClick = 
      const response = await fetch(fetchUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setParks(data.parks);
      return response;
    }
    fetchData();
  }, [fetchUrl])

  return (
    token ?
      // <div> <Header />
        <div className='container-fluid'>
          {/* {parks.map((park) => {
            return ( */}
              
                <div className="col-lg-4 col-sm-6">
                  <div className="states-list">
                    <img src="https://i.ibb.co/3rX1LGv/Alabama.jpg" alt=""/>
                    <div className="overlay">
                      {/* <h4 className="text-Black">Alabama</h4></div> */}
                      {/* <button onClick={handleClick}>Alabama</button> */}

                      {parks.map((parks) => {
        return (
          <div key={parks.state}>
            <h2>{'/parks/' + parks.id}{parks.name}</h2>
            <h2>{parks.city}</h2>

                    </div> )})}
                  </div>
              {/* <div key={park.id} className="row">
                
                  <h4 className="parks-list" >
                  <img
                    src={park.image_url} alt="" />
                    <div className="overlay">
                    <Link to={'/parks/' + park.id}>{park.name}</Link>
                    </div></h4> */}
                  {/* <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
                  <p className="lead">{park.description}</p> */}
                {/* </div>
                
              </div> */}
              
            {/* ) */}
          {/* })} */}
        </div>
        </div>
        </div>
      
      : <Navigate to="/login" />
  )
}
export default ParksList;
