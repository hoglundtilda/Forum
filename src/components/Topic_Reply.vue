<template>
  <div class="topic_replies">
    <span class="divider-reply"></span>
    <section class="content">
      <p
        class="reply"
      >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <div class="details">
        <div class="user">
          <p class="username">John Doe</p>

          <i class="fas fa-user-circle"></i>
        </div>
        <aside class="created">09:34 02/07/19</aside>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";
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