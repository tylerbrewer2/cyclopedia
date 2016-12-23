import React, { PropTypes } from 'react';

import '../styles/Button.css';

export default function Button(props) {
  const handleClick = () => props.updateInfo(props.className);

  return (
    <div onClick={handleClick} className={`Button ${props.className}`} style={{ top: `${props.top}%`, left: `${props.left}%` }}>
      <div className="outer-circle">
        <div className="inner-circle" />
      </div>
    </div>
  );
}

Button.propTypes = {
  top: React.PropTypes.number.isRequired,
  left: React.PropTypes.number.isRequired,
  className: React.PropTypes.string.isRequired,
  updateInfo: React.PropTypes.func.isRequired,
};
