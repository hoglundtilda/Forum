<template>
  <div class="categories">
    <h3>Categories</h3>
    <li
      @click="fetchCategory(category._id)"
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
      return this.$store.state.getCategories.categories;
    }
  },
  methods: {
    categoryPanel() {
      this.$router.push("/Admin");
    },
    fetchCategory(category_id) {
      this.$store.dispatch("fetchCategoryTopics", category_id);
    }
  }
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
    cursor: pointer;
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
