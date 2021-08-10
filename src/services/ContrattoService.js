import AuthHeader from "./AuthService";
import axios from "axios";

class ContrattoDataService {
  constructor() {
    this.URL = process.env.REACT_APP_PUBLIC_API_URL;
  }

  async getAll() {
    try {
      const response = await axios.get(this.URL + `/contratti`, AuthHeader());
      return response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async get(id) {
    return await axios.get(this.URL + `/contratti/${id}`, AuthHeader());
  }

  async create(data) {
    return await axios.post(this.URL + `/contratti`, data, AuthHeader());
  }

  async update(id, data) {
    return await axios.put(this.URL + `/contratti/${id}`, data, AuthHeader());
  }
}
export default new ContrattoDataService();
