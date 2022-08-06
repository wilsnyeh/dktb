import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddFavorite from '../components/AddFavorites'


function AccountDetails({ accountUrl, updateFavorites, ...props }) {
    const [favorites, setFavorites] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(accountUrl)
            const data = await response.json();
            setFavorites(data)
            return response
        }
        fetchData();
    }, [accountUrl, id])

    return (
        <>
            <div>
                <span></span>
                <div className='m-5'>
                    <h1 className='pt-4'>{favorites.email}</h1>
                    <div style={{ justifyContent: "space-around" }} className='row row-cols-2 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-1'>
                        {favorites.parks
                            ? <div >{favorites.parks.map((park) => {
                                return (
                                    <div key={park.id} className='card mb-5 mx-2 shad_bottom off_white list-border'>
                                        <div className="col">
                                            <div className="card-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                    <label className="form-check-label" for="flexCheckChecked">
                                                        <h5>Bucket</h5>
                                                    </label>
                                                </div>
                                                <h3 className="card-title ">{park.name}</h3>
                                                <h4 className="card-subtitle mb-2 text-muted">{park.state}</h4>
                                                <img className="img-fluid list-border-inner "
                                                    src={park.image_url} alt="national park" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}</div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default AccountDetails;