const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const messageroutes = require("../routes/api/messaging");
const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
const port = 5000;
const cors = require("cors");
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
////////////////////////////////////////////////
app.use("/api/messaging", messageroutes);
////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("<h1>socket chat server online</h1>");
});
/////////////////////////////////////////////////
mongoose
  .connect(
    "mongodb+srv://dhaouiaziz13:Dhaoui2708@cluster0.cxxvc.mongodb.net/food?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));
/////////////////////////////////////////////////
io.on("connection", (socket) => {
  console.log("new connection");
  socket.emit("name", "hello");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
////////////////////////////////////////////////
http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
/////////////////////////////////////////////////
