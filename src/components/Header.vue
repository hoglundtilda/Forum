<template>
  <div class="wrapper">
    <header class="header">
      <div class="title">
        <h1 @click="goToHomepage">GeekStorm</h1>
      </div>
      <nav class="nav">
        <ul>
          <li>Hot Topics</li>
          <li>New Topics</li>
          <li>Rules</li>
        </ul>
      </nav>
      <section class="user">
        <button class="user-menu">
          <i class="fas fa-envelope"></i>
        </button>
        <button class="user-menu">
          <i class="fas fa-bell"></i>
        </button>
        <button class="user-menu profile">
          <i class="fas fa-user-circle"></i>
        </button>
        <p class="username">John Doe</p>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    goToHomepage() {
this.$router.push("/home");

    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/textStyles";
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;

  .header {
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    height: 6rem;

    .title {
      grid-column: 1/1;
      h1 {
        margin: 0;
        padding: 0 10%;
      }
    }

    .nav {
      grid-column: 2 / span 2;
      ul {
        display: flex;
        justify-content: space-evenly;
        color: $white;

        li {
          list-style: none;
          font-size: 1.1rem;
          letter-spacing: 2px;
          cursor: pointer;
        }
      }
    }

    .user {
      font-size: 1.2rem;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 2rem;
      letter-spacing: 2px;

      .user-menu {
        margin: 0 0.5rem;
      }
      .profile {
        font-size: 2rem;
      }
    }
  }
  .highlighted-area {
    /*background-image: url("../assets/img/code.png");
    background-attachment: fixed;
    background-size: contain; */
    height: 7rem;
    display: flex;
    padding: 3rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 2px solid $white;
    border-radius: 10px;
    color: $white;
  }
}
</style>