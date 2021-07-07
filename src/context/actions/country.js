import { helpHttp } from '../../helpers/helpHttp';
import { API_URLS } from '../../helpers/ApiUrl';
import { types } from '../types';

const {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  GET_COUNTRIES_BY_REGION,
} = API_URLS;

export const startGetAllCountries = () => {
  return async (dispatch) => {
    const res = await helpHttp().get(GET_ALL_COUNTRIES);

    dispatch(countryGetAll(res));
  };
};

const countryGetAll = (data) => ({
  type: types.countryGetAllCountries,
  payload: data,
});
