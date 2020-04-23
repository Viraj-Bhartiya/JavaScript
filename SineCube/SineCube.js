let angle = 0;
let w = 18;
let ma;
let maxD;

function setup() {
	//frameRate(120);
	//createCanvas(windowWidth, windowHeight, WEBGL);
	createCanvas(900, 900, WEBGL);
	noCursor();
	//ortho(-400, 400, 400, -400, 100, 15000);
	scale(0.6);
	ortho(-750, 750, 750, -750, 0, 5000);
	ma = asin(1 / sqrt(2));
	maxD = dist(0, 0, 200, 200);
}

function draw() {
	background(0);
	orbitControl();

	rotateX(ma);
	rotateY(-QUARTER_PI);

	for (let z = 0; z < height; z += w) {
		for (let x = 0; x < width; x += w) {
			push();
			let d = dist(x, z, width / 2, height / 2);
			let offset = map(d, 0, maxD, -PI, PI);
			let a = angle + offset;
			let h = map(sin(a), -1, 1, 2, 400);
			translate(x - width / 2, 0, z - height / 2);
			normalMaterial();
			//ambientMaterial(10, 80, 90, 20);
			//specularMaterial(55, 26, 28, 10);
			box(w - 2, h, w - 2);
			//sphere(w, h, w);

			pop();
		}
	}
	angle -= 0.1;
}
