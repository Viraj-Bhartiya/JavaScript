// Current time of animation
float time = 0;
// Animation duration
float duration = 1000;
// Number of animation runs
int runs = 0;
// FPS
int fps = 60;

// Figure radius
int figureRadius = 70;

// Colors
color leftColor = #28B78D;
color rightColor = #243743;

// Figures
int left, right;

void setup() {
  fullScreen();
  noCursor();
  //size(640, 640);
  rectMode(DIAMETER);
  ellipseMode(RADIUS);
  //frameRate(60);
  noStroke();
  
  left = getFigure();
  runs++;  // To change figure
  right = getFigure();
}

void draw() {
  if(key == ' ')exit();
  // Progress of animation
  float p = time/duration;
  
  // Is even run
  boolean even = runs%2==0;
  
  translate(width/2, height/2);
  rotate(HALF_PI*p + (runs%4==0?0:runs%4==1?HALF_PI:runs%4==2?PI:3*HALF_PI));
  
  // Current position
  float x = (even?1:-1) * width/3*sin(PI*p);
  // Rotation of figure
  float angle = TWO_PI*p;
  
  // Draw spaces
  fill(leftColor);
  rect(x-width/2, 0, width, height*2);
  fill(rightColor);
  rect(x+width/2, 0, width, height*2);
  
  fill(leftColor);
  // If figure in left space
  if (x < 0) {
    // Change right figure
    if (!even) {
      right = getFigure();
    }
    
    // Draw figure
    pushMatrix();
    translate(-x, 0);
    rotate(angle);
    drawFigure(left, p);
    popMatrix();
    
    // Draw splash
    pushMatrix();
    translate(x, 0);
    // Draw wave
    drawWave(p, 1);
    // Draw drops
    drawDrops(p, 1);
    popMatrix();
  }
  
  fill(rightColor);
  // If figure in right space
  if (x > 0) {
    if (even) {
      left = getFigure();
    }
    
    // Draw figure
    pushMatrix();
    translate(-x, 0);
    rotate(angle);
    drawFigure(right, p);
    popMatrix();
    
    // Draw splash
    pushMatrix();
    translate(x, 0);
    // Draw wave
    drawWave(p, -1);
    // Draw drops
    drawDrops(p, -1);
    popMatrix();
  }
  
  // Increase current time
  time += 1000f/fps;
  // Reset time
  if (time >= duration) {
    time -= duration;
    runs++;
  }
}

int getFigure() { return runs%4; }

void drawFigure(int figure, float p) {
  float t = 2*(p<=0.5?p:1-p);
  float radius = figureRadius*0.5*(1+t);
  switch (figure) {
    case 0: drawCircle(t, radius); break;
    case 1: drawSquare(t, radius); break;
    case 2: drawTriangle(t, radius); break;
    case 3: drawHeart(t, radius); break;
  }
}

void drawCircle(float p, float radius) {
  ellipse(0, 0, radius, radius);
}

void drawTriangle(float t, float radius) {
  beginShape();
  for (float angle=0; angle<TWO_PI; angle+=0.05) {
    float r = cos(PI/3)/cos(angle%(TWO_PI/3)-PI/3);
    float x = radius*cos(angle)*(1+t*(r-1));
    float y = radius*sin(angle)*(1+t*(r-1));
    vertex(x, y);
  }
  endShape();
}

void drawSquare(float t, float radius) {
  beginShape();
  for (float angle=0; angle<TWO_PI; angle+=0.05) {
    float r = 1/cos(((angle+QUARTER_PI)%(HALF_PI)-QUARTER_PI));
    float x = radius*cos(angle)*(1+t*(r-1));
    float y = radius*sin(angle)*(1+t*(r-1));
    vertex(x, y);
  }
  endShape();
}

void drawHeart(float t, float radius) {
  beginShape();
  for (float angle=0; angle<TWO_PI; angle+=0.05) {
    float circleX = cos(angle-PI/2);
    float circleY = sin(angle-PI/2);
    float heartX = pow(sin(angle), 3);
    float heartY = (-13*cos(angle)+5*cos(2*angle)+2*cos(3*angle)+cos(4*angle))/17;
    vertex(radius*lerp(circleX,heartX,t), radius*lerp(circleY,heartY,t));
  }
  endShape();
}

void drawWave(float p, int dir) {
  beginShape();
  for (float a = -PI/2; a < 3*PI/2; a += radians(2)) {
    float wx = dir*figureRadius*0.5*(sin((p>0.5?0.5:p)*TWO_PI)*(sin(a)+1))-dir;
    float wy = map(a, 0, PI, -figureRadius, figureRadius);
    vertex(wx, wy);
  }
  endShape();
}

void drawDrops(float p, int dir) {
  for (int i = 0; i < 10; i++) {
    float a = map(i, 0, 10, -HALF_PI, HALF_PI) + (dir==-1?PI:0);
    float r = lerp(0, 5*figureRadius, p);
    float k = 2*(1-p);
    
    pushMatrix();
    translate(r*cos(a), r*sin(a));
    rotate(a-HALF_PI);
    for (int j = 1; j < 6; j++) {
      ellipse(0,j*2*k,j*k,j*k);
    }
    popMatrix();
  }
}
