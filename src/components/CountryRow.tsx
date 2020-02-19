import React from 'react'
import { TableCell, TableRow, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { CountryProps, AppState } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { addCountry, fetchCountry } from '../redux/actions'

import Flag from './Flag'

type CountryRowProps = {
  country: CountryProps
}

const CountryRow = ({ country }: CountryRowProps) => {
  let history = useHistory()
  const addedCountry = useSelector(
    (state: AppState) => state.selectedCountry.inCart
  )
  const dispatch = useDispatch()
  const handleAddButtonClick = () => {
    const selectedCountry: CountryProps = {
      name: country.name,
      flag: country.flag,
    }
    dispatch(addCountry(selectedCountry))
  }

  return (
    <TableRow key={country.name}>
      <TableCell
        onClick={() => {
          history.push(`/countrydetail/${country.name}`)
          dispatch(fetchCountry(country.name))
        }}
      >
        <Flag url={country.flag}></Flag>
      </TableCell>
      <TableCell>{country.name}</TableCell>
      <TableCell>{country.capital}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>
        <Button
          onClick={handleAddButtonClick}
          disabled={!!addedCountry.find(added => added.name === country.name)}
        >
          ADD
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default CountryRow
