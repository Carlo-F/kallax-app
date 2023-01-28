import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from 'Components/FrontPage'
import TodoView from 'Components/TodoView'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/todo" component={TodoView} />
    </Switch>
  </div>
)
