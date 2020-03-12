import React from 'react'

import useFetchItems from '../hooks/useFetchItems'

import CollectionPreview from '../components/preview-collection/PreviewCollection'

import './ShopPage.scss'

interface ItemProps {
  name: string
  publisher?: string
  warrantyDuration?: string
  variants?: [string]
  categories?: [string]
}

function ShopPage() {
  const pCs: ItemProps[] | null = useFetchItems('filter=PC')
  const consoles: ItemProps[] | null = useFetchItems('filter=Console')
  const gameCopies: ItemProps[] | null = useFetchItems('filter=GameCopy')
  const hardwares: ItemProps[] | null = useFetchItems('filter=Hardware')
  const devices: ItemProps[] | null = useFetchItems('filter=Other')
  const gadgets: ItemProps[] | null = useFetchItems('filter=Other')

  const collections = [
    {
      id: 1,
      title: 'PCS',
      routeName: 'pcs',
      items: pCs,
    },
    {
      id: 2,
      title: 'CONSOLES',
      routeName: 'consoles',
      items: consoles,
    },
    {
      id: 3,
      title: 'GAME COPIES',
      routeName: 'consoles',
      items: gameCopies,
    },
    {
      id: 4,
      title: 'HARDWARES',
      routeName: 'hardwares',
      items: hardwares,
    },
    {
      id: 5,
      title: 'DEVICES',
      routeName: 'devices',
      items: devices,
    },
    {
      id: 6,
      title: 'GADGETS & OTHERS',
      routeName: 'others',
      items: gadgets,
    },
  ]

  return (
    <div className="shop-page">
      {collections.map(collection => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  )
}

export default ShopPage
