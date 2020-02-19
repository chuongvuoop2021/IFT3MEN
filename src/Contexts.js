import React from 'react'

export const themes = {
  white: {
    background: 'white',
    color: 'black',
  },

  black: {
    background: 'black',
    color: 'white',
  },

  blue: {
    background: 'blue',
    color: 'white',
  },

  green: {
    background: 'green',
    color: 'black',
  },
}

export default React.createContext({
  theme: themes.black,
  switchTheme: () => {},
})
