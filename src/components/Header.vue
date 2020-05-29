<template>
  <div class="wrapper">
    <header class="header">
      <div class="title">
        <h1 @click="goToHomepage">GeekStorm</h1>
      </div>
      <nav class="nav">
        <ul>
          <li>Hot Topics (NA)</li>
          <li>New Topics (NA)</li>
          <li @click="goToAdmin">ADMIN</li>
        </ul>
      </nav>
      <section class="user">
        <button class="user-menu">
          <i class="fas fa-envelope"></i>
        </button>
        <button class="user-menu">
          <i class="fas fa-bell"></i>
        </button>
        <button class="user-menu profile" @click="goToProfile">
          <i class="fas fa-user-circle"></i>
        </button>
        <p class="username" @click="goToProfile">{{user.username}}</p>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log(user)
      return user
    }
  },
  methods: {
    goToHomepage() {
      this.$router.push("/home");
    },
    goToAdmin() {
      this.$router.push("/Admin");
    },
    goToProfile() {
      this.$store.state.display.discussion = false;
      this.$store.state.display.profile = true;
    }
  }
};
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
      cursor: pointer;
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
        display:flex;
        align-self: center;

        i {
          font-size: 1rem;
        }
      }

      .profile {
        font-size: 1.6rem;
        cursor: pointer;
      }

      .username {
        font-size: 0.9rem;
        cursor: pointer;
      }
    }
  }
  
}
</style>