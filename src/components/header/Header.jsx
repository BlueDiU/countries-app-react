import imgDark from '../../assets/img/darkMode.svg';

import { HeaderStyled } from './Header.styles';

function Header() {
  return (
    <>
      <HeaderStyled>
        <header className="main-header">
          <h1 className="main-header__title">
            Where in the world?
          </h1>

          <button className="main-button">
            <img
              src={imgDark}
              alt=""
              className="main-button__img"
            />
            <span className="main-button__text">Light Mode</span>
          </button>
        </header>
      </HeaderStyled>
    </>
  );
}

export default Header;
