<template>
  <div class="discussion">
    <section v-if="showTopic" class="topic">
      <Topic />
      <Topic-Replies />
    </section>
    <CategoryTopics v-else-if="showCategory" @postTopic="postTopic" />
    <PostTopic v-else :category_id="category_id" />
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
      showTopic: false,
      showCategory: true,
      category_id: ""
    };
  },
  methods: {
    postTopic(id) {
      this.category_id = id;
      this.showCategory = false;
      this.showTopic = false;
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