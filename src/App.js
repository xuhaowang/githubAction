import React, { Component } from 'react';
import { createBrowserHistory, createHashHistory } from 'history';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedHashRouter } from 'react-router-redux';
import { createRoutes } from 'routes';
import configureStore from 'store';
import 'normalize.css';
import 'github-markdown-css';
import 'antd/dist/antd.css';
import 'App.css';


export const history = createHashHistory();
export const store = configureStore(history, {});
const routes = createRoutes(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter history={history}>
          <div className="app-container">
            {routes.map(r => 
              <Route key={r.path} {...r} />
            )}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
