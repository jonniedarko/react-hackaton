export const LOGIN_ACTIONS = {
  login: 'action:login-login',
  hello: 'action:login-hello',
  logout: 'action:login-logout',
  token: 'action:login-token',
  setUser: 'action:login-set-user'
};

export function login(email, password){
  return {
    type: LOGIN_ACTIONS.login,
    payload: {
      email,
      password
    }
  }
}

export function hello(){
  return {
    type: LOGIN_ACTIONS.hello
  }
}
