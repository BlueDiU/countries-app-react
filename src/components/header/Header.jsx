import DarkModeImg from '../../assets/img/darkMode.svg';
import lightModeImg from '../../assets/img/lightMode.svg';

import { HeaderStyled } from './Header.styles';

function Header({ theme, setTheme }) {
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const icon = theme === 'light' ? lightModeImg : DarkModeImg;
  const mode = theme === 'light' ? 'Dark Mode' : 'Light Mode';

  return (
    <>
      <HeaderStyled>
        <header className="main-header">
          <h1 className="main-header__title">
            Where in the world?
          </h1>

          <button className="main-button" onClick={changeTheme}>
            <img
              src={icon}
              alt=""
              className="main-button__img"
            />
            <span className="main-button__text">{mode}</span>
          </button>
        </header>
      </HeaderStyled>
    </>
  );
}

export default Header;
