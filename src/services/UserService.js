import AuthHeader from "./AuthHeader";
import axios from "axios";

class UserDataService {
  constructor() {
    this.URL = process.env.REACT_APP_PUBLIC_API_URL;
  }

  async updateContrattoSelezionato(idContratto) {
    return await axios.put(
      this.URL + `/user/contratto`,
      { contrattoSelezionato: idContratto },
      AuthHeader()
    );
  }
}

export default new UserDataService();
