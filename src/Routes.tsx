import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShopPage from './pages/ShopPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'

const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignInAndSignUp} />
    </Switch>
  </div>
)

export default Routes
