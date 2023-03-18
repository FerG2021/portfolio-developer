import { createStore } from "vuex";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
import { NULL } from "sass";

// usado para login
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8000"
export default createStore({
  state: {
    idioma: {
      name: "Español",
      code: "ES",
      bandera: "/espana.png",
    },
  },

  mutations: {},

  actions: {},

  modules: {},
});
