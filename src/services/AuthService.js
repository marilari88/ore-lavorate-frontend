import http from "../http-common";

class AuthService {
  async checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      return await http.get("/user/checktoken");
    }
  }
}

export default new AuthService();
