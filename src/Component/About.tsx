import React, { Component } from 'react';

export default class About extends Component {
  render(): React.ReactNode {
    console.log(this.props);
    return <div>关于React</div>;
  }
}
