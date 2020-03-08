<template>
  <div class="login-form">
    <h1>Create User</h1>
    <div class="email">
      <i class="fas fa-envelope"></i>
      <input v-model="input.email" name="email" type="email" placeholder="Email" />
    </div>
    <div class="user">
      <i class="fas fa-user"></i>
      <input v-model="input.username" name="username" type="text" placeholder="Username" />
    </div>
    <div class="pwd">
      <i class="fas fa-lock"></i>
      <input v-model="input.pwd" name="password" type="password" placeholder="Password" />
    </div>
    <button @click="createUser" class="btn">Create</button>
    <span class="switch-form" @click="signIn">Sign In!</span>
  </div>
</template>

<script>
export default {
  name: "CreateUser",
  props: {},
  data: () => {
    return {
      input: {
        email: "",
        username: "",
        pwd: ""
      }
    };
  },
  methods: {
    signIn() {
      this.$emit("signIn");
    },
    createUser() {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let d = new Date();
      let month = d.getMonth();
      month = months[month];
      let year = d.getFullYear();
      let regDate = month + " " + year;

      const input = {
        email: this.input.email,
        username: this.input.username,
        pwd: this.input.pwd,
        regDate: regDate
      };
      console.log(input);
      const url = "http://localhost:3005/users/register";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        // because JSON format in server
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
      this.signIn();
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

  .email,
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

  .switch-form {
    color: $cyan;
    opacity: 0.8;
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
    align-self: flex-end;
    margin: 1.5rem;
  }
}
</style>
