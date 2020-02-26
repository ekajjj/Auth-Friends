import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <ul>
                    <li>
                        <Link to='/protected'>Friendlist</Link>
                    </li>
                </ul>
                <Switch>
                    <PrivateRoute exact path='/protected' component={FriendsList} />
                    <Route path='/login' component={Login} />
                    <Route component={Login} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;