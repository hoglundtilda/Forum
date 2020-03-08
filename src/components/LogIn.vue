<template>
  <div class="login-form">
    <h1>Sign In</h1>
    <div class="user">
      <i class="fas fa-user"></i>
      <input v-model="username" placeholder="Username" name="username" type="text" />
    </div>
    <div class="pwd">
      <i class="fas fa-lock"></i>
      <input v-model="pwd" placeholder="Password" name="password" type="text" />
    </div>
    <button @click="logIn" class="btn">Login</button>
    <span class="switch-form" @click="signUp">Don't have an account? Sign Up!</span>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  props: {},
  data: () => {
    return {
      username: "",
      pwd: ""
    };
  },
  methods: {
    logIn() {
      const input = {
        username: this.username,
        pwd: this.pwd
      };
      const url = "http://localhost:3005/auth/login";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.success) {
            this.redirect(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    redirect(data) {
      const url = "http://localhost:3005/auth/user";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json", token: data.token }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log(data);
            this.$router.push("/home", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    },
    signUp() {
      this.$emit("signUp", event);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/form.scss";
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";
@import "../assets/scss/textStyles";

.login-form {
  display: flex;
  flex-direction: column;
  height: 24rem;
  max-width: 25rem;
  position: fixed;

  .switch-form {
    color: $cyan;
    opacity: 0.8;
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    align-self: flex-end;
    margin: 1.5rem;
  }

  .user,
  .pwd {
    display: flex;
    align-items: center;
    background: $dark;
    margin: 1rem 0;
    height: 3rem;
    padding: 10px;

    input {
      color: $grey;
      background: $dark;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 40px $dark inset !important;
      -webkit-text-fill-color: $grey !important;
    }
    i {
      font-size: 1.2rem;
      color: $grey;
      margin-right: 0.5rem;
    }
    ::placeholder {
      font-family: "Ubuntu";
      font-size: 1rem;
    }
  }

  button {
    margin: 1.5rem 0;
  }
}
</style>
