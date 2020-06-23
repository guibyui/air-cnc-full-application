const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const socketio = require("socket.io");
const http = require("http");

const routes = require("./routes");

const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect(
  "mongodb+srv://aircnc:aircnc@aircnc-nwqli.mongodb.net/aircncdb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// GET: Receive information,
// POST: Create information,
// PUT: Edit information,
// DELETE

// req.query = Access query params (For filters)
// req.params = Access route params (For editing and delete)
// req.body = Access request body (For creation and editing)

const connectedUsers = {};

io.on("connection", (socket) => {
  // console.log(socket.handshake.query);

  // console.log('Usuario Conectado', socket.id);

  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
