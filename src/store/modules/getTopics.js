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
      console.log(category_id + "fuuck");
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
