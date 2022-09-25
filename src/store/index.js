import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters.js'
import qs from 'qs'
Vue.use(Vuex)

/** 状态定义 */
export const state = {
  // loading: false,
  // themeObj: 0,//主题
  // keywords:'',//关键词
  // errorImg: 'this.onerror=null;this.src="' + require('../../static/img/tou.jpg') + '"',
  baseURL: 'http://localhost:8085/',
  refresh: 1,
  // id = 1
  // token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlYzE4MGVlMGE2ZjM0MjcyYmVmM2MyM2RhMTg3NDY4MiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2Mzk0OTY3MywiZXhwIjoxNzUwMzQ5NjczfQ.W8wfvH2YNfIIEuaVFu_hFDPC2zpVD_9H32kTSOa8cQE"
  // id = 3
  token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MWQwMmZiMWFhY2M0YmQ3OGVjZDkzZjVhMmEzOTU0ZiIsInN1YiI6IjMiLCJpc3MiOiJzZyIsImlhdCI6MTY2NDAwNTc4MiwiZXhwIjoxNzUwNDA1NzgyfQ.g0HYFZXZMJbEzLxQJwhIbp1Ur7Fv4nnfHIK7Pu6EQPw"

}

export default new Vuex.Store({
    state,
})
