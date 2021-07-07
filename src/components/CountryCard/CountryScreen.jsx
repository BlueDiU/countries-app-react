import { CountryCardStyled } from './CountryScreen.styles';

function CountryScreen() {
  return (
    <CountryCardStyled>
      <article className="country-card">
        <img
          className="country-card__img"
          src="https://restcountries.eu/data/slv.svg"
          alt=""
        />

        <div className="country-card__container">
          <h2 className="country-card__title">El Salvador</h2>
          <section className="country-info">
            <div className="country-info__text">
              <span className="country-info__bold">
                Population:
              </span>
              100,000,000
            </div>
            <div className="country-info__text">
              <span className="country-info__bold">Region:</span>{' '}
              Americas
            </div>
            <div className="country-info__text">
              <span className="country-info__bold">
                Capital:
              </span>
              San Salvador
            </div>
          </section>
        </div>
      </article>
    </CountryCardStyled>
  );
}

export default CountryScreen;
