import React, { PropTypes } from 'react';

import '../styles/InfoBox.css';

export default function InfoBox(props) {
  if (Object.keys(props.clickedPart).length === 0 && props.clickedPart.constructor === Object) {
    return (
      <div className="InfoBox">
        <h1>Cyclopedia</h1>
        <p>Welcome to Cyclopedia! Click on a &quot;hot spot" on the right to 
          see a description about what you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="InfoBox">
      <h1>{props.clickedPart.name}</h1>
      <p>{props.clickedPart.description}</p>
    </div>
  );
}

InfoBox.propTypes = {
  clickedPart: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number,
  }),
};
