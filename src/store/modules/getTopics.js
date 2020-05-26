import store from "..";

const topics = {
  state: { category: {}, topics: {} },
  mutations: {
    clearState(state) {
      state.category = {};
    },
    category(state, data) {
      state.category = data;
    },
    topics(state, data) {
      state.topics = data;
      store.state.display.showTopic = false;
      store.state.display.profile = false;
      store.state.display.discussion = true;
      store.state.display.showCategory = true;
    },
  },
  actions: {
    async getCategory(ctx, category_id) {
      ctx.commit("clearState");

      const url = "http://localhost:3005/categories/getCategory";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          category_id: category_id,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            ctx.commit("category", data.category);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async getTopics(ctx, category_id) {
      ctx.commit("clearState");
      const url = "http://localhost:3005/categories/getTopicsByCategory";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          category_id: category_id,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            ctx.commit("topics", data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  modules: {},
};

export default topics;
