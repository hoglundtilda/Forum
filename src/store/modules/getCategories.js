const categories = {
  state: { categories: [] },
  mutations: {
    clearState(state) {
      state.categories = [];
    },
    renderCategories(state, data) {
      state.categories = data;
    }
  },
  actions: {
    async fetchCategories(ctx) {
      ctx.commit("clearState");
      const url = "http://localhost:3005/forumContent/getCategories";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("renderCategories", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {}
};

export default categories;
