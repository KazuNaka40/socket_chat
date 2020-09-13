import socketio from "socket.io";
import express from "express";
import path from "path";

const PORT = 1337;
const app = express();
app.use('/', express.static(path.join(__dirname, 'dist')))
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

const io = socketio(server);

io.sockets.on("connection", function (socket: socketio.Socket) {
  socket.on("emit_from_client", function (data) {
    io.sockets.emit("emit_from_server", "[" + data.name + "]:" + data.msg);
  });
});

