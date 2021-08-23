import styled from 'styled-components';

export const SearchFormStyled = styled.div`
  .main-form {
    width: 100%;

    &__search {
      background-color: ${(props) => props.theme.cardColor};
      border-radius: 5px;
      border: 0;
      box-shadow: var(--shadow);
      caret-color: ${(props) => props.theme.fontColor};
      color: ${(props) => props.theme.fontColor};
      font-size: 1.5rem;
      font-weight: 200;
      height: 40px;
      outline: 0;
      padding: 2.4rem 2.5rem;
      width: 100%;

      @media only screen and (min-width: 1024px) {
        height: 50px;
        width: 50rem;
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
