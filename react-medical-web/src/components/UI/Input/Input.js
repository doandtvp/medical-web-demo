import React from 'react';
import './Input.scss';

function Input(props) {
  return (
    <div className='input-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <br />
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
