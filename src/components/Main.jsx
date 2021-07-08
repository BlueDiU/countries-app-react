import styled from 'styled-components';
import CountryList from './CountryList/CountryList';

import Header from './header/Header';
import Section from './section/Section';

export const MainContainer = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
`;

function Main() {
  return (
    <div>
      <Header />
      <MainContainer>
        <Section />

        <CountryList />
      </MainContainer>
    </div>
  );
}

export default Main;
