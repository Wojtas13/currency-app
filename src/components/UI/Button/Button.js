import React from 'react';

import './Button.scss';

const Button = props => {
  return (
    <button className="btn" type="button" onClick={props.clicked}>
      {props.title}
    </button>
  );
};

export default Button;
