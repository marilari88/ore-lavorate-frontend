import http from "../http-common";

class TimbraturaDataService {
  getLast() {
    return http.get("/timbrature/?limit=1&order=desc");
  }

  getAll() {
    return http.get("/timbrature");
  }

  get(id) {
    return http.get(`/timbrature/${id}`);
  }

  create(data) {
    return http.post("/timbrature", data);
  }

  update(id, data) {
    return http.put(`/timbrature/${id}`, data);
  }

  delete(id) {
    return http.delete(`/timbrature/${id}`);
  }
}

export default new TimbraturaDataService();
