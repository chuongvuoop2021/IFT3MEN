import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Country from './pages/Country'
import CountryDetail from './components/CountryDetail'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Country} />
    <Route exact path="/countrydetail/:countryName" component={CountryDetail} />
  </Switch>
)

export default Routes
