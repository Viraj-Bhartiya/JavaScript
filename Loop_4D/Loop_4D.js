var simplex;
var in_color = false;

function setup() {
  simplex = new SimplexNoise();
  createCanvas(windowWidth,windowHeight);
  background(10);
  noCursor();
}

function draw() {
  colorMode(RGB, 255);
  background(10);
  fill(20);
  noStroke();
  rect(0, 0, width, height, 80, 80);
  
  stroke(255,128);
  noFill();
  translate(width/2, height/2);
  var a, x, y;
  var ts = 0.007;
  var cs = 0.0001;
  var ns = 0.3;
  var size = 360;
  var c = 30;
  
  colorMode(HSB, 100);
  var col = color(0,0,100,50);
  for(var i = 0; i < 100; i++){
    if(in_color) col = color(i, 70, 100, 100);
    stroke(col);
    var verts = [];
    for(var r = 0; r < c; r++){
      a = r / c * TWO_PI;
      x = simplex.noise4D(cos(a) * ns, sin(a) * ns, 1.5 + frameCount * ts, i*0.01) * size;
      y = simplex.noise4D(cos(a) * ns, sin(a) * ns, 2.5 + frameCount * ts, i*0.01) * size;
      
      verts.push(createVector(x,y));
    }
    beginShape();
    for(let r = 0; r < c; r++){
      vertex(-verts[r].x, verts[r].y);
    }
    endShape(CLOSE);
    beginShape();
    for(let r = 0; r < c; r++){
      vertex(verts[r].x, verts[r].y);
    }
    endShape(CLOSE);
  }
}

function mouseClicked(event) {
  in_color = !in_color;
}
