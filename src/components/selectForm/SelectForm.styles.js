import styled from 'styled-components';

export const SelectFormStyled = styled.div`
  .main-select {
    cursor: pointer;
    background-color: var(--darkBlue);
    border: 0;
    outline: 0;
    color: var(--white);
    margin-top: 4rem;
    font-size: 1.5rem;
    width: 50%;
    padding: 1.2rem 2rem;
    border-radius: 4px;
    box-shadow: var(--shadow);

    @media only screen and (min-width: 1024px) {
      margin-top: 0;
      width: auto;
    }
  }
`;
