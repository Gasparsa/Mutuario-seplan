import React from 'react'
import { Switch, Route, Redirect} from 'react-router'
import SearchUser from '../template/SearchUser'
import SearchAll from '../template/SearchAll'
import Home from '../template/Home'
import UserRegister from '../user/userRegister'
import UserMode from '../template/UserMode'
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
    