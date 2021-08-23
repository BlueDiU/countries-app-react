import styled from 'styled-components';

export const SelectFormStyled = styled.div`
  .main-select {
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 4px;
    border: 0;
    box-shadow: var(--shadow);
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 4rem;
    outline: 0;
    padding: 1.2rem 2rem;
    width: 50%;

    @media only screen and (min-width: 1024px) {
      margin-top: 0;
      width: auto;
    }
  }
`;
