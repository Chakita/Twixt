var express = require("express");
var cors = require("cors");
const path = require("path");
var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.engine("jade", require("jade").__express);
app.get("/discussions", function (req, res) {
  res.render("page");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use(express.static(path.join(__dirname, "build")));
app.use(cors({ credentials: true, origin: true }));
var port = 3700;
var server = app.listen(port);
var io = require("socket.io")().listen(server);
io.sockets.on("connection", function (socket) {
  socket.emit("message", { message: "Welcome to the discussions page" });
  socket.on("send", function (data) {
    io.sockets.emit("message", data);
  });
});
console.log("Listening on port: " + port);
