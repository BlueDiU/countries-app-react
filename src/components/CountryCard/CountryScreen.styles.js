import styled from 'styled-components';

export const CountryCardStyled = styled.div`
  .country-card {
    background-color: var(--darkBlue);
    color: var(--white);
    margin-right: 4rem;
    margin-left: 4rem;
    margin-bottom: 4rem;
    border-radius: 5px;
    box-shadow: var(--shadow);

    @media only screen and (min-width: 1024px) {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 0;
    }

    &__img {
      cursor: pointer;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 100%;
      height: auto;
    }

    &__container {
      padding: 2.8rem 1.7rem;
    }

    &__title {
      margin: 0;
      font-size: 2rem;
      letter-spacing: 0.5px;
      margin-bottom: 1.3rem;
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
