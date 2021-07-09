import { populationFormat } from '../../../helpers/populationFormat';

function CardInfo({ population, region, capital }) {
  return (
    <section className="country-info">
      <div className="country-info__text">
        <span className="country-info__bold">Population: </span>
        {populationFormat(population)}
      </div>
      <div className="country-info__text">
        <span className="country-info__bold">Region: </span>
        {region}
      </div>
      <div className="country-info__text">
        <span className="country-info__bold">Capital: </span>
        {capital}
      </div>
    </section>
  );
}

export default CardInfo;
