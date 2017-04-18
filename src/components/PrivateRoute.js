import React, { Component } from 'react';
import BaseComponent from 'BaseComponent';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import * as loginActions from 'modules/login/LoginActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PrivateRoute extends BaseComponent {

  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
    //this.actions.hello()
  }

  componentWillReceiveProps(nextProps){
    let state = this.state;
    debugger;
    if (state.loading && nextProps.auth.user) {
      state.loading = false;
      //this.setState(state);
    }
  }

  render(){
    //let { fallback, props} = this.props;
   // if (this.isAuthenticated()){
      return (
        <Route {...this.props} />
      );
    /*} else {
     return (
          <Redirect to={{
            pathname: '/login',
            state: { from: this.props.location }
          }}/>
        )
    }*/
  }

  isAuthenticated() {
    if (this.props.auth.user) return true;
    return false;
  }
}
export default connect(
  state => { return { auth: state.auth }; },
  dispatch => { return { actions: bindActionCreators(loginActions, dispatch) }; }
)(PrivateRoute);
