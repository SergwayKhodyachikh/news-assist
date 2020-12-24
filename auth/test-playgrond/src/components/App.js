import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';

class App extends Component {
  
  renderButton() {
    if (this.props.auth)
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    else
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post A Comment</Link>
        </li>
        <li>
          <Link to="">{this.renderButton()}</Link>
        </li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/posts" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { changeAuth }
)(App);
