import io from "socket.io-client";
import $ from "jquery";

const url = "localhost:1337";

$(function () {
  const socket = io.connect(url);
  $("#myForm").submit(function (e) {
    e.preventDefault();
    socket.json.emit("emit_from_client", {
      msg: $("#msg").val(),
      name: $("#name").val(),
    });
    $("#msg").val("").focus();
  });

  socket.on("emit_from_server", function (data: string) {
    $("#logs").append($("<li>").text(data));
  });
});
