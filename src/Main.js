import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
    </Switch>
  );
}

export default Main;