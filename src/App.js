import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/layout/Header';
import ArticalListPuller from './containers/ArticleListPuller';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ArticalListPuller />
      </div>
    );
  }
}

export default App;
