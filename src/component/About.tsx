import React, { Component } from 'react';
import { RouteComponentProps } from "react-router";
import styles from '../baseStyles/index.scss';

interface ComponentState {
  count: number;
}
export default class About extends Component<RouteComponentProps, ComponentState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  private handleClick_addCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  private handleClick_reduceCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  render(): React.ReactNode {
    return (
      <div>
        <p className={styles.test}>关于detected</p>
        <p>计数：{ this.state.count }</p>
        <p>
          <button onClick={this.handleClick_addCount.bind(this)}>增加</button>
          <button onClick={this.handleClick_reduceCount.bind(this)}>减少</button>
        </p>
      </div>
    );
  }
}
