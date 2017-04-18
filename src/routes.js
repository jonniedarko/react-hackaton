import React, { Component } from 'react';
import BaseComponent from 'BaseComponent';
import PrivateRoute from 'components/PrivateRoute';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

import DashBoardView from 'views/dashboard/dashboard.view';
import SettingsView from 'views/settings/settings.view';

import LoginView from 'modules/login/LoginView';
import * as loginActions from 'modules/login/LoginActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Routes extends BaseComponent {

  constructor(props){
    super(props);
    /*debugger;
    this.state = {
      loading: true
    }
    if (this.props.auth.user){
      this.state.user = this.props.auth.user;
    }
    this.actions.hello()*/
  }
  /*componentWillReceiveProps(nextProps){
    if (this.state.loading && nextProps.auth.user) {
      this.state.loading = false;
    }
  }*/

  render() {
   /* const state = this.state;
    if(!state.loading) {*/
      //console.log('User', this.state.user);
      return (
          <HashRouter>
              <Switch>

                <PrivateRoute exact path="/" component={DashBoardView} />
                <PrivateRoute path="/settings" component={SettingsView} />
                <Route path="/login" component={LoginView} />
              </Switch>
            </HashRouter>
      );
    /*} else {
      return (
        <div>Loading...</div>
      )
    }*/
  }
}
export default connect(
  state => { return { auth: state.auth }; },
  dispatch => { return { actions: bindActionCreators(loginActions, dispatch) }; }
)(Routes);
