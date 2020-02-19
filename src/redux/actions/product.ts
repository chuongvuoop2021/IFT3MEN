import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  FETCH_COUNTRY,
  CountryActions,
  CountryProps,
} from '../../types'

export function addCountry(product: CountryProps): CountryActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function addQuantity(product: CountryProps): CountryActions {
  return {
    type: ADD_QUANTITY,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: CountryProps): CountryActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountry(countryName: string) {
  return (dispatch: Dispatch) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(resp => resp.json())
      .then(product => {
        dispatch(dataFetchStart(product[0]))
      })
  }
}

export function dataFetchStart(product: CountryProps): CountryActions {
  return {
    type: FETCH_COUNTRY,
    payload: {
      product,
    },
  }
}
