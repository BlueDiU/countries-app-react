import styled from 'styled-components';

export const CountryDetailsStyled = styled.div`
  .details-card {
    padding: 3rem;

    @media only screen and (min-width: 1024px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &__img {
      @media only screen and (min-width: 1024px) {
        width: 46%;
        height: 100%;
      }
    }
  }

  .details-info {
    &__name {
      font-size: 2.1rem;
      letter-spacing: 0.4px;
    }

    &__text {
      font-size: 1.4rem;
    }

    &__bold {
      font-weight: 600;
    }

    &__groups {
      display: flex;
      flex-direction: column;

      @media only screen and (min-width: 1024px) {
        column-gap: 7rem;
        display: grid;
        grid-template-columns: repeat(2, 200px);
      }
    }

    &__border {
      margin-top: 2rem;

      @media only screen and (min-width: 1024px) {
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        margin-left: -2.58rem;
      }

      .border__title {
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.2px;

        @media only screen and (min-width: 1024px) {
          text-align: center;
          font-size: 1.7rem;
        }
      }

      .border__container {
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      .border__box {
        background-color: ${(props) => props.theme.cardColor};
        border-radius: 3px;
        box-shadow: var(--shadow);
        font-size: 1.2rem;
        padding: 0.8rem 3rem;
        @media only screen and (min-width: 1024px) {
          margin-left: 1.2rem;
        }
      }
    }
  }
`;
