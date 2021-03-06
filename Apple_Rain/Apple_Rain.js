var streams = [];
var fadeInterval = 50;
var symbolSize = 100;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight );
  background(0);
  frameRate(30);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
 // livep5;
  background(0, 150);
  textSize(random(20, 15, 25));
  streams.forEach(function(stream) {
    stream.render();
  }
  );
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  //this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 20));

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType > 1) this.value = "apple";
      else this.value = round(random(0, 90));
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}
function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 20));
  this.speed = random(5, 22);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol( x, y, this.speed, first, opacity);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (200 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(255);
      } else {
        fill(255);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    }
    );
  };
}
