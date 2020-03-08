<template>
  <div class="discussion">
    <Topic />
    <Topic-Replies />
  </div>
</template>

<script>
import Topic from "./Topic";
import TopicReplies from "./Topic_Reply";

export default {
  props: Object,
  components: {
    Topic,
    TopicReplies
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