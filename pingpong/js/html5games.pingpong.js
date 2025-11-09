const KEY = {
  W: 87,
  S: 83,
  UP: 38,
  DOWN: 40,
};
var pingpong = {};
pingpong.pressedKeys = [];

$(function () {
  // set interval to call game loop every 30 milliseconds
  pingpong.timer = setInterval(gameLoop, 30);

  // mark down what key is down and up into an array called "pressedKeys"
  $(document).keydown(function (e) {
    pingpong.pressedKeys[e.which] = true;
  });
  $(document).keyup(function (e) {
    pingpong.pressedKeys[e.which] = false;
  });
});

function gameLoop() {
  movePaddles();
}

function movePaddles() {
  // use our custom timer to continuously check if a key is pressed.
  if (pingpong.pressedKeys[KEY.UP]) {
    // move the paddle B up 5 pixels
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top - 5);
  }
  if (pingpong.pressedKeys[KEY.DOWN]) {
    // arrow-down
    // move the paddle B down 5 pixels
    var top = parseInt($("#paddleB").css("top"));
    $("#paddleB").css("top", top + 5);
  }
  if (pingpong.pressedKeys[KEY.W]) {
    // w
    // move the paddle A up 5 pixels
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top - 5);
  }
  if (pingpong.pressedKeys[KEY.S]) {
    // s
    // move the paddle A down 5 pixels
    var top = parseInt($("#paddleA").css("top"));
    $("#paddleA").css("top", top + 5);
  }
}
