const fileUpload = {
  state: {},
  mutations: {},
  actions: {
    async uploadAvatar(ctx, file) {
      const url = "http://localhost:3005/upload/avatar";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        formData: { file: file },
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
