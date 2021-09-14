import React from 'react';
import './Button.scss';

function Buttons(props) {
  console.log(props);
  const { onHandleClick } = props;

  return (
    <button
      className={props.className}
      type={props.type}
      onClick={onHandleClick}
    >
      {props.value}
    </button>
  );
}

export default Buttons;
