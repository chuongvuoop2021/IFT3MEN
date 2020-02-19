import React from 'react'
import { TableCell, TableRow, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { CountryProps } from '../types'
import { useDispatch } from 'react-redux'
import { addCountry, fetchCountry } from '../redux/actions'

import Flag from './Flag'

type CountryRowProps = {
  country: CountryProps
}

const CountryRow = ({ country }: CountryRowProps) => {
  let history = useHistory()
  const dispatch = useDispatch()
  const handleAddButtonClick = () => {
    const product: CountryProps = {
      name: country.name,
      flag: country.flag,
    }
    dispatch(addCountry(product))
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
        <Button onClick={handleAddButtonClick}>ADD</Button>
      </TableCell>
    </TableRow>
  )
}

export default CountryRow
