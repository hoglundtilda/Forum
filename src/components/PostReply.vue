<template>
  <div class="post-reply">
    <h3>Reply to this Topic</h3>
    <textarea v-model="content" type="text" name="description" autocomplete="off" />

    <button @click="postReply" class="btn">Post Reply</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      content: ""
    };
  },
  computed: {
    topic_id() {
      return this.$store.state.topicReplies.topic._id;
    }
  },
  methods: {
    postReply() {
      const post = {
        topic_id: this.topic_id,
        content: this.content,
        created_at: new Date(),
        user_id: localStorage.getItem("user_id")
      };
      this.$store.dispatch("postReply", post);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/form.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";
@import "../assets/scss/button.scss";

.post-reply {
  display: flex;
  flex-direction: column;
  background: $dark;
  padding: 2rem;
  border-radius: 5px;

  input {
    color: $grey;
    background: $black;
    border-radius: 5px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 40px $black inset !important;
    -webkit-text-fill-color: $grey !important;
  }

  ::placeholder {
    font-family: "Ubuntu";
    font-size: 1rem;
    color: $grey;
    opacity: 0.7;
  }

  textarea {
    height: 12rem;
    background: $black;
    color: $grey;
    border-radius: 5px;
    font-family: "Ubuntu";
    font-size: 1rem;
    border: none;
  }

  .btn {
    padding: 10px;
    margin: 1rem 0;
    align-self: flex-end;
  }
}
</style>