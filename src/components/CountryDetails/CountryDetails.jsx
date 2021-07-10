import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startGetCountryByCode } from '../../context/actions/country';

/* components */
import { MainContainer } from '../Main';
import { CountryDetailsStyled } from './CountryDetails.styles';
import Loader from '../utils/Loader';
import BackBtn from '../utils/BackBtn';
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
    const code = pathname.slice(9);

    dispatch(startGetCountryByCode(code.toString()));
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
