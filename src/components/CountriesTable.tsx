import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import { TableCell, TableRow } from '@material-ui/core'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import CountryRow from './CountryRow'

import { CountriesTableProps } from '../types'

function CountriesTable({
  countryData,
  onSortFieldClick,
  isSorted,
  selectedField,
}: CountriesTableProps) {
  const tableHeader = [
    'Flag',
    'Name',
    'Capital',
    'Region',
    'Population',
    'Add Country',
  ]
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeader.map(label => (
            <TableCell
              key={label}
              onClick={() => onSortFieldClick(label)}
              className="click-field"
            >
              <TableSortLabel
                active={label === selectedField}
                direction={isSorted ? 'asc' : 'desc'}
                onClick={() => onSortFieldClick(label)}
              >
                {label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {countryData &&
          countryData.map(country => (
            <CountryRow key={country.name} country={country} />
          ))}
      </TableBody>
    </Table>
  )
}

export default React.memo(CountriesTable)
