import { countryReducer } from './countryReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  countriesData: countryReducer,
});
