require("dotenv").config();
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


const storage = new GridFsStorage({
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mycluster-hrjhr.azure.mongodb.net/forum?authSource=admin&replicaSet=myCluster-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,

    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("only accepts .jpg or .png"), false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;