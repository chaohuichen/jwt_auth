import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import {Home} from './pages/Home'
import {Login }from './pages/Login'
import {Register} from './pages/Register'

function Routes() {
    return(
    <BrowserRouter>
        <div>
            <header>
            <div>
                <Link to="/register">register</Link>
            </div>
            <div>
                <Link to="/login">login</Link>
            </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </header>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
        </Switch>
        </div>
    </BrowserRouter>)
}

export default Routes;
