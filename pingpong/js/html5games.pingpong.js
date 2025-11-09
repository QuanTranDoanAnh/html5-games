// code inside $(function(){} will run after the DOM is loaded and
// ready
var KEY = {
  UP: 38,
  DOWN: 40,
  W: 87,
  S: 83,
};
$(function() {
    // listen to keydown event
    $(document).keydown(function(e) {
        switch (e.which) {
            case KEY.UP: // up arrow
                // get the current paddle B's top value in Int type
                var top = parseInt($("#paddleB").css("top"));
                // move the paddle B up 5 pixels
                $("#paddleB").css("top", top - 5);
                break;
            case KEY.DOWN: // down arrow
                var top = parseInt($("#paddleB").css("top"));
                // move the paddle B down 5 pixels
                $("#paddleB").css("top", top + 5);
                break;
            case KEY.W: // up arrow
                // get the current paddle B's top value in Int type
                var top = parseInt($("#paddleA").css("top"));
                // move the paddle B up 5 pixels
                $("#paddleA").css("top", top - 5);
                break;
            case KEY.S: // down arrow
                var top = parseInt($("#paddleA").css("top"));
                // move the paddle B down 5 pixels
                $("#paddleA").css("top", top + 5);
                break;
                
        }
    })
})