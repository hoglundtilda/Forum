const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const login = require("./routes/login");
const admin = require("./routes/admin");
const forumContent = require("./routes/forumContent");
const forumPosts = require("./routes/forumPosts");

const app = express();
const db = mongoose.connection;

app.use(express.json());
app.use(express.static("../dist"));

// Register
app.use("/users", users);

//Login
app.use("/auth", login);

// admin controllers
app.use("/admin", admin);

app.use("/forumContent", forumContent);
app.use("/forumPosts", forumPosts);

/* mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

app.listen(3005, () => console.log("server started on PORT 3005")); */

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

//module.exports = InitiateMongoServer;
