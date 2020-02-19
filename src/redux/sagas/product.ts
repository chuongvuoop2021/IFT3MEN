import { takeLatest, select } from 'redux-saga/effects'

import { AddCountryAction } from '../../types'

function* doSomethingWhenAddingProduct(action: AddCountryAction) {
  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state.product.inCart))
}

export default [takeLatest('*', doSomethingWhenAddingProduct)]
