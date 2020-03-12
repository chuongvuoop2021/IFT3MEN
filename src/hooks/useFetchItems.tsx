import { useState, useEffect } from 'react'
import axios from 'axios'

interface ItemProps {
  name: string
  publisher?: string
  warrantyDuration?: string
  variants?: [string]
  categories?: [string]
}

const useFetchItems = (filter: string) => {
  const [allItems, setAllItems] = useState<ItemProps[]>([])

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/v1/items/${filter}`)
      .then(response => {
        setAllItems(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [filter])

  return allItems
}

export default useFetchItems
