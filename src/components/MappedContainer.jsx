import React, { PropTypes } from 'react';
import Image from './Image';
import Button from './Button';

import '../styles/MappedContainer.css';

export default function MappedContainer(props) {
  return (
    <div className="MappedContainer">
      <Image
        source="http://cdn.velonews.com/wp-content/uploads/2010/06/Specialized-1.5.jpg"
        alt="Specialized Roubaix"
      />

      {props.parts.map(part =>
        <Button
          name={part.name}
          className={part.className}
          top={part.top}
          left={part.left}
        />,
      )}
    </div>
  );
}

MappedContainer.propTypes = {
  parts: PropTypes.arrayOf(React.PropTypes.obj),
};
