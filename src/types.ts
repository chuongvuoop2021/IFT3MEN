// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADD_QUANTITY = 'ADD_QUANTITY'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const FETCH_COUNTRY = 'FETCH_COUNTRY'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A Country
export interface CountriesTableProps {
  countryData: CountryProps[]
  onSortFieldClick(selectedField: string): void
  isSorted: boolean
  selectedField: string
}

export interface CountryProps {
  flag: string
  name: string
  capital?: string
  region?: string
  population?: number
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    selectedCountry: CountryProps
  }
}

export type AddQuantityAction = {
  type: typeof ADD_QUANTITY
  payload: {
    selectedCountry: CountryProps
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    selectedCountry: CountryProps
  }
}

export type FetCountryAction = {
  type: typeof FETCH_COUNTRY
  payload: {
    selectedCountry: CountryProps
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | AddQuantityAction
  | FetCountryAction

export type CountryState = {
  inCart: CountryProps[]
  selectedCountry: CountryProps | null
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  selectedCountry: CountryState
  ui: UiState
}
