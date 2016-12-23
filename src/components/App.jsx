import React from 'react';

import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

import '../styles/App.css';

const PARTS = require('../helpers/parts.json');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateInfo = this.updateInfo.bind(this);
    this.state = {
      parts: PARTS.parts,
      clickedPart: {},
    };
  }

  updateInfo(className) {
    const clickedPart = this.state.parts.find(part => part.className === className);
    this.setState({ clickedPart });
  }

  render() {
    return (
      <div>
        <LeftColumn clickedPart={this.state.clickedPart} />
        <RightColumn parts={this.state.parts} updateInfo={this.updateInfo} />
      </div>
    );
  }
}
