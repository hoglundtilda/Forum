const postNewTopic = {
  state: {},
  mutations: {
    clearState(state) {
      state.category = {};
    },
  },
  actions: {
    async postNewTopic(ctx, post) {
      const url = "http://localhost:3005/topics/postTopic";
      console.log(post);
      fetch(url, {
        method: "POST",
        body: JSON.stringify(post),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            console.log(data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  modules: {},
};

export default postNewTopic;
