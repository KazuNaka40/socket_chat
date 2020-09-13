import socketio from "socket.io";

const io = socketio(1337);

io.sockets.on("connection", function (socket: socketio.Socket) {
  socket.on("emit_from_client", function (data) {
    io.sockets.emit("emit_from_server", "[" + data.name + "]:" + data.msg);
  });
});
