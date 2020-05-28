const fileUpload = {
  state: {},
  mutations: {},
  actions: {
    async uploadAvatar(ctx, formData) {
      const user_id = localStorage.getItem("user_id");
//const body = {user_id: user_id, avatarImage: formData}
      const url = "http://localhost:3005/upload/avatar";
      fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  modules: {},
};

export default fileUpload;
