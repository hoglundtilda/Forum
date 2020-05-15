const categories = {
  state: { categories: [] },
  mutations: {
    clearState(state) {
      state.categories = [];
    },
    addCategories(state, data) {
      state.categories = data;
    }
  },
  actions: {
    async fetchCategories(ctx) {
      ctx.commit("clearState");
      const url = "http://localhost:3005/admin/categories";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("addCategories", data);
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
