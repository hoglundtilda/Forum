<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu&display=swap");
@import "./assets/scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

#app {
  font-family: "Ubuntu";
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: $black;
}
</style>
