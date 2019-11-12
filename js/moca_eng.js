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
    var canvas, context;
  
    // Initialization sequence.
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
  
      // Attach the mousemove event handler.
      canvas.addEventListener('mousemove', ev_mousemove, false);
    }
  
    // The mousemove event handler.
    var started = false;
    function ev_mousemove (ev) {
      var x, y;
  
      // Get the mouse position relative to the canvas element.
      if (ev.layerX || ev.layerX == 0) { // Firefox
        x = ev.layerX;
        y = ev.layerY;
      } else if (ev.offsetX || ev.offsetX == 0) { // Opera
        x = ev.offsetX;
        y = ev.offsetY;
      }
  
      // The event handler works like a drawing pencil which tracks the mouse 
      // movements. We start drawing a path made up of lines.
      if (!started) {
        context.beginPath();
        context.moveTo(x, y);
        started = true;
      } else {
        context.lineTo(x, y);
        context.stroke();
      }
    }
  
    init();
  }, false); }
  
  // vim:set spell spl=en fo=wan1croql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
  
