import axios from 'axios';

class AuthService { 
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  signup(user) {
    const { username, email, password } = user;
    return this.auth.post('/auth/signup', {username, email, password})
      .then(({ data }) => {
        console.log(data)
        return data
      });
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  getCurrentUser() {
    return this.auth.get('/auth/me')
    .then(response => {
      return response.data
    })
  }

}

const authService = new AuthService();

export default authService;