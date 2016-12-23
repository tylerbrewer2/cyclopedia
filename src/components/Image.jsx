import React, { PropTypes } from 'react';

import '../styles/Image.css';

export default function Image(props) {
  return (
    <img className="Image" src={props.source} alt={props.alt} />
  );
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
