import axios from "axios";
import {state} from "../store";
import qs from 'qs'
const instance =axios.create({
  baseURL: process.env.API,
  timeout: 5000
});

instance.interceptors.request.use(
  function (config){
    return config;
  },
  function (err){
    return Promise.reject(err);
  }
)

export function get(url, params){
  return axios.get(url, {
    params
  });
}
