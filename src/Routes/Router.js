import React, { Component } from 'react';
import './Router.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePageContainer from '../containers/HomePageContainer/HomePageContainer'
import GenericNotFound from '../components/GenericNotFound/GenericNotFound.js'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route path="/home" component={HomePageContainer} />
        {/* TODO: [DC] <Route path="/profile" component={Profile} /> */}
        {/* TODO: [DC] <Route path="/destination" component={Destination} /> */}
        <Route component={GenericNotFound}/>
      </Switch>
    );
  }
}

export default Routes;
