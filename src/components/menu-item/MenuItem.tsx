import React from 'react'
import { withRouter } from 'react-router-dom'
// import { MenuItemProps } from '../../otherTypes'

import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }: any) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    role="button"
    tabIndex={0}
    onKeyDown={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem)
