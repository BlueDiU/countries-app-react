import styled from 'styled-components';

export const CountryCardStyled = styled.div`
  .country-card {
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 5px;
    box-shadow: var(--shadow);
    color: ${(props) => props.theme.fontColor};
    margin-bottom: 4rem;
    margin-left: 4rem;
    margin-right: 4rem;

    @media only screen and (min-width: 1024px) {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
    }

    &__img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      cursor: pointer;
      height: auto;
      width: 100%;
    }

    &__container {
      padding: 2.8rem 1.7rem;
    }

    &__title {
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 1.3rem;
      margin: 0;
      padding: 0;
    }
  }

  .country-info {
    display: flex;
    flex-direction: column;
    &__text {
      font-size: 1.65rem;
      padding: 0.6rem;
    }

    &__bold {
      font-weight: 600;
    }
  }
`;
