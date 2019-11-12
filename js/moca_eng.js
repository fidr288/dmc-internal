/* © 2009 ROBO Design
 * http://www.robodesign.ro
 */

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");

b1.addEventListener("click", function(){
  document.getElementById("content").innerHTML = '<div class="container"><div id="container"><canvas id="imageView" width="600" height="345" style="background-image: url(./files/numbers.png)";></canvas></div></div><div class="container"><p>Please draw a line alternating between a square with a number and a square with dots in increasing order.Begin here [point to the square with the number 1] and draw a line from the square with the number 1 to the square with one dot [point to the square with one dot]. Then draw a line to the square with the number 2 [point to the square with number 2]then to the square with two dots [point to the square with two dots]and so on. End here [point to the square with six dots].</p><p>检查者向受试者说明“请您按照从数字到点并逐渐升高的顺序画一条连线。从这里开始[指向数字（1）]，从数字1连向一个点[指向含有一个点的正方形]，再连向数字2[指向数字（2）]，之后连向两个点[指向含有两个点的正方形]，并一直连下去，到这里结束[指向含有一个点的正方形]”。</p></div>'
});

b2.addEventListener("click", function(){
  document.getElementById("content").innerHTML = '<p>yeah</p>'
});

// Keep everything in anonymous function, called on window load.
if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas, context, tool;

  function init () {
    // Find the canvas element.
    canvas = document.getElementById('imageView');
    if (!canvas) {
      alert('Error: I cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      alert('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    context = canvas.getContext('2d');
    if (!context) {
      alert('Error: failed to getContext!');
      return;
    }

    // Pencil tool instance.
    tool = new tool_pencil();

    // Attach the mousedown, mousemove and mouseup event listeners.
    canvas.addEventListener('mousedown', ev_canvas, false);
    canvas.addEventListener('mousemove', ev_canvas, false);
    canvas.addEventListener('mouseup',   ev_canvas, false);
  }

  // This painting tool works like a drawing pencil which tracks the mouse 
  // movements.
  function tool_pencil () {
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    // This starts the pencil drawing.
    this.mousedown = function (ev) {
        context.beginPath();
        context.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse. Obviously, it only 
    // draws if the tool.started state is set to true (when you are holding down 
    // the mouse button).
    this.mousemove = function (ev) {
      if (tool.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    // This is called when you release the mouse button.
    this.mouseup = function (ev) {
      if (tool.started) {
        tool.mousemove(ev);
        tool.started = false;
      }
    };
  }

  // The general-purpose event handler. This function just determines the mouse 
  // position relative to the canvas element.
  function ev_canvas (ev) {
    if (ev.layerX || ev.layerX == 0) { // Firefox
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) { // Opera
      ev._x = ev.offsetX;
      ev._y = ev.offsetY;
    }

    // Call the event handler of the tool.
    var func = tool[ev.type];
    if (func) {
      func(ev);
    }
  }

  init();

}, false); }

// vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
