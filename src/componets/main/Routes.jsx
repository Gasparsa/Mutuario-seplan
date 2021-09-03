import React from 'react'
import { Switch, Route, Redirect} from 'react-router'
import SearchUser from '../pages/SearchUser'
import SearchAll from '../pages/searchAll/SearchAll'
import Home from '../templates/home/Home'

import UserMode from '../pages/UserMode'
import SingIn from '../user/userSingIn.jsx'

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
export default props=>
    
        <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute path='/audit' component={SearchUser}/>
            <Route path = '/search' component={SearchAll}/>
            <Route path = '/register' component = {UserMode}/>
            <Route path = '/login' component = {SingIn}/>
            <Redirect from='*' to= '/'></Redirect>
        </Switch>
    