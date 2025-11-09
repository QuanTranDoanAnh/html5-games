const KEY = {
  W: 87,
  S: 83,
  UP: 38,
  DOWN: 40,
};
var pingpong = {};
pingpong.pressedKeys = [];
pingpong.ball = {
  speed: 5,
  x: 150,
  y: 100,
  directionX: 1,
  directionY: 1,
};

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
  moveBall();
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

function moveBall() {
  // Move the ball

  // reference useful variables
  var playgroundHeight = parseInt($("#playground").css("height"));
  var playgroundWidth = parseInt($("#playground").css("width"));
  var ball = pingpong.ball;
  // check playground boundary
  // check bottom edge
  var ballDiameter = parseInt($("#ball").css("width"));

  if (ball.y + ball.speed * ball.directionY > playgroundHeight) {
    ball.directionY = -1;
  }

  // check top edge
  if (ball.y + ball.speed * ball.directionY < 0) {
    ball.directionY = 1;
  }
  // check right edge
  if (ball.x + ball.speed * ball.directionX > playgroundWidth) {
    ball.directionX = -1;
  }
  // check left edge
  if (ball.x + ball.speed * ball.directionX < 0) {
    ball.directionX = 1;
  }
  ball.x += ball.speed * ball.directionX;
  ball.y += ball.speed * ball.directionY;

  // check moving paddle here, later.

  // actually move the ball with speed and direction
  $("#ball").css({
    left: ball.x,
    top: ball.y,
  });
}
