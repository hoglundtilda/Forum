const topics = {
  state: { category: {} },
  mutations: {
    clearState(state) {
      state.category = {};
    },

    renderTopics(state, data) {
      state.category = data;
    },
  },
  actions: {
    async fetchCategoryTopics(ctx, category_id) {
      ctx.commit("clearState");
      const url = "http://localhost:3005/forumContent/getTopicsByCategory";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", id: category_id },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            ctx.commit("renderTopics", data.category);
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
