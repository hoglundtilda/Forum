const authenticate = {
  state: { user_id: "" },
  mutations: {
    loginUser(state, data) {
      localStorage.setItem("user_id", data.user._id);
      localStorage.setItem("user", JSON.stringify(data.user))
      state.user_id = data;
    }
  },
  actions: {
    async authenticateUser(ctx, credentials) {
      const url = "http://localhost:3005/auth/login";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.dispatch("redirect", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    async redirect(ctx, data) {
      const url = "http://localhost:3005/auth/user";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", token: data.token }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            ctx.commit("loginUser", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  },
  modules: {}
};

export default authenticate;
