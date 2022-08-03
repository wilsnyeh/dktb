import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserPage({fetchUrl, ...props}) {
    const [park, setPark] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
          const Url = fetchUrl + id;
          const response = await fetch(Url);
          const data = await response.json();
          setPark(data);
          return response;
        }
        fetchData();
      }, [fetchUrl, id])

  return (
    <div>spasdvflokfvlo</div>
  )
}

export default UserPage