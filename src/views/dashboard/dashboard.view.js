import React from 'react';
import BaseComponent from 'BaseComponent';
import { Link } from 'react-router-dom';
import { SimulatorForm } from '../simulator/form';

export default class DashBoardView extends BaseComponent {
  constructor(props){
    super(props);
    debugger;
    //this.state = this.setupState();
    //this.actions.hello();
    //this.props.dispatch(LOGIN_ACTIONS.hello)
  }
  render() {
    return (
      <div>
        <Link to="/settings">Settings</Link>
        <SimulatorForm />
      </div>

    )
  }
}
