import ApiService from 'services/ApiService';

class LoginService extends ApiService {
  async login(email, password){
    try {
      const response = await this.post('login', {'email' : email, password: password})
      const data = response.data;
      return { error: null, loggedIn: true, user_id: data.user ? data.user.id: null/*this.hasToken(data)*/}
    } catch(e){
      return { error: e, loggedIn: false}
    }
  }
 

}
let loginService =  new LoginService();
export default loginService;
