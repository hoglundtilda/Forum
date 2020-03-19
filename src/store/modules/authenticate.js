const authenticate = {
  state: { userToken: "" },
  mutations: {
    loginUser(state, data) {
      localStorage.setItem("jwt", JSON.stringify(data));
      state.userToken = data;
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
            ctx.commit("loginUser", data.token);
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
