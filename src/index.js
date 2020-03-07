import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import "./App.css";

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
