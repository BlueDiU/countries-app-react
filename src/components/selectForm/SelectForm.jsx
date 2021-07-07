import { SelectFormStyled } from './SelectForm.styles';

function SelectForm() {
  return (
    <SelectFormStyled>
      <select className="main-select" name="regions">
        <option className="main-select__option" value="default">
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
