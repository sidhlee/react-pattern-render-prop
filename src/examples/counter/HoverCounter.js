import React, { Component } from 'react';

export class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseEnter={incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
