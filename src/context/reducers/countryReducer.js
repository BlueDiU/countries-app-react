import { types } from '../types';

const initialState = {
  countries: null,
  details: null,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.countryGetAllCountries:
      return {
        ...state,
        countries: action.payload,
      };

    case types.countryGetCountryByCode:
      return {
        ...state,
        details: action.payload,
      };

    case types.countryCleanDetails:
      return {
        ...state,
        details: null,
      };

    default:
      return state;
  }
};
