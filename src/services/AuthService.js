import axios from "axios";
import AuthHeader from "./AuthHeader";

class AuthService {
  constructor() {
    this.URL = process.env.REACT_APP_PUBLIC_API_URL;
  }

  async checkToken() {
    const token = localStorage.getItem("auth-token");
    if (token) {
      return await axios.get(this.URL + "/user/checktoken", AuthHeader());
    } else {
      return;
    }
  }

  async registerUser(user) {
    return await axios.post(this.URL + "/user/register", user);
  }

  async loginUser(user) {
    return await axios.post(this.URL + "/user/login", user);
  }

  async loginGoogleUser(tokenId) {
    const data = {
      tokenid: tokenId,
    };
    return await axios.post(this.URL + "/user/googlelogin", data);
  }
}
export default new AuthService();
