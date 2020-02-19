import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

const flagStyle = {
  width: 200,
}

const CountryDetail = () => {
  const countryArr = useSelector(
    (state: AppState) => state.selectedCountry.selectedCountry
  )
  console.log(countryArr)
  return (
    <div>
      {countryArr && (
        <div key={countryArr.name}>
          <img style={flagStyle} src={countryArr.flag} alt="Flag" />
          <h2>Name:{countryArr.name}</h2>
        </div>
      )}
    </div>
  )
}

export default CountryDetail
