import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import FrontPage from 'Components/FrontPage'
import BookView from 'Components/BookView'
import SingleBook from 'Components/SingleBook'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/books">
        {localStorage.getItem('loggedKallaxUser') ? <Route path="/books" component={BookView}/> : <Redirect to="/" component={FrontPage}/>}
      </Route>
      <Route path="/book/:id">
        {localStorage.getItem('loggedKallaxUser') ? <Route path="/book/:id" component={SingleBook}/> : <Redirect to="/" component={FrontPage}/>}
      </Route>
    </Switch>
  </div>
)
