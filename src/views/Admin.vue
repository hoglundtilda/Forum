<template>
  <div class="admin-panel">
    <Header class="header" />
    <section class="admin-controllers">
      <Add-Category />
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import AddCategory from "../components/Admin/Add_Category";
export default {
  name: "Admin",
  components: {
    Header,
    AddCategory
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.admin-panel {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0% 5%;
  align-items: center;
  background: $black;
  grid-template-rows: 10% 90%;

  .admin-controllers {
    display: flex;
    margin-top: 5rem;
  }
}
</style>