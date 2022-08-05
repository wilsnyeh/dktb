import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddFavorite from '../components/AddFavorites'


const accountUrl = "http://localhost:8090/accounts/"

function AccountDetails({ accountlUrl, ...props }) {
    const [favorites, setFavorites] = useState([])

        useEffect(() => {
            async function fetchData() {
                const response = await fetch(accountUrl);
                const data = await response.json();
                setFavorites(data.accounts);
                return response;
            }
            fetchData();
        }, [accountUrl])
    return (
        <div className='parks-list'>
            <h1>helllooo</h1>
        </div>
    )
}
export default AccountDetails
