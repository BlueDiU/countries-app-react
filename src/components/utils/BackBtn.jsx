import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startCleanDetails } from '../../context/actions/country';

const BackBtnStyled = styled.div`
  .back-btn {
    background-color: ${(props) => props.theme.cardColor};
    border: 0;
    box-shadow: var(--shadow);
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    display: block;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5rem;
    margin-left: 2.4rem;
    margin-top: 2.4rem;
    padding: 1rem 2rem;
    text-align: left;
    text-decoration: none;
    width: 30%;

    @media only screen and (min-width: 1024px) {
      margin-bottom: 5rem;
      margin-left: 2.4rem;
      width: 10%;
    }
  }
`;

function BackBtn() {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleCleanData = () => {
    dispatch(startCleanDetails());
  };

  return (
    <BackBtnStyled>
      <button
        className="back-btn"
        onClick={() => {
          history.goBack();

          handleCleanData();
        }}
      >
        &#8634; Back
      </button>
    </BackBtnStyled>
  );
}

export default BackBtn;
