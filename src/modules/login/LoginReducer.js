import { LOGIN_ACTIONS } from './LoginActions';
import loginService from './LoginServices'

const initialState = {
  token: null,
  user: {},
  user_id : null
};

const ACTIONS = {
  [LOGIN_ACTIONS.login] : (state, action) => {
    debugger;
    let email = action.payload.email;
    let password = action.payload.password;
    loginService.login(email, password)
    .then((data)=>{
      debugger;
     action.asyncDispatch({ type: LOGIN_ACTIONS.token, payload: { token:data.token, user_id: data.user.id } })
    })
    .catch((err) => {

    });
    return state;
  },

  [LOGIN_ACTIONS.hello] : (state, action) => {

    console.log('hello');
    loginService.hello()
    .then((data)=>{
      action.asyncDispatch({ type: LOGIN_ACTIONS.token, payload: { token:data.token, user: data.user } })
    })
    .catch((err) => {

    });

    return state;
  },

  [LOGIN_ACTIONS.setUser] : (state, action) => {
    const user_id  = action.payload.user_id;
    //loginService.setToken(token);
    let newState = Object.assign({}, state, { user_id });
    return newState;
  },

  [LOGIN_ACTIONS.token] : (state, action) => {
    const token = action.payload.token;
    const user  = action.payload.user;
    loginService.setToken(token);
    let newState = Object.assign({}, state, { token, user});
    return newState;
  }

}

const LoginReducer = (state = initialState, action) => {
  const fn = ACTIONS[action.type];
  return fn ? fn(state, action) : state;
}

export default LoginReducer;
