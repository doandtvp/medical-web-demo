import React from 'react';
import './Select.scss';

function Select(props) {
  const options = props.options;
  return (
    <div>
      <label>{props.label}</label>
      <select defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disabled>
          {props.placeholder}
        </option>
        {options?.map((opt, index) => (
          <option value={index} key={index}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
