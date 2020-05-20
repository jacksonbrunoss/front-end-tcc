import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: false,
    user: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      estado: "",
      cep: "",
      cidade: "",
      rua: "",
      bairro: "",
      numero: "",
      telefone: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = payload
    }
  },
  actions: {
    getUsers(context, payload) {
      api.get(`/users/${payload}`).then( res => {
        context.commit("UPDATE_USER", res.data);
        context.commit("UPDATE_LOGIN", true);
      })
    }
  },
  modules: {},
});
