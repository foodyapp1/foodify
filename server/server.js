const authroutes = require("./routes/api/loginsignup");
const upload = require("./routes/api/upload");
const postsDumRoutes = require("./routes/api/dummieposts");
const commentsRoutes= require("./routes/api/comments")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const { PORT, mongoUri } = require("./config");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//////////////////////////////////////////////////////////
app.use("/api/loginsignup", authroutes);
app.use("/api/upload", upload);
app.use("/api/dummieposts", postsDumRoutes);
app.use("/api/comments",commentsRoutes)
//////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));
/////////////////////////////////////////////////////////
app.get("/", (req, res) => res.send("server working!"));
////////////////////////////////////////////////////////
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
