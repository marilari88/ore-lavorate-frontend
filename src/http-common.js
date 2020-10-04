import axios from "axios";

let headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const token = localStorage.getItem("auth-token");
if (token) headers.Authorization = `Bearer ${token}`;

export default axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_URL,
  headers,
});
