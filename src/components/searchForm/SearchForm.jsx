import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';
import {
  startGetAllCountries,
  startGetCountryByName,
} from '../../context/actions/country';

import { SearchFormStyled } from './SearchForm.styles';

function SearchForm() {
  const dispatch = useDispatch();
  const [{ search }, handleInputChange] = useForm({
    search: '',
  });

  useEffect(() => {
    search === '' && dispatch(startGetAllCountries());
  }, [search, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(startGetCountryByName(search));
  };

  return (
    <SearchFormStyled>
      <form className="main-form" onSubmit={handleSubmit}>
        <input
          className="main-form__search"
          type="search"
          name="search"
          placeholder="🔍 Search for a country..."
          autoComplete="off"
          value={search}
          onChange={handleInputChange}
        />
      </form>
    </SearchFormStyled>
  );
}

export default SearchForm;
