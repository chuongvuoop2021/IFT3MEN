import { useState, useEffect } from 'react'
import axios from 'axios'

interface ItemProps {
  name: string
  publisher?: string
  warrantyDuration?: string
  variants?: [string]
  categories?: [string]
}

const useFetchItems = () => {
  const [allItems, setAllItems] = useState<ItemProps[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:2000/api/v1/items')
      .then(response => {
        setAllItems(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return allItems
}

export default useFetchItems
