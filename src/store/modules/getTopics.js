const topics = {
  state: { category: {} },
  mutations: {
    clearState(state) {
      state.category = {};
    },

    renderTopics(state, data) {
      state.category = data;
    }
  },
  actions: {
    async fetchCategoryTopics(ctx, categoryId) {
      ctx.commit("clearState");
      const url = "http://localhost:3005/forumContent/categoryTopics";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(categoryId),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("renderTopics", data.category);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {}
};

export default topics;
