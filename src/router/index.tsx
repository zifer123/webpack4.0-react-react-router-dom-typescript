import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../App';
import Home from '../Component/Home';
import About from '../Component/About';

export default class AppRouter extends Component {
  render(): React.ReactNode {
    return (
      <HashRouter>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    );
  }
}
