import { useHistory } from 'react-router-dom';
import CardImg from './cardImg/CardImg';
import CardInfo from './cardInfor/CardInfo';
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
        <CardImg
          flag={flag}
          name={name}
          handleViewDetails={handleViewDetails}
        />

        <div className="country-card__container">
          <h2 className="country-card__title">{name}</h2>

          <CardInfo
            population={population}
            region={region}
            capital={capital}
          />
        </div>
      </article>
    </CountryCardStyled>
  );
}

export default CountryCard;
