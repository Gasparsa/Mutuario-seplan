import React from 'react'
import { Switch, Route, Redirect} from 'react-router'
import SearchUser from '../template/SearchUser'
import SearchAll from '../template/SearchAll'
import Home from '../template/Home'
import UserRegister from '../user/userRegister'
import UserMode from '../template/UserMode'

export default props=>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/audit' component={SearchUser}/>
        <Route path = '/search' component={SearchAll}/>
        <Route path = '/register' component = {UserMode}/>
        <Redirect from='*' to= '/'></Redirect>
    </Switch>