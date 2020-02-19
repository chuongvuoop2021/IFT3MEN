import React from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { AppState } from '../../types'
import './CartIcon.scss'

const CartIcon = () => {
  const products = useSelector((state: AppState) => state.product.inCart)
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{products.length}</span>
    </div>
  )
}

export default CartIcon
