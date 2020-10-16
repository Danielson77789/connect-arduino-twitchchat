var jFive = require("johnny-five");
var board = new jFive.Board({
  port: "COM3"
});



board.on("ready", function() {
  var led = new jFive.Led(13);
});
