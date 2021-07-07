import { types } from '../types';

const initialState = {
  countries: [],
  details: [],
  region: [],
  country: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countryGetAllCountries:
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };

    default:
      return state;
  }
};
