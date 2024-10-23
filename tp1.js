// Sofía Pogliesi
// TP1 COM5
//

let circulo;
function preload() {
  circulo = loadImage('assets/circulo.jpg');
}

let posx, posy;
let fondo;

function setup() {
  createCanvas(800, 400);
  noStroke();
  posx = 570;
  posy = 195;
  fondo = color(255);
  reset();
}

function draw() {
  background(fondo);
  fill(255);
  rect(0, 0, 400, 400);
  image(circulo, 70, 42, 310, 310);

  for (let i = 300; i >= 30; i -= 30) {
    for (let j = 30; j <= i; j += 30) {
      let fillColor;
      if (mouseIsPressed) {
        fillColor = (j % 60 == 0) ? color(255) : color(random(256), random(256), random(256));
      } else {
        fillColor = (j % 60 == 0) ? color(255) : color(0);
      }
      fill(fillColor);
      ellipse(posx, posy, j, j);
    }
  }

  if (keyIsPressed) {
    if (key === 's') {
      posx -= 5;
      if (posx > width) posx = 0;
    }
    if (key === 'd') {
      posx += 5;
      if (posx < 0) posx = width;
    }
    if (key === 'f') {
      posy -= 5;
      if (posy < 0) posy = height;
    }
    if (key === 'g') {
      posy += 5;
      if (posy > height) posy = 0;
    }
  }
}

function mouseClicked() {
  fondo = color(random(256), random(256), random(256));
}

function keyPressed() {
  if (key === 'a') {
    reset();
  } else if (key === 'l') {
    let nuevo = nuevocolorfondo(color(600, 0, 600), color(300, 300, 0));
    fondo = nuevo;
  }
}

function reset() {
  posx = 570;
  posy = 195;
  fondo = color(255);
}

function nuevocolorfondo(color1, color2) {
  let h = (red(color1) + red(color2)) / 2;
  let j = (green(color1) + green(color2)) / 2;
  let k = (blue(color1) + blue(color2)) / 2;
  return color(h, j, k);
}
