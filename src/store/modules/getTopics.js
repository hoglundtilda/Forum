const topics = {
  state: { category: {}, topics: {} },
  mutations: {
    clearState(state) {
      state.category = {};
    },
    category(state, data) {
      console.log(data);

      state.category = data;
    },
    topics(state, data) {
      state.topics = data;
    },
  },
  actions: {
    async getCategory(ctx, category_id) {
      ctx.commit("clearState");

      const url = "http://localhost:3005/forumContent/categoryTopics";
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

      const url = "http://localhost:3005/forumContent/getTopicsByCategory";
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
            console.log(data);
            ctx.commit("topic", data.category);
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
