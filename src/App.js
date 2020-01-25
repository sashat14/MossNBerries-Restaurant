import React, { Component, Fragment} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MarketingPage from './components/MarketingPage';
import Home from './components/Home.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './App.scss';

const App = () => {
    return (
      <MuiThemeProvider>
        <Fragment>
        <AppBar title="The V-Spot"/>
          <BrowserRouter>
          <Switch>
          <Route exact path='/market' component={MarketingPage} />
          <Route exact path='/' component={Home} />   
          </Switch>
          </BrowserRouter>
        </Fragment>
      </MuiThemeProvider>
    );
}

export default App;
