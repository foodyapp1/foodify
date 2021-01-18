const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});
const port = 3000;
const cors = require("cors");
app.use(cors());
////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.send("<h1>socket chat</h1>");
});
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
