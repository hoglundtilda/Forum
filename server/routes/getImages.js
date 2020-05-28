const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  grid = require("gridfs-stream");

  
  const avatar = require("../models/avatar");
  const fs = require("fs");
  const db = mongoose.connection;
// Init gfs
//let gfs;

/* connection.once("open", () => {
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection("files.fs"); //collection name
}); */

router.get("/:filename", (req, res) => {
    console.log("here")
    console.log(db.fs)
    db.fs.files.findOne({ filename: req.params.filename }, (err, file) => {
        console.log(file)
        console.log(err)
    })
  /* db.fs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
        console.log("here1")
      return res.status(404).json({ err: "No File Exists" });
    } else {
      // Check if is image
      if (
        file.contentType === "image/jpeg" ||
        file.contentType === "image/png"
      ) {
        // Read output to broswer
        console.log("here2")
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
      } else {
        res.status(404).json({ err: "Not and image" });
      }
    }
  }); */
});

module.exports = router;
