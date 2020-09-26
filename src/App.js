import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store/store";
import Layout from './utility/Layout';
import HomeContainer from './containers/Home/Home';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    </Provider>
    );
  }
}

export default App;
