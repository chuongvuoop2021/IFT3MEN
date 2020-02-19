import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

const CountryDetail = () => {
  const countryArr = useSelector(
    (state: AppState) => state.product.selectedCountry
  )
  console.log(countryArr)
  return (
    <div>
      {countryArr && (
        <div key={countryArr.name}>
          <img style={{ width: 200 }} src={countryArr.flag} alt="Flag" />
          <h2>Name:{countryArr.name}</h2>
        </div>
      )}
    </div>
  )
}

export default CountryDetail
