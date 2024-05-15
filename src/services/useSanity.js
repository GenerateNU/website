import { client } from '../client'
import { useState, useEffect } from 'react'

export function useSanity(query, params = {}) {
  const [data, setData] = useState([])

  useEffect(() => {
    client
      .fetch(query, params)
      .then((fetchedData) => {
        setData(fetchedData)
      })
      .catch((error) => {
        console.error('Error fetching Sanity data:', error)
      })
  })
  return data
}
