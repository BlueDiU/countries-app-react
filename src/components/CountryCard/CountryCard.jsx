import { useHistory } from 'react-router-dom';
import { CountryCardStyled } from './CountryCard.styles';

function CountryCard({
  name,
  capital,
  population,
  flag,
  region,
}) {
  let history = useHistory();

  const handleViewDetails = () => {
    history.push(`/details/${name}`);
  };

  return (
    <CountryCardStyled>
      <article className="country-card">
        <img
          className="country-card__img"
          src={flag}
          alt={name}
          onClick={handleViewDetails}
        />

        <div className="country-card__container">
          <h2 className="country-card__title">{name}</h2>
          <section className="country-info">
            <div className="country-info__text">
              <span className="country-info__bold">
                Population:
              </span>
              {population}
            </div>
            <div className="country-info__text">
              <span className="country-info__bold">Region:</span>
              {region}
            </div>
            <div className="country-info__text">
              <span className="country-info__bold">
                Capital:
              </span>
              {capital}
            </div>
          </section>
        </div>
      </article>
    </CountryCardStyled>
  );
}

export default CountryCard;
