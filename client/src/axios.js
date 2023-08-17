import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-d5dd5/us-central1/api",
  // baseURL: "http://127.0.0.1:7000",
  baseURL: "https://amazonclone-8ym9.onrender.com",
});

export default instance;
