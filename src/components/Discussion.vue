<template>
  <div class="discussion">
    <section v-if="this.$store.state.display.showTopic === true" class="topic">
      <Topic />
      <Replies />
    </section>
    <CategoryTopics
      v-else-if="this.$store.state.display.showCategory === true"
      @postTopic="postTopic"
    />
    <PostTopic v-else-if="this.$store.state.display.postTopic === true" :category_id="category_id" />
    <PostReply v-else-if="this.$store.state.display.postReply === true" />
  </div>
</template>

<script>
import Topic from "./Topic";
import Replies from "./Replies";
import CategoryTopics from "./CategoryTopics";
import PostTopic from "./PostTopic";
import PostReply from "./PostReply";

export default {
  components: {
    Topic,
    Replies,
    CategoryTopics,
    PostTopic,
    PostReply
  },
  data: () => {
    return {
      category_id: ""
    };
  },
  methods: {
    postTopic(id) {
      this.category_id = id;
      this.$store.state.display.showCategory = false;
      this.$store.state.display.showTopic = false;
      this.$store.state.display.postTopic = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";

.discussion {
  width: 100%;
  background: $dark;
  box-shadow: $box-shadow;
  border-radius: 5px;
  padding: 1rem;
}
</style>
