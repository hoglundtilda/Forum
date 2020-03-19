<template>
  <div class="categories">
    <h3>Categories</h3>
    <li
      @click="category(category.id)"
      v-for="(category, index) in categories"
      :key="index"
      class="category-title"
    >{{ category.title}}</li>
    <aside @click="categoryPanel" class="add-category">
      <i class="fas fa-plus"></i>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    categories() {
      console.log(this.$store.state.getCategories.categories);
      return this.$store.state.getCategories.categories;
    }
  },
  methods: {
    categoryPanel() {
      this.$router.push("/Admin");
    },
    category(id) {
      this.$store.dispatch("categoryTopics", id);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
@import "../assets/scss/textStyles";

.categories {
  display: flex;
  flex-direction: column;
  background: $dark;
  width: 100%;
  box-shadow: $box-shadow;
  border-radius: 5px;

  .category-title {
    padding: 5px 0;
    color: $grey;
  }

  .add-category {
    display: flex;
    align-self: flex-end;
    position: fixed;
    padding: 0.25rem;
    color: $white;
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
      color: $cyan;
    }
  }
}
</style>
