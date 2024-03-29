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
    return await axios.post(this.URL + `/contratti`, data, AuthHeader());
  }

  async update(id, data) {
    return await axios.put(this.URL + `/contratti/${id}`, data, AuthHeader());
  }

  async delete(id) {
    return await axios.delete(this.URL + `/contratti/${id}`, AuthHeader());
  }
}

export default new ContrattoDataService();
