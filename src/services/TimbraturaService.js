import AuthHeader from "./AuthHeader";
import axios from "axios";
class TimbraturaDataService {
  constructor() {
    this.URL = process.env.REACT_APP_PUBLIC_API_URL;
  }

  async getLast() {
    return await axios.get(
      this.URL + "/timbrature/?limit=1&order=-1",
      AuthHeader()
    );
  }

  async getAll() {
    return await axios.get(this.URL + "/timbrature/?order=-1", AuthHeader());
  }

  async get(id) {
    return await axios.get(this.URL + `/timbrature/${id}`, AuthHeader());
  }

  async create(data) {
    return await axios.post(this.URL + "/timbrature", data, AuthHeader());
  }

  async update(id, data) {
    return await axios.put(this.URL + `/timbrature/${id}`, data, AuthHeader());
  }

  async delete(id) {
    return await axios.delete(this.URL + `/timbrature/${id}`, AuthHeader());
  }
}

export default new TimbraturaDataService();
