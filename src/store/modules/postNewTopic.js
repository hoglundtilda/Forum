import store from "..";

const postNewTopic = {
  state: {},
  mutations: {
    clearState(state) {
      state.category = {};
    },
   topicPosted(state, data) {
      store.display.postTopic = false;
      store.display.showTopic = true;
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
          if (data) {
           ctx.commit("topicPosted")
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
