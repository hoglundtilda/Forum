require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
const db = mongoose.connection;

app.use(express.json());
app.use(express.static("../dist"));

// Register
app.use("/users", users);
//Login
app.use("/auth", auth);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
db.on("error", error => console.error(error));
db.once("open", () => console.log("connected to database"));

app.listen(3005, () => console.log("server started on PORT 3005"));
