// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
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
  type: typeof ADD_PRODUCT
  payload: {
    product: CountryProps
  }
}

export type AddQuantityAction = {
  type: typeof ADD_QUANTITY
  payload: {
    product: CountryProps
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: CountryProps
  }
}

export type FetCountryAction = {
  type: typeof FETCH_COUNTRY
  payload: {
    product: CountryProps
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
  | RemoveProductAction
  | AddQuantityAction
  | FetCountryAction

export type ProductState = {
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
  product: ProductState
  ui: UiState
}
