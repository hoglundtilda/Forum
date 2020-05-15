const authenticate = {
  state: { user_id: "" },
  mutations: {
    loginUser(state, data) {
      console.log(data);
      localStorage.setItem("user_id", data);
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
            console.log(data);
            ctx.commit("loginUser", data.user._id);
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
