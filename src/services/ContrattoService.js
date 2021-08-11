import axios from "axios";
import AuthHeader from "./AuthHeader";

class ContrattoDataService {
  constructor() {
    this.URL = process.env.REACT_APP_PUBLIC_API_URL;
  }

  async getAll() {
    return await axios.get(this.URL + `/contratti`, AuthHeader());
  }

  async get(id) {
    return await axios.get(this.URL + `/contratti/${id}`, AuthHeader());
  }

  async create(data) {
    try {
      return await axios.post(this.URL + `/contratti`, data, AuthHeader());
    } catch (err) {
      console.error(err);
    }
  }

  async update(id, data) {
    return await axios.put(this.URL + `/contratti/${id}`, data, AuthHeader());
  }
}

export default new ContrattoDataService();
