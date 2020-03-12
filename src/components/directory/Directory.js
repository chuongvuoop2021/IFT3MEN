import React from 'react'

import MenuItem from '../menu-item/MenuItem'

import './Directory.scss'

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'pcs',
          imageUrl: 'https://i.redd.it/6wojyxkma5qz.jpg',
          size: 'large',
          id: 1,
        },
        {
          title: 'consoles',
          imageUrl:
            'https://sm.pcmag.com/pcmag_au/feature/n/nintendo-s/nintendo-switch-vs-playstation-4-vs-xbox-one-top-game-consol_bf8k.jpg',
          size: 'large',
          id: 2,
        },
        {
          title: 'game copies',
          imageUrl:
            'https://www.itl.cat/pngfile/big/7-73802_4k-gaming-wallpapers-1080p-bozhuwallpaper-2017-games.jpg',
          id: 3,
        },
        {
          title: 'hardwares',
          imageUrl:
            'https://gamerssuffice.com/wp-content/uploads/2020/01/Hardware-780x405.jpg',
          id: 4,
        },
        {
          title: 'others',
          imageUrl:
            'https://mustohave.com/wp-content/uploads/2019/11/10-best-PC-Gaming-Accessories-to-Buy-1.png',
          id: 5,
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory