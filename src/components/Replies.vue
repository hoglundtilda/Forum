<template>
  <div class="topic_replies">
    <li v-for="(reply, index) in replies" :key="index">
      <span class="divider-reply"></span>
      <section class="content">
        <p class="reply">{{reply.content}}</p>
        <div class="details">
          <div class="user">
            <p class="username">{{reply.user_id}}</p>

            <i class="fas fa-user-circle"></i>
          </div>
          <aside class="created">{{reply.created_at}}</aside>
        </div>
      </section>
    </li>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    replies() {
      return this.$store.state.topicReplies.replies;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";
.topic_replies {
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .divider-reply {
    width: 100%;
    border-bottom: 2px solid $white;
    opacity: 0.5;
    margin: 1rem 0;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .reply {
      width: 80%;
      color: $grey;
      padding: 0 2rem 2rem 0;
    }
    .details {
      display: flex;

      flex-direction: column;
      justify-content: space-between;

      .created {
        align-self: flex-end;
        color: $cyan;
        opacity: 0.5;
      }
    }
  }
}
</style>