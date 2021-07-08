import React from 'react';

function DetailsGroupTwo({
  topLevelDomain,
  currencies,
  languages,
}) {
  return (
    <div className="details-info__group-2">
      <p className="details-info__text">
        <span className="details-info__bold">
          Top Level Domain:
        </span>
        {topLevelDomain[0]}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Currencies: </span>
        {currencies[0].code}
      </p>
      <p className="details-info__text">
        <span className="details-info__bold">Languages: </span>
        {languages[0].name}
      </p>
    </div>
  );
}

export default DetailsGroupTwo;
