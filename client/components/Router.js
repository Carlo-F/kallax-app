import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from 'Components/FrontPage'
import BookView from 'Components/BookView'
import SingleBook from 'Components/SingleBook'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/book" component={BookView} />
      <Route path="/book/:id" component={SingleBook} />
    </Switch>
  </div>
)
