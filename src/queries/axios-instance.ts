import axios from "axios";

const url = process.env.API;

const instance = axios.create({
  baseURL: url,
});

export default instance;

