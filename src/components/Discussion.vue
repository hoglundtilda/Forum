<template>
  <div class="discussion">
    <section v-if="showSpecificTopic" class="topic">
      <Topic />
      <Topic-Replies />
    </section>
    <CategoryTopics v-else @postTopic="postTopic" />
    <PostTopic :category_id="category_id" v-if="showPostTopic" />
  </div>
</template>

<script>
import Topic from "./Topic";
import TopicReplies from "./Topic_Reply";
import CategoryTopics from "./CategoryTopics";
import PostTopic from "./PostTopic";

export default {
  components: {
    Topic,
    TopicReplies,
    CategoryTopics,
    PostTopic
  },
  data: () => {
    return {
      showSpecificTopic: false,
      showPostTopic: false,
      category_id: ""
    };
  },
  methods: {
    postTopic(id) {
      this.category_id = id;
      this.showPostTopic = true;
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