import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challlenge-6b3bd/us-central1/api",
});

export default instance;
