import http from "../http-common";

class TimbraturaDataService {
  getLast() {
    return http.get("/timbrature/?limit=1&order=-1");
  }

  async getAll() {
    return await http.get("/timbrature");
  }

  get(id) {
    return http.get(`/timbrature/${id}`);
  }

  async create(data) {
    return await http.post("/timbrature", data);
  }

  update(id, data) {
    return http.put(`/timbrature/${id}`, data);
  }

  delete(id) {
    return http.delete(`/timbrature/${id}`);
  }
}

export default new TimbraturaDataService();
