import React, { PropTypes } from 'react';

import '../styles/Button.css';

export default function Button(props) {
  return (
    <a href="#" className='Button' style={{top: `${props.top}%`, left: `${props.left}%`}}>
      <div className="outer-circle">
        <div className="inner-circle" />
      </div>
    </a>
  );
}

Button.propTypes = {
};
