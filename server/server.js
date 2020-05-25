const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const login = require("./routes/login");
const admin = require("./routes/admin");
const categories = require("./routes/categories");
const topics = require("./routes/topics");

const app = express();

app.use(express.json());
app.use(express.static("../dist"));

app.use("/users", users);
app.use("/auth", login);
app.use("/admin", admin);
app.use("/categories", categories);
app.use("/topics", topics);

mongoose.connect(
    `mongodb+srv://tildaHoglund:Jampk46begah@mycluster-hrjhr.azure.mongodb.net/forum?authSource=admin&replicaSet=myCluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log(`Connected to mongoDB Forum-project`);
    app.listen(3005, () => console.log(`Server started on port 3005`));
  })
  .catch((error) => {
    console.log(`Error connecting to the database` + error);
  });
