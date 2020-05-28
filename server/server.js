require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  users = require("./routes/users"),
  login = require("./routes/login"),
  admin = require("./routes/admin"),
  categories = require("./routes/categories"),
  topics = require("./routes/topics"),
  upload = require("./routes/upload"),
  getImages = require("./routes/getImages"),
  app = express();

app.use(express.json());
app.use(express.static("../dist"));

app.use("/users", users);
app.use("/auth", login);
app.use("/admin", admin);
app.use("/categories", categories);
app.use("/topics", topics);
app.use("/upload", upload);
app.use("/images", getImages);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mycluster-hrjhr.azure.mongodb.net/forum?authSource=admin&replicaSet=myCluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log(`Connected to mongoDB Forum-project`);
    app.listen(3005, () => console.log(`Server started on port 3005`));
  })
  .catch((error) => {
    console.log(`Error connecting to the database` + error);
  });
