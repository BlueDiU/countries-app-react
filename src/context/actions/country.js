import { helpHttp } from '../../helpers/helpHttp';
import { API_URLS } from '../../helpers/ApiUrl';
import { types } from '../types';

const {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRIES_BY_REGION,
} = API_URLS;

// action for get data for API
export const startGetAllCountries = () => {
  return async (dispatch) => {
    const res = await helpHttp().get(GET_ALL_COUNTRIES);

    dispatch(countryGetAll(res));
  };
};

// action for put data of api in the reducer and
// put at the store
const countryGetAll = (data) => ({
  type: types.countryGetAllCountries,
  payload: data,
});

// action for get data for API when the name is provided
export const startGetCountryByName = (name) => {
  return async (dispatch) => {
    const res = await helpHttp().get(
      `${GET_COUNTRY_BY_NAME}${name}`
    );

    dispatch(countryGetByName(res));
  };
};

// action "startGetAllCountries" for put data of api in the reducer and
// put at the store
const countryGetByName = (data) => ({
  type: types.countryGetCountryByName,
  payload: data,
});
