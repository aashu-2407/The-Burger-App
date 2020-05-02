import React, { Component } from 'react';
import Layout from '../components/Layouts/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from '../containers/Checkout/Checkout';
import Orders from '../containers/Orders/Orders';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/"  exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );

  }
}

export default App;
