import React from 'react';
import Header from './components/layout/Header';
import GenderList from './containers/GenderList';
import Home from './containers/Home';
import NameRegistration from './containers/NameRegistration';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = props => {
  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <NavBar />
        <Header />
        <Switch>
          <Route path="/nameregistration" component={NameRegistration} />
          <Route path="/namecheck" component={GenderList} />
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
