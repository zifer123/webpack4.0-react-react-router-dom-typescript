import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'; // 热加载
import App from '../App';
import Home from '../component/Home';
import About from '../component/About';

class AppRouter extends Component {
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
export default hot(AppRouter); // 热加载特性， 打包不需要
