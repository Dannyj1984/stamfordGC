import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./app/layout/App";

export const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
      <Router history={history}>
            <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
);