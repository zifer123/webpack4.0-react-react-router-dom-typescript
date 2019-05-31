import React, { Component } from 'react';
import {Route, Link, RouteComponentProps } from "react-router-dom";

const Home1 = (({ match }: RouteComponentProps) => {
  console.log(match);
  return (
    <div>Home1</div>
  )
});

export default class Home extends Component {
  render(): React.ReactNode {
    return (
      <div>
        Home页
        <ul>
          <li>
            <Link to="/home/1">子路由：Home1</Link>
          </li>
        </ul>
        <hr />
        <Route path="/home/:id" component={Home1} />
      </div>
    );
  }
}
