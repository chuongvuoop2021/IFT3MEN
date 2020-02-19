import React, { useState, useCallback } from 'react'

import useFetchCountries from '../hooks/useFetchCountries'
import CountriesTable from '../components/CountriesTable'
import NavBar from '../components/NavBar'
import DrawerPage from '../components/DrawerPage'
import ThemeContext, { themes } from '../Contexts'

interface CurrentTheme {
  theme: {
    background: string
    color: string
  }
}

function Country() {
  const [open, setOpen] = React.useState(false)
  const [searchKey, setSearchKey] = useState('')
  const [selectedSortField, setSelectedSortField] = useState('')
  const [isSortedValue, setIsSortedValue] = useState(true)
  const { filterdCountriesList } = useFetchCountries(
    searchKey,
    isSortedValue,
    selectedSortField
  )

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleSortCountryNameClick = useCallback(
    label => {
      setIsSortedValue(!isSortedValue)
      setSelectedSortField(label)
    },
    [isSortedValue]
  )

  const [context, setContext] = useState<any>({
    theme: themes.black,
    switchTheme: () => {
      setContext((current: CurrentTheme) => ({
        ...current,
        theme: current.theme === themes.black ? themes.white : themes.black,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <div>
        <NavBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setSearch={useCallback(searchKey => setSearchKey(searchKey), [])}
        />
        <CountriesTable
          countryData={filterdCountriesList}
          isSorted={isSortedValue}
          selectedField={selectedSortField}
          onSortFieldClick={handleSortCountryNameClick}
        />
        <DrawerPage isOpen={open} onDrawerCloseClick={handleDrawerClose} />
      </div>
    </ThemeContext.Provider>
  )
}

export default Country
