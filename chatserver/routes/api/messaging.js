const { Router } = require("express");
const router = Router();
const users = require("../../models/Users");
const messages = require("../../models/messages");
////////////////////////////////////////////////////////
let followers;
router.post("/friends", async (req, res) => {
  let data = [];
  await users.findOne({ _id: req.body.userid }, async (err, doc) => {
    if (!err) {
      followers = doc.followers;
      for (let i = 0; i < followers.length; i++) {
        const element = followers[i];
        await users.findOne({ _id: element }, (err, doc) => {
          if (!err) {
            data.push(doc);
          } else {
            console.log("bummer");
          }
        });
      }
      res.json(data);
    }
  });
});
//////////////////////////////////////////////////////
module.exports = router;
