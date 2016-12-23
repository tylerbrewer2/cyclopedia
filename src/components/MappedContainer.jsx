import React from 'react';
import Image from './Image';

import '../styles/MappedContainer.css';

export default function MappedContainer(props) {
  return (
    <div className="MappedContainer">
      <Image
        source="http://cdn.velonews.com/wp-content/uploads/2010/06/Specialized-1.5.jpg"
        alt="Specialized Roubaix"
      />
    </div>
  );
}

