import React from 'react';
import './Select.scss';

function Select(props) {
  return (
    <div>
      <label>{props.label}</label>
      <select defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled>
          {props.placeholder}
        </option>
        <option value='1'>{props.option_1}</option>
        <option value='2'>{props.option_2}</option>
      </select>
    </div>
  );
}

export default Select;
