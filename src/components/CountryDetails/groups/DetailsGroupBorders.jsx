import React from 'react';

function DetailsGroupBorders({ borders }) {
  return (
    <div className="details-info__border">
      <h5 className="border__title">Border Countries:</h5>

      <div className="border__container">
        <div className="border__box">
          {borders.length > 0 ? borders[0] : '❌'}
        </div>

        <div className="border__box">
          {borders.length > 0 ? borders[1] : '❌'}
        </div>

        <div className="border__box">
          {borders.length > 0
            ? borders[2]
              ? borders[2]
              : '❌'
            : '❌'}
        </div>
      </div>
    </div>
  );
}

export default DetailsGroupBorders;
