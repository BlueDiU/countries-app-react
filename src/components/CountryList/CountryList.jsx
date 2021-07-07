import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { startGetAllCountries } from '../../context/actions/country';
import CountryScreen from '../CountryCard/CountryCard';

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
  const dispatch = useDispatch();
  const { countries } = useSelector(
    (state) => state.countriesData
  );

  useEffect(() => {
    dispatch(startGetAllCountries());
  }, [dispatch]);

  return (
    <CountryListStyled>
      <CountryScreen />
    </CountryListStyled>
  );
}

export default CountryList;
