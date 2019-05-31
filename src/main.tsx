import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './router/index';


if ((module as any).hot) {
  (module as any).hot.accept()
}

ReactDOM.render(<AppRouter />, document.getElementById('app'));

