import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddFavorite from '../components/AddFavorites'
import RemoveFavorite from '../components/RemoveFavorite'
import Header from '../mainpage/Header'


const parkUrl = "http://localhost:8080/parks/list/"

function ParkDetails({ detailUrl }) {
  const [park, setPark] = useState({})
  const [favorites, setFavorites] = useState([])


  const { id } = useParams()
  // console.log(id)

  useEffect(() => {
    async function fetchData() {
      const Url = detailUrl + id;
      const response = await fetch(Url);
      const data = await response.json();
      setPark(data);
      return response;
    }
    fetchData();
  }, [detailUrl, id])

  const addFavoritePark = (park) => {
    const favorite = true;
  }
  return (
    <>
      <Header />
      <div className='parks-list'>
        <div key={park.id} className="row">
          <div className="col-11 text-center mx-auto">
            <h2 className="featurette-heading">{park.name}</h2>
            <h4><span className="text-muted">{"   " + park.city + ", " + park.state}</span></h4>
            <p className="lead">{park.description}</p>
          </div>
          <div className="image-container">
            <img className="img-fluid mx-auto" src={park.image_url} alt="" />
            <div onClick={() => addFavoritePark(park)} className='overlay align-items-center justify-content'>
              <AddFavorite />
              {/* <RemoveFavorite /> */}
            </div>
            <hr className="featurette-divider" />
          </div>
        </div>
      </div>
    </>
  )
}
export default ParkDetails
