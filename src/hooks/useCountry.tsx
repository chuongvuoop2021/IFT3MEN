import { useState, useEffect } from 'react'
import axios from 'axios'

interface CountriesList {
  name: string
  nativeName: string
  population: number
  region: string
  flag: string
  capital: string
}

const useCountry = (countryName: string) => {
  const [allCountries, setAllCountries] = useState<CountriesList[]>([])
  const [countryArr, setCountryArr] = useState<CountriesList[]>([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setAllCountries(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    const lowercaseCountryName = countryName.toLowerCase()
    const choseCountry = allCountries.filter(
      country =>
        country.name.toLowerCase().includes(lowercaseCountryName) ||
        country.nativeName.toLowerCase().includes(lowercaseCountryName)
    )
    setCountryArr(choseCountry)
  }, [allCountries, countryName])
  return { countryArr }
}

export default useCountry
