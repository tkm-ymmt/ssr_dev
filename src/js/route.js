import React from 'react'
import { Route, IndexRoute } from 'react-router'
import app from './app'
import App from './components/App'
import About from './components/About'
import Repos from './components/Repos'

module.exports = (
    <Route path="/" component={app}>
      <IndexRoute component={App}/>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos} />
    </Route>
)