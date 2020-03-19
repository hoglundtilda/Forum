<template>
  <div class="topic">
    <section class="header">
      <h4 class="title">How to create relations between databases in mongoDB/mongoose?</h4>
      <div class="user">
        <p class="username">John Doe</p>

        <i class="fas fa-user-circle"></i>
      </div>
    </section>
    <span class="divider"></span>
    <section class="content">
      <p
        class="description"
      >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <aside class="created">13:20 02/06/19</aside>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    topic() {
      return this.$store.state.getTopic.topic;
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
  }

  .divider {
    width: 100%;
    border-bottom: 2px solid $white;
    margin: 1rem 0;
  }

  .content {
    display: flex;
    justify-content: space-between;

    .description {
      width: 80%;
      color: $grey;
      padding: 0 2rem 2rem 0;
    }

    .created {
      align-self: flex-end;
      color: $cyan;
      opacity: 0.5;
    }
  }
}
</style>