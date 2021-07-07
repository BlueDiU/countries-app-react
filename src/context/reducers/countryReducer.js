import { types } from '../types';

const initialState = {
  countries: null,
  details: null,
  region: null,
  country: null,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countryGetAllCountries:
      return {
        ...state,
        countries: action.payload,
      };

    case types.countryGetCountryByName:
      return {
        ...state,
        details: action.payload,
      };

    default:
      return state;
  }
};
