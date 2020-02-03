/**
 *
 * Main App Container
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './../Home'

export default function App () {
  return (
    <Router>
      <Switch>
        <Route
          component={HomePage}
          exact
          path="/"
        />
      </Switch>
    </Router>
  )
}
