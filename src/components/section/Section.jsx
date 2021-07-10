import styled from 'styled-components';

/* components */
import SearchForm from '../searchForm/SearchForm';
import SelectForm from '../selectForm/SelectForm';

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.7rem 1rem;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5.5rem;
  }

  @media only screen and (min-width: 350px) {
    padding-bottom: 5rem;
  }
`;

function Section() {
  return (
    <MainSection>
      <SearchForm />

      <SelectForm />
    </MainSection>
  );
}

export default Section;
