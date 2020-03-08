<template>
  <div class="side-menu">
    <h3>Side</h3>
    <p>Something</p>
    <p>Something else</p>
    <p>Anything</p>
    <p>Let's be serious</p>
    <p>Another something</p>
    <p>And another useless something</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";

.side-menu {
  display: flex;
  flex-direction: column;
  background: $dark;
  width: 100%;
  box-shadow: $box-shadow;
  border-radius: 5px;

  p {
    padding: 5px 0;
    color: $grey;
  }
}
</style>