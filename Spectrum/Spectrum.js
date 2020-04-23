
var mic, fft;

function setup() {
   createCanvas(window.innerWidth,window.innerHeight);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);
   stroke(255);
   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i*2.3, map(spectrum[i], 0, 600, height, 0) );
   }
   endShape();
}
