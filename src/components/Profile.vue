<template>
  <div class="profile">
    <div class="avatar">
      <img
        :src="`/images/${user.avatar}`"
        alt
      />
    </div>
    <section class="user-info">
      <p class="username">{{ user.username }}</p>
      <div class="register-info">
        <p class="registred-since">Registred since:</p>
        <p>{{ user.regDate }}</p>
      </div>
    </section>
    <section class="activity">
      <p class="link">My replies</p>
      <p class="link">My started topics</p>
    </section>
    <section class="file-upload">
      <p>Change Avatar</p>

      <div class="form-group">
        <input
          @change="avatarUpload"
          ref="file"
          type="file"
          name="file"
          id="input-files"
          class="choose-file"
          single
        />
      </div>
      <button @click="sendFile" type="submit" class="save-btn btn">
        Save
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      file: "",
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    avatarUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    async sendFile() {
      let formData = new FormData();
      const user_id = localStorage.getItem("user_id");

      formData.append("avatarImage", this.file);
      formData.append("user_id", user_id)
      this.$store.dispatch("uploadAvatar", formData)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/textStyles";
@import "../assets/scss/variables.scss";
@import "../assets/scss/button.scss";

.profile {
  width: 100%;
  background: $dark;
  box-shadow: $box-shadow;
  border-radius: 5px;
  padding: 5rem;
  display: grid;
  grid-template-areas: "avatar user-info activity" "file-upload . .";
  grid-template-columns: 1fr 1fr 1fr;

  .avatar {
    height: 130px;
    width: 130px;

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    color: $white;
    font-size: 1rem;
    margin: 1rem 0;
  }

  .username {
    font-size: 1.2rem;
  }

  .register-info {
    display: flex;

    p {
      margin-right: 0.2rem;
    }

    .registred-since {
      color: $grey;
      opacity: 0.8;
    }
  }

  .link {
    text-decoration: underline;
  }

  .link:hover {
    color: $cyan;
    cursor: pointer;
  }

  .activity {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .file-upload {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    .choose-file {
      background: $black;
      font-family: "Ubuntu";
      color: $grey;
      width: 20rem;
    }

    .save-btn {
      padding: 6px 10px;
      margin: 1rem 0;
      font-size: 0.8rem;
    }
  }
}
</style>
