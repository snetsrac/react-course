import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import { StreamList, StreamCreate, StreamShow, StreamEdit, StreamDelete } from './streams';

const App = () => {
  return (
      <Router history={history}>
        <Header />
        <div className="ui container" style={{ marginTop: '7rem' }}>
          <Switch>
            <Route path="/streams/create" component={StreamCreate} />
            <Route path="/streams/:id/edit" component={StreamEdit} />
            <Route path="/streams/:id/delete" component={StreamDelete} />
            <Route path="/streams/:id" component={StreamShow} />
            <Route path="/streams" component={() => <Redirect to="/" />} />
            <Route path="/" component={StreamList} />
          </Switch>
        </div> 
      </Router>
  );
};

export default App;
