<template>
  <div class="profile">
    <div class="avatar">
      <img src alt />
    </div>
    <section class="user-info">
      <p class="username">Username</p>
      <div class="register-info">
        <p class="registred-since">Registred since:</p>
        <p>2020-04-24</p>
      </div>
    </section>
    <section class="activity">
      <p class="link">My replies</p>
      <p class="link">My started topics</p>
    </section>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/textStyles";
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.profile {
  width: 100%;
  padding: 5rem;
  display: grid;
  grid-template-areas: "avatar user-info activity";
  grid-template-columns: 1fr 1fr 1fr;

  .avatar {
    height: 180px;
    width: 160px;
  }

  p {
    color: $white;
    font-size: 1rem;
    margin: 1rem 0;
  }

  .username {
    font-size: 1.2rem;
  }

  .register-info {
      display: flex;

      p {
          margin-right: 0.2rem;
      }

      .registred-since {
          color: $grey;
          opacity: 0.8;
      }
  }

  .link {
    text-decoration: underline;
  }

  .link:hover {
    color: $cyan;
    cursor: pointer;
  }
}
</style>
