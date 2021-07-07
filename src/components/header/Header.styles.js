import styled from 'styled-components';

export const HeaderStyled = styled.div`
  .main-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.2rem;
    box-shadow: var(--shadow);

    @media only screen and (min-width: 1024px) {
      margin-bottom: 2.7rem;
      padding: 0.4rem 4rem;
    }
    background-color: var(--darkBlue);

    &__title {
      cursor: pointer;
      color: var(--white);
      letter-spacing: 1px;
      font-size: 1.8rem;

      @media only screen and (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }

    .main-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      cursor: pointer;
      padding: 0;
      background-color: transparent;
      border: 0;
      outline: 0;
      text-align: center;

      &__img {
        width: 20px;
        margin-right: 9px;
      }
      &__text {
        font-size: 1.3rem;
        color: var(--white);
        font-weight: 600;
      }
    }
  }
`;
