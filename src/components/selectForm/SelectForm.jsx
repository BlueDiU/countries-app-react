import useForm from '../../hooks/useForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startGetCountryByRegion } from '../../context/actions/country';

/* components */
import { SelectFormStyled } from './SelectForm.styles';

function SelectForm() {
  const [{ regions }, handleInputChange] = useForm({
    regions: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetCountryByRegion(regions));
  }, [regions, dispatch]);

  return (
    <SelectFormStyled>
      <select
        className="main-select"
        name="regions"
        onChange={handleInputChange}
      >
        <option className="main-select__option" value="">
          Filter by Region
        </option>
        <option className="main-select__option" value="africa">
          Africa
        </option>
        <option className="main-select__option" value="americas">
          Americas
        </option>
        <option className="main-select__option" value="asia">
          Asia
        </option>
        <option className="main-select__option" value="europe">
          Europe
        </option>
        <option className="main-select__option" value="oceania">
          Oceania
        </option>
      </select>
    </SelectFormStyled>
  );
}

export default SelectForm;
