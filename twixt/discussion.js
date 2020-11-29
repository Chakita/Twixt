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
app.use(express.static(__dirname + "/public"));
app.use(cors({ credentials: true, origin: true }));
var port = process.env.PORT || 3700;
var server = app.listen(port);
var io = require("socket.io")().listen(server);
io.sockets.on("connection", function (socket) {
  socket.emit("message", { message: "Welcome to the discussions page" });
  socket.on("send", function (data) {
    io.sockets.emit("message", data);
  });
});
console.log("Listening on port: " + port);
