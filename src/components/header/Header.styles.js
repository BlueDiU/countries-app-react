import styled from 'styled-components';

export const HeaderStyled = styled.div`
  .main-header {
    align-items: center;
    box-shadow: var(--shadow);
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    width: 100%;

    @media only screen and (min-width: 1024px) {
      margin-bottom: 2.7rem;
      padding: 0.4rem 4rem;
    }

    background-color: ${(props) => props.theme.cardColor};

    &__title {
      color: ${(props) => props.theme.fontColor};
      cursor: pointer;
      font-size: 1.8rem;
      letter-spacing: 1px;

      @media only screen and (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }

    .main-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin: 0;
      outline: 0;
      padding: 0;
      text-align: center;

      &__img {
        margin-right: 9px;
        width: 20px;
      }
      &__text {
        color: ${(props) => props.theme.fontColor};
        font-size: 1.3rem;
        font-weight: 600;
      }
    }
  }
`;
