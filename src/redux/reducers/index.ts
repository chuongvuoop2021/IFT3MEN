import { combineReducers } from 'redux'

import storedCountries from './country.reducer'
import ui from './ui'
import user from './user'

const createRootReducer = () =>
  combineReducers({
    storedCountries,
    ui,
    user,
  })

export default createRootReducer
