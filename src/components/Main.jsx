import styled from 'styled-components';

import Header from './header/Header';
import Section from './section/Section';

const MainContainer = styled.main`
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
      </MainContainer>
    </div>
  );
}

export default Main;
