import React from 'react';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: {},
    };
  }

  render() {
    return (
      <div>
        <LeftColumn />
        <RightColumn />
      </div>
    );
  }
}
