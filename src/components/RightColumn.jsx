import React, { PropTypes } from 'react';
import MappedContainer from './MappedContainer';

import '../styles/RightColumn.css';

export default function RightColumn(props) {
  return (
    <div className="RightColumn">
      <MappedContainer parts={props.parts} updateInfo={props.updateInfo} />
    </div>
  );
}

RightColumn.propTypes = {
  parts: PropTypes.arrayOf(React.PropTypes.obj),
  updateInfo: PropTypes.func.isRequired,
};
