import React from 'react';
import { bindActionCreators } from 'redux'
import BaseComponent from 'BaseComponent';
import * as loginActions from './LoginActions';
import { connect } from 'react-redux'

const LOGIN_ACTIONS = loginActions.LOGIN_ACTIONS

class LoginView  extends React.Component {
  state ={
    fields : {
      email: '',
      password:'',
    },
  };
  constructor(props){
    debugger;
    super(props);

    //this.props = props;
    //this.setupState.bind(this);
    //this.render = this.render.bind(this);
   // this.onInputChange = this.onInputChange.bind(this);

    this.submitForm = this.submitForm.bind(this);


  }

  onInputChange(evt) {
    evt.preventDefault();
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;

      this.setState({fields : fields}, ()=> {
        console.log(this.state);
      });

     // this.state.fields = fields;
  }

  submitForm(evt){
    evt.preventDefault();
    console.log(this.state);

    //this.actions.login(this.state.fields.email, this.state.fields.password);
  }


  render() {

		return (
			<div>

					<h1>Login</h1>
					<form onSubmit={this.submitForm}>
						<label>Username</label>
            <input type='text' placeholder='Email'
              name='email'
              value={this.state.fields.email}
              onChange={this.onInputChange.bind(this)} />
            <br />
						<label>Password</label><input type='password'name='password' value={this.state.fields.password} onChange={this.onInputChange.bind(this)}/>
            <br />
            <input type="submit" />
					</form>
			</div>
		)
	}
}
export default connect(
  state => { return { auth: state.auth }; },
  dispatch => { return { actions: bindActionCreators(loginActions, dispatch) }; }
)(LoginView);
