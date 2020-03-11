import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  FETCH_COUNTRY,
} from '../../types'

export default function storedCountries(
  state: CountryState = {
    inCart: [],
    selectedCountry: null,
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { selectedCountry } = action.payload
      if (state.inCart.find(p => p.name === selectedCountry.name)) {
        return state
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, inCart: [...state.inCart, selectedCountry] }
    }

    case FETCH_COUNTRY: {
      return { ...state, selectedCountry: action.payload.selectedCountry }
    }

    case REMOVE_COUNTRY: {
      const { selectedCountry } = action.payload
      const index = state.inCart.findIndex(p => p.name === selectedCountry.name)
      if (index >= 0) {
        state.inCart.splice(index, 1)
        return { ...state, inCart: [...state.inCart] }
      }
      return state
    }

    default:
      return state
  }
}
