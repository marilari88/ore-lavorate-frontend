import http from "../http-common";

class AuthService {
  async checkToken() {
    const token = localStorage.getItem("auth-token");
    if (token) {
      return await http.get("/user/checktoken");
    } else {
      return;
    }
  }

  async registerUser(user) {
    return await http.post("/user/register", user);
  }

  async loginUser(user) {
    return await http.post("user/login", user);
  }
}

export default new AuthService();
