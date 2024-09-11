import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
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
      <Routes>
        <Route path="/tests" element={<Tests />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="*" />} />
      </Routes>
    </Router>
  )
}

// Используем ReactDOM.createRoot для версии React 18 и выше
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
