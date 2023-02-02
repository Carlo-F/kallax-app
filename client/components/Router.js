import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from 'Components/FrontPage'
import BookView from 'Components/BookView'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/book" component={BookView} />
    </Switch>
  </div>
)
