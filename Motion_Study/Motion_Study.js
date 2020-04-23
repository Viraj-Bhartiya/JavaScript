var allParticles = [];
var jCount = 20;


function Particle(a, j, c) {
  this.c = c;
  this.a = a;
  this.j = j;
  this.x = 0;
}


function setup() {
  frameRate(999999999);
  createCanvas(windowWidth, windowHeight);
  
  //colorMode(HSB, 255);
  noStroke();
  
  var i = 0;
  
  for (var j = 0; j < jCount; j++) {
    for (var a = 0; a < 360; a += 4) {
      let c;
      
      if (i % 4 == 0) {
        c = color(0, 255, 255);
      } else if (i % 2 == 0) {
        c = color(255, 0, 255);
      } else {
        c = color(255, 255, 0);
      }
      
      allParticles.push(new Particle(a, j, c));
      i++;
    }
  }
}


function draw() {
  background(0);
  
  translate(width/2, height/2);
  
  for (var i = 0; i < allParticles.length; i++) {
    var p = allParticles[i];
    
    push();
    
    var invert = 1;
    if (p.j % 2 == 0) {
      invert = -1;
    }
    
    rotate(radians(p.a+p.x)*invert);
    translate(map(p.j, 0, jCount, 400, 5), 0);
    
    fill(p.c);
    
    var s = map(p.j, 0, jCount, 10, 1);
    rect(0, 0, s, s);
    
    var shift = map(p.j, 0, jCount, 0.5, 0.05);
    p.x += max(0, sin(p.j+frameCount*0.05)*shift);
    
    pop();
  }
}
