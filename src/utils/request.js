import axios from "axios";
const request = axios.create({
  vaseURl: "http://liufusong.top:8080",
  timeout: 3000,
});

export default request;
