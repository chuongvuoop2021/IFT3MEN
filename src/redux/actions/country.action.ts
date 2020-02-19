import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_QUANTITY,
  FETCH_COUNTRY,
  CountryActions,
  CountryProps,
} from '../../types'

export function addCountry(selectedCountry: CountryProps): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      selectedCountry,
    },
  }
}

export function addQuantity(selectedCountry: CountryProps): CountryActions {
  return {
    type: ADD_QUANTITY,
    payload: {
      selectedCountry,
    },
  }
}

export function removeCountry(selectedCountry: CountryProps): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      selectedCountry,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountry(countryName: string) {
  return (dispatch: Dispatch) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then(resp => resp.json())
      .then(selectedCountry => {
        dispatch(dataFetchStart(selectedCountry[0]))
      })
  }
}

export function dataFetchStart(selectedCountry: CountryProps): CountryActions {
  return {
    type: FETCH_COUNTRY,
    payload: {
      selectedCountry,
    },
  }
}
