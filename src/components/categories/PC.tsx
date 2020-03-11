import React from 'react'

import useFetchItems from '../../hooks/useFetchItems'

interface ItemProps {
  name: string
  publisher?: string
  warrantyDuration?: string
  variants?: [string]
  categories?: [string]
}

function ShopPage() {
  const allItems: ItemProps[] | null = useFetchItems()
  console.log(allItems)

  return <div>{allItems && allItems.map(item => <div>{item.name}</div>)}</div>
}

export default ShopPage
