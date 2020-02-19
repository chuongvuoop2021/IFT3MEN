import { takeLatest, select } from 'redux-saga/effects'

import { AddCountryAction } from '../../types'

function* doSomethingWhenAddAndRemoveItem(action: AddCountryAction) {
  const state = yield select()
  yield localStorage.setItem(
    'state',
    JSON.stringify(state.selectedCountry.inCart)
  )
}

export default [takeLatest('*', doSomethingWhenAddAndRemoveItem)]
