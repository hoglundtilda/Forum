<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.home {
  display: grid;
  width: 100vw;
  height: 100vh;
  padding: 5% 5%;
  justify-content: center;
  align-items: center;
  background: $black;
}
</style>
