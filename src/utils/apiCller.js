import axios from "axios";
import * as Config from "../constants/Config";

export default function apiCaller(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endpoint}`,
    data: null,
  }).catch((err) => {
    console.log("err", err);
  });
}
