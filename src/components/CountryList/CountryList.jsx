import React from 'react';
import styled from 'styled-components';
import CountryScreen from '../CountryCard/CountryScreen';

const CountryListStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 6rem;
    row-gap: 6rem;
  }
`;

function CountryList() {
  return (
    <CountryListStyled>
      <CountryScreen />
    </CountryListStyled>
  );
}

export default CountryList;
