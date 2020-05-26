<template>
  <div class="topic">
    <section class="header">
      <h4 class="title">{{topic.title}}</h4>
      <div @click="postReply" class="post-reply">
        <h3>Reply</h3>
        <i class="fas fa-plus"></i>
      </div>
    </section>
    <span class="divider"></span>
    <div class="topic_replies">
      <span class="divider-reply"></span>
      <section class="content">
        <p class="reply">{{topic.description}}</p>
        <div class="details">
          <div class="user">
            <p class="username">{{topic.user_id}}</p>

            <i class="fas fa-user-circle"></i>
          </div>
          <aside class="created">{{topic.created_at}}</aside>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    topic() {
      return this.$store.state.topicReplies.topic;
    }
  },
  methods: {
    postReply() {
      this.$store.state.display.showCategory = false;
      this.$store.state.display.showTopic = false;
      this.$store.state.display.postReply = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";
.topic {
  display: flex;
  flex-direction: column;
  background: $dark;
  width: 100%;

  .header {
    display: flex;
    justify-content: space-between;

    .post-reply {
      display: flex;
      align-items: center;
      cursor: pointer;

      i {
        color: $white;
        margin: 0 0 0.5rem 0.5rem;
      }
    }
  }
}

.topic_replies {
  display: flex;
  flex-direction: column;
  width: 100%;

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