import React from 'react';
import { populationFormat } from '../../../helpers/populationFormat';

function DetailsGroupOne({
  nativeName,
  population,
  region,
  subregion,
  capital,
}) {
  return (
    <div className="details-info__group-1">
      <p className="details-info__text">
        <span className="details-info__bold">Native Name: </span>
        {nativeName}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Population: </span>
        {populationFormat(population)}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Region: </span>
        {region}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Sub Region: </span>
        {subregion}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Capital: </span>
        {capital}
      </p>
    </div>
  );
}

export default DetailsGroupOne;
