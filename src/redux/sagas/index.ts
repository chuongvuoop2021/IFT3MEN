import { all } from 'redux-saga/effects'

import countrySagas from './country.sagas'
import uiSagas from './ui'

export default function* rootSaga() {
  yield all([...countrySagas, ...uiSagas])
}
