import styled from 'styled-components';

export const ScrollTopStyled = styled.div`
  .scroll-top-btn {
    cursor: pointer;
    position: fixed;
    z-index: 999;
    bottom: 1vh;
    right: 1vw;
    width: 4.3rem;
    height: 4.3rem;
    border-radius: 20%;
    background-color: #000000;
    color: white;
    box-shadow: var(--shadow);
    outline: 0;
    border: 0;
    font-size: 2.1rem;
    font-weight: bold;
    transition: all 300ms ease-in-out;
  }

  .scroll-top-btn:hover {
    color: #515a5a;
    background-color: white;
  }
`;
