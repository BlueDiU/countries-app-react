import styled from 'styled-components';

export const CountryDetailsStyled = styled.div`
  .details-card {
    width: 100%;
    padding: 0 2.6rem;

    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    &__img {
      width: 100%;
      height: 220px;

      @media only screen and (min-width: 1024px) {
        grid-row: 1 / span 4;
        grid-column: 1 / span 2;
        width: 90%;
        height: 100%;
        padding-right: 8rem;
      }
    }
  }

  .details-info {
    &__name {
      font-size: 2.1rem;
      letter-spacing: 0.4px;
      @media only screen and (min-width: 1024px) {
        grid-column: 3 / span 2;
      }
    }

    &__text {
      font-size: 1.4rem;
    }

    &__bold {
      font-weight: 600;
    }

    &__group-1 {
      margin-bottom: 4.5rem;
    }

    &__group-3 {
      margin-top: 4rem;

      @media only screen and (min-width: 1024px) {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        grid-column: 3 / span 2;
        margin-top: 0;
        width: 90% auto;
        margin-left: -8.19rem;
      }

      .group-3__title {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.2px;

        @media only screen and (min-width: 1024px) {
          margin: 0;
          text-align: center;
          font-size: 1.7rem;
        }
      }

      .group-3__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 3rem;
      }

      .group-3__box {
        background-color: var(--darkBlue);
        border-radius: 3px;
        font-size: 1.2rem;
        box-shadow: var(--shadow);
        padding: 0.8rem 3rem;
        @media only screen and (min-width: 1024px) {
          margin-left: 1.2rem;
        }
      }
    }
  }
`;
