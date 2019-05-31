import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <header>aaa</header>
        <main>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </main>
      </div>
    );
  }
}
