import React from 'react';
import BaseComponent from 'BaseComponent';
import { Link } from 'react-router-dom';

export default class SettingsView extends BaseComponent {
  render() {
    return (
      <div>Hello from SettingsView <br /><Link to="/">Go To Dashboard</Link></div>
    )
  }
}
