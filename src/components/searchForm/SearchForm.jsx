import { SearchFormStyled } from './SearchForm.styles';

function SearchForm() {
  return (
    <SearchFormStyled>
      <form className="main-form">
        <input
          className="main-form__search"
          type="search"
          name="search"
          placeholder="🔍 Search for a country..."
          autoComplete="off"
        />
      </form>
    </SearchFormStyled>
  );
}

export default SearchForm;
