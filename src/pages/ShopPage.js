import React from 'react'

import useFetchItems from '../hooks/useFetchItems'

import CollectionPreview from '../components/preview-collection/PreviewCollection'

// interface ItemProps {
//   name: string
//   publisher?: string
//   warrantyDuration?: string
//   variants?: [string]
//   categories?: [string]
// }

function ShopPage() {
  const pCs /* : ItemProps[] | null */ = useFetchItems('filter=PC')
  const consoles /* : ItemProps[] | null */ = useFetchItems('filter=Console')
  const gameCopies /* : ItemProps[] | null */ = useFetchItems('filter=GameCopy')
  const hardwares /* : ItemProps[] | null */ = useFetchItems('filter=Hardware')
  const others /* : ItemProps[] | null */ = useFetchItems('filter=Other')

  // type collectionProps = [{
  //   id: number
  //   title: string
  //   routeName: string
  //   items: ItemProps[] | null
  // }]

  const collections /* : collectionProps */ = [
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
      title: 'OTHERS',
      routeName: 'others',
      items: others,
    },
  ]

  return (
    <div className="shop-page">
      {collections.map(({ id, title, routeName, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          routeName={routeName}
          items={items}
        />
      ))}
    </div>
  )
}

export default ShopPage
