import styled from 'styled-components';

export const SearchFormStyled = styled.div`
  .main-form {
    width: 100%;

    &__search {
      background-color: ${(props) => props.theme.cardColor};
      padding: 2.4rem 2.5rem;
      box-shadow: var(--shadow);
      font-size: 1.5rem;
      color: ${(props) => props.theme.fontColor};
      caret-color: ${(props) => props.theme.fontColor};
      font-weight: 200;
      height: 40px;
      width: 100%;
      border: 0;
      outline: 0;
      border-radius: 5px;

      @media only screen and (min-width: 1024px) {
        width: 50rem;
        height: 50px;
      }
    }

    &__search::placeholder {
      color: ${(props) => props.theme.fontColor};
      font-size: 1.5rem;
    }

    @media only screen and (min-width: 1024px) {
      width: 70%;
    }
  }
`;
