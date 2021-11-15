import React from 'react'
import useFetch from 'react-fetch-hook'

const Position = ({id}) => {

    const { loading, error, data } = useFetch(`https://damp-tundra-35584.herokuapp.com/positions/${id}`)

    if (data === undefined) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
  
    


    return (
        <div>
            { data.title }




            
        </div>
    )
}

export default Position
