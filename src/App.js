import React, { Component, Fragment} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar.js'
import MarketingPage from './components/MarketingPage';
import Home from './components/Home.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import './App.scss';

const App = (props) => {
    return (
      <MuiThemeProvider>
        <Fragment>
        {/* <AppBar className='appbar'>
          <Toolbar className='toolbar'>
            <Typography variant="h3" className='mui-typography'>
             V-Spot
            </Typography>
            <div className='home-buttons'>
              <Button color="inherit" size='large' className='home-button'>Login</Button>
              <Button color="inherit" size='large' className='home-button'>Signup</Button>
            </div>
          </Toolbar>
        </AppBar> */}
          <BrowserRouter>
          <NavBar />
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
