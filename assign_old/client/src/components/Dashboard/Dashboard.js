import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import Settings from './unset/Settings';
import Projects from './Projects/Projects';
import Notifications from './unset/Notifications';
import Collaborate from './Collaborate/Collaborate';

const Dashboard = props => {
  return (
    <div className="flex">
      <Navbar />
      <div style={{ flex: 2 }} className="flex">
        <Switch>
          <Route exact path="/dashboard/" component={Home} />
          <Route path="/dashboard/projects" component={Projects} />
          <Route exact path="/dashboard/collaborate" component={Collaborate} />
          <Route
            exact
            path="/dashboard/notifications"
            component={Notifications}
          />
          <Route exact path="/dashboard/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
