import React from 'react';
import LandingPage from './Components/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route path="/"><LandingPage /></Route>
            </Switch>
        </Router>
    )
}

export default Main;