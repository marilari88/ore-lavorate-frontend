import axios from "axios";

export default axios.create({
  baseURL: process.env.PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
