import React from 'react';
import InfoBox from './InfoBox';

import '../styles/LeftColumn.css';


export default function LeftColumn(props) {
  return (
    <div className="LeftColumn">
      <InfoBox clickedPart={props.clickedPart} />
    </div>
  );
}
