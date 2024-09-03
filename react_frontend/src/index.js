import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Tests from './views/tests'
import Lessons from './views/lessons'
import SignIn from './views/sign-in'
import Exercises from './views/exercises'
import Home from './views/home'
import About from './views/about'
import SignUp from './views/sign-up'
import Exercise from './views/exercise'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Tests} exact path="/tests" />
        <Route component={Lessons} exact path="/lessons" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={Exercises} exact path="/exercises" />
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={Exercise} exact path="/exercise" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
