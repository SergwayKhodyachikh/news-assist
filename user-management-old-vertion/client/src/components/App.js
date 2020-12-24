import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Particles from 'react-particles-js';
import particlesParams from '../particlesParams';
import Header from './layout/Header';
import Users from './users/UserList';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import UserDelete from './users/UserDelete';
import PostCreate from './users/posts/PostCreate';
import TaskCreate from './users/tasks/TaskCreate';
import TaskEdit from './users/tasks/TaskEdit';
import TaskDelete from './users/tasks/TaskDelete';
import PostEdit from './users/posts/PostEdit';
import PostDelete from './users/posts/PostDelete';
import './App.css';

const App = () => {
  return (
    <Router history={history}>
      <Particles
        className="particles"
        width={'100vw'}
        height={'100vh'}
        params={particlesParams}
      />
      <Header />
      <div className="content container">
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/users/new" component={UserCreate} />
          <Route path="/users/:id/edit" component={UserEdit} />
          <Route path="/users/:id/delete" component={UserDelete} />
          <Route path="/users/:id/tasks/new" component={TaskCreate} />
          <Route path="/users/:id/tasks/:taskId/edit" component={TaskEdit} />
          <Route
            path="/users/:id/tasks/:taskId/delete"
            component={TaskDelete}
          />
          <Route path="/users/:id/posts/new" component={PostCreate} />
          <Route path="/users/:id/posts/:postId/edit" component={PostEdit} />
          <Route
            path="/users/:id/posts/:postId/delete"
            component={PostDelete}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
