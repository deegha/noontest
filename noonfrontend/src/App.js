import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configureStore from './store/configureStore'; 
import { Provider } from 'react-redux';  

import MainPage  from './pages/mainpage/mainPage'
import FavouritePage from './pages/favouritepage/favouritePage'
import Menu      from   './components/menu/menu'

import './App.css'

const store = configureStore();

export default class App extends Component {
  render(){
   return (
   <Provider store={store}>
    <BrowserRouter>
      <div>    
        <div className="mainContaiiner">
        <Switch >
          <Route path="/"  component={ MainPage } exact={true} />
          <Route path="/favourite"  component={ FavouritePage } exact={true} />
          <Route path="*"  component={()=>{return(<div>Not found</div>)}}/>
        </Switch>
        </div>
        <div className="menu">
            <Menu></Menu>
        </div>
      </div>
    </BrowserRouter>
  </Provider>);
  }
}
