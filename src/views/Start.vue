<template>
  <div class="start">
    <LogIn v-if="login" @signUp="signUp" />
    <CreateUser v-else @signIn="signIn" />
  </div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import CreateUser from "@/components/CreateUser.vue";

export default {
  name: "start",
  components: {
    LogIn,
    CreateUser
  },
  data: () => {
    return {
      login: true
    };
  },
  methods: {
    signUp() {
      this.login = false;
    },
    signIn() {
      this.login = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.start {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
