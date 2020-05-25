import Vue from "vue";
import Vuex from "vuex";
import authenticate from "./modules/authenticate";
import categories from "./modules/getCategories";
import topics from "./modules/getTopics";
import forumPosts from "./modules/forumPosts";
import display from "./modules/display"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    checkAuthenticate: authenticate,
    getCategories: categories,
    getTopics: topics,
    postInForum: forumPosts,
    display
  }
});
