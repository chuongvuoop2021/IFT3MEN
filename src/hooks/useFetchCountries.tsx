import { useEffect, useState } from 'react'
import axios from 'axios'
import _orderBy from 'lodash/orderBy'

interface CountriesList {
  name: string
  nativeName: string
  population: number
  region: string
  flag: string
  capital: string
}

export default function useFetchCountries(
  searchKey: string,
  isSortedValue: boolean,
  selectedSortField: string
) {
  const [allCountries, setAllCountries] = useState<CountriesList[]>([])
  const [filterdCountriesList, setFilterdCountriesList] = useState<
    CountriesList[]
  >([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllCountries(response.data)
        setFilterdCountriesList(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const loweredSearchKey = searchKey.toLowerCase()
    const filteredList = allCountries.filter(
      country =>
        country.name.toLowerCase().includes(loweredSearchKey) ||
        country.nativeName.toLowerCase().includes(loweredSearchKey) ||
        country.population > parseInt(loweredSearchKey) ||
        country.region.includes(loweredSearchKey)
    )

    const sortedCountry = isSortedValue
      ? _orderBy(filteredList, [selectedSortField.toLowerCase()], ['asc'])
      : _orderBy(filteredList, [selectedSortField.toLowerCase()], ['desc'])
    setFilterdCountriesList(sortedCountry)
  }, [allCountries, searchKey, isSortedValue, selectedSortField])
  return { filterdCountriesList }
}
