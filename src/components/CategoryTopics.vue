<template>
  <div class="topic">
    <section class="header">
      <h4 class="title">{{category.title}}</h4>
      <div @click="postTopic" class="add-topic">
        <h3>Post Topic</h3>
        <i class="fas fa-plus"></i>
      </div>
    </section>
    <span class="divider"></span>
    <section class="content">
      <div class="content-header">
        <p class="topic">Topic</p>

        <p class="author">Author</p>

        <aside class="created">Created at</aside>
      </div>
      <li v-for="(topic, index) in topics" :key="index" @click="showTopic(topic._id)" class="topic-grid">
        <p class="title">{{topic.title}}</p>

        <p class="author">{{topic.author}}</p>

        <aside class="created">{{topic.created_at}}</aside>
      </li>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    category() {
      return this.$store.state.getTopics.category;
    },
    topics() {
      console.log(this.$store.state.getTopics.topics);
      console.log("here")
      return this.$store.state.getTopics.topics;
    }
  },
  methods: {
    postTopic() {
      this.$emit("postTopic");
    },
    showTopic(id) {
      this.$store.dispatch("getTopic", id)
      this.$store.dispatch("getTopicReplies", id)
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

    .add-topic {
      display: flex;
      align-items: center;
      cursor: pointer;

      i {
        color: $white;
        margin: 0 0 0.5rem 0.5rem;
      }
    }
  }

  .divider {
    width: 100%;
    border-bottom: 2px solid $white;
    margin: 1rem 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .content-header {
      display: grid;
      grid-template-columns: 60% 23% 18%;
      grid-template-areas: "title author createdAt";
      padding: 1rem 1rem 1rem 0;
      font-size: 1rem;
      .topic {
        grid-area: title;
        color: $white;
      }

      .author {
        grid-area: author;
        margin-left: auto;
        color: $white;
      }

      .created {
        grid-area: createdAt;
        margin-left: auto;

        color: $white;
      }
    }

    .topic-grid {
      display: grid;
      grid-template-columns: 60% 23% 18%;
      grid-template-areas: "title author createdAt";
      padding: 1.5rem 1rem 0 0;
      cursor: pointer;

      .title {
        grid-area: title;
        color: $white;
        font-size: 1rem;
      }

      .author {
        grid-area: author;
        margin-left: auto;
        color: $white;
        opacity: 0.5;
      }

      .created {
        grid-area: createdAt;
        margin-left: auto;

        color: $white;
        opacity: 0.5;
      }
    }
  }
}
</style>