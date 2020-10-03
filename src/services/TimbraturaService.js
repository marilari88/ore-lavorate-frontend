import http from "../http-common";

class TimbraturaDataService {
  async getLast() {
    return await http.get("/timbrature/?limit=1&order=-1");
  }

  async getAll() {
    return await http.get("/timbrature");
  }

  async get(id) {
    return await http.get(`/timbrature/${id}`);
  }

  async create(data) {
    return await http.post("/timbrature", data);
  }

  async update(id, data) {
    return await http.put(`/timbrature/${id}`, data);
  }

  async delete(id) {
    return await http.delete(`/timbrature/${id}`);
  }
}

export default new TimbraturaDataService();
