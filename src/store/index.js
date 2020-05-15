import Vue from "vue";
import Vuex from "vuex";
import authenticate from "./modules/authenticate";
import categories from "./modules/getCategories";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    checkAuthenticate: authenticate,
    getCategories: categories
  }
});
