<template>
  <div class="category">
    <h3>Post new Topic</h3>
    <input v-model="topic.title" type="text" name="title" placeholder="Title" autocomplete="off" />
    <textarea v-model="topic.description" type="text" name="description" autocomplete="off" />

    <button @click="postTopic" class="btn">Post Topic</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      topic: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    category_id() {
      return this.$store.state.getTopics.category._id;
    }
  },
  methods: {
    postTopic() {
      const post = {
        category_id: this.category_id,
        title: this.topic.title,
        description: this.topic.description,
        created_at: new Date(),
        user_id: localStorage.getItem("user_id")
      };
      this.$store.dispatch("postNewTopic", post);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/form.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";
@import "../assets/scss/button.scss";

.category {
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