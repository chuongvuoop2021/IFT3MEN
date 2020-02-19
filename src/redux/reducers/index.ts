import { combineReducers } from 'redux'

import selectedCountry from './country.reducer'
import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    selectedCountry,
    ui,
  })

export default createRootReducer
