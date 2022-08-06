import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddFavorite from '../components/AddFavorites'
import "../AccountDetails.css"


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
        
        <div className="hero vh-100 d-flex align-items-center">
        <div className="container fluid">
        <span className="font-link">
            <div className="row">
                <div className="hero vh-100 d-flex align-items-center">
        <div key={favorites.email} className="container fluid">
            {favorites.email}
            {favorites.parks
                ? <div>{favorites.parks.map((park) => {
                    return (
                        <div key={park.id}>
                            <h1>{park.id}</h1>
                            <h1>{park.name}</h1>
                            <h1>{park.state}</h1>
                        </div>
                    )
                })}
                </div>
                : null}
        </div>
        </div>
        </div>
        </span>
    </div>            
</div>
        
    );
}
export default AccountDetails;