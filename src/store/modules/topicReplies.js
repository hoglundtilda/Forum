const topicReplies = {
  state: { topic: {}, replies: {} },
  mutations: {
    topic(state, data) {
      state.topic = data;
      this.state.display.showTopic = true;
    },
    replies(state, data) {
      state.replies = data;
    },
    replyPosted(state, data) {
      this.state.display.postReply = false;
      this.state.display.showTopic = true;
    },
  },
  actions: {
    async getTopic(ctx, id) {
      const url = "http://localhost:3005/topics/getTopic";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", topic_id: id },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            ctx.commit("topic", data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async getTopicReplies(ctx, id) {
      const url = "http://localhost:3005/topics/getTopicReplies";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", topic_id: id },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            ctx.commit("replies", data);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async postReply(ctx, post) {
      console.log("here");
      const url = "http://localhost:3005/topics/postReply";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            ctx.commit("replyPosted")
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  modules: {},
};

export default topicReplies;
