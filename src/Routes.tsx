import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShopPage from './pages/ShopPage'
import CountryDetail from './components/CountryDetail'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PC from './components/categories/PC'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/countrydetail/:countryName" component={CountryDetail} />
    <Route exact path="/PC" component={PC} />
  </Switch>
)

export default Routes
