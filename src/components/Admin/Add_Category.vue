<template>
  <div class="category">
    <h3>New Category</h3>
    <input
      v-model="category.title"
      type="text"
      name="title"
      placeholder="Category Title"
      autocomplete="off"
    />
    <input
      v-model="category.description"
      type="text"
      name="description"
      placeholder="Category Description"
      autocomplete="off"
    />
    <input
      v-model="category.img"
      type="text"
      name="imgurl"
      placeholder="Image URL"
      autocomplete="off"
    />
    <aside v-if="complete" class="complete">Category successfully added!</aside>
    <button @click="postCategory" class="btn">Add Category</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      category: {
        title: "",
        description: "",
        img: ""
      },
      complete: false
    };
  },
  methods: {
    postCategory() {
      const url = "http://localhost:3005/admin/addCat";
      fetch(url, {
        method: "POST",
        body: JSON.stringify(this.category),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.success) {
            this.complete = true;
            
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
      setTimeout(() => {
        this.complete = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/form.scss";
@import "../../assets/scss/variables.scss";
@import "../../assets/scss/textStyles";
@import "../../assets/scss/button.scss";

.category {
  display: flex;
  flex-direction: column;
  background: $dark;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: $box-shadow;

  input {
    color: $grey;
    background: $black;
    border-radius: 5px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 40px $black inset !important;
    -webkit-text-fill-color: $grey !important;
  }

  ::placeholder {
    font-family: "Ubuntu";
    font-size: 1rem;
    color: $grey;
    opacity: 0.7;
  }

  .complete {
    margin: 1rem 0 2rem 0;
    color: $white;
    font-style: italic;
    letter-spacing: 1px;
    opacity: 0.5;
  }
}
</style>