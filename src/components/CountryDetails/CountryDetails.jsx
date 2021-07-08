import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startGetCountryByName } from '../../context/actions/country';
import { MainContainer } from '../Main';
import BackBtn from '../utils/BackBtn';
import Loader from '../utils/Loader';
import { CountryDetailsStyled } from './CountryDetails.styles';
import DetailsImg from './detailsImg/DetailsImg';
import DetailsInfo from './DetailsInfo';
import DetailsGroupBorders from './groups/DetailsGroupBorders';
import DetailsGroupOne from './groups/DetailsGroupOne';
import DetailsGroupTwo from './groups/DetailsGroupTwo';

function CountryDetails() {
  const dispatch = useDispatch();
  const { details } = useSelector(
    (state) => state.countriesData
  );

  let { pathname } = useLocation();

  useEffect(() => {
    const name = pathname.slice(9);

    dispatch(startGetCountryByName(name));
  }, [pathname, dispatch]);

  if (!details) {
    return <Loader />;
  }

  const {
    borders,
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = details[0];

  return (
    <MainContainer>
      <CountryDetailsStyled>
        <BackBtn />

        <article className="details-card">
          <DetailsImg flag={flag} name={name} />

          <DetailsInfo>
            <h3 className="details-info__name">{name}</h3>

            <div className="details-info__groups">
              <DetailsGroupOne
                nativeName={nativeName}
                population={population}
                region={region}
                subregion={subregion}
                capital={capital}
              />

              <DetailsGroupTwo
                topLevelDomain={topLevelDomain}
                currencies={currencies}
                languages={languages}
              />
            </div>

            <DetailsGroupBorders borders={borders} />
          </DetailsInfo>
        </article>
      </CountryDetailsStyled>
    </MainContainer>
  );
}

export default CountryDetails;
