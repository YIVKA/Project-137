
function preload(){
  }
  
  function setup() {
    canvas = createCanvas(340, 420);
    canvas.center();
  }
  
  function draw() {
    image(img, 0, 0, 340, 420);
    fill('#FFCCCB');
    text("Basketball", 45, 75);
    noFill();
    stroke('#a3c585');
    rect(30, 60, 40, 350);
  
    fill('#Oda2ff');
    text("Soccer_ball", 320, 120);
    noFill();
  }