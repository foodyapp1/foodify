const { Router } = require("express");
const router = Router();
var multer = require("multer");
const posts = require("../../models/posts");
//due to problems with .env I stored this data here to avoid in normal cases
// CLOUD_NAME=datafeelya69;
// CLOUDINARY_API_KEY=273817853746743;
// CLOUDINARY_API_SECRET=UeQ5FHo7cz_kBohaWLSpcSs3vMM;
//--------------------------------------------------------------------------

///////////////////////////////////////////////////////////////////
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      String(Math.floor(Math.random() * Math.floor(10000000))) +
        file.originalname
    );
  },
});
var upload = multer({ storage: storage });

//////////////////////////////////////////////////////////////////
router.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  // posts.create(
  //   {
  //     userid: req.body.userid,
  //     imageurl: req.file.path,
  //     postbody: req.body.postbody,
  //     posttitle: req.body.posttitle,
  //   },
  //   (err, doc) => {
  //     if (!err) {
  //       res.status(200).send(req.file);
  //     }
  //   }
  // );
});

module.exports = router;
