import { client } from '../client'
import { useState, useEffect } from 'react'

export function useSanity(query, params = {}, modifier = (data) => data) {
  const [data, setData] = useState([])

  useEffect(
    () => {
      const fetchData = async () => {
        const fetchedData = await client.fetch(query, params)
        const modifiedData = modifier(fetchedData)
        setData(modifiedData)
      }

      fetchData()
    },
    [] /*, [modifier, params, query]*/
  )

  return data
}
