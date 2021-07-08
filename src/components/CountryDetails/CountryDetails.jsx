import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startGetCountryByName } from '../../context/actions/country';
import { MainContainer } from '../Main';
import BackBtn from '../utils/BackBtn';
import { CountryDetailsStyled } from './CountryDetails.styles';

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
    return <h2>Loading...</h2>;
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
  } = details[0];

  return (
    <MainContainer>
      <CountryDetailsStyled>
        <BackBtn />

        <article className="details-card">
          <img
            className="details-card__img"
            src={flag}
            alt={name}
          />

          <section className="details-info">
            <h3 className="details-info__name">{name}</h3>
            <div className="details-info__group-1">
              <p className="details-info__text">
                <span className="details-info__bold">
                  Native Name:
                </span>
                {nativeName}
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Population:
                </span>
                {population}
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Region:
                </span>
                {region}
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Sub Region:
                </span>
                {subregion}
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Capital:
                </span>
                {capital}
              </p>
            </div>

            <div className="details-info__group-2">
              <p className="details-info__text">
                <span className="details-info__bold">
                  Top Level Domain:
                </span>
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Currencies:
                </span>
              </p>
              <p className="details-info__text">
                <span className="details-info__bold">
                  Languages:
                </span>
              </p>
            </div>

            <div className="details-info__group-3">
              <h5 className="group-3__title">
                Border Countries:
              </h5>
              <div className="group-3__container">
                <div className="group-3__box">
                  {borders?.length > 0 ? borders[0] : '❌'}
                </div>
                <div className="group-3__box">
                  {borders?.length > 0 ? borders[1] : '❌'}
                </div>
                <div className="group-3__box">
                  {borders?.length > 0
                    ? borders[2]
                      ? borders[2]
                      : '❌'
                    : '❌'}
                </div>
              </div>
            </div>
          </section>
        </article>
      </CountryDetailsStyled>
    </MainContainer>
  );
}

export default CountryDetails;
