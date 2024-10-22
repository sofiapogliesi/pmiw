// Sofía Pogliesi
// TP1 COM5
//

let circulo;
function preload() {
  circulo = loadImage('assets/circulo.jpg');
}

let posx, posy;
let fondo;
let colorantes;

function setup() {
  createCanvas(800, 400);
  noStroke();
  posx = 570;
  posy = 195;
  fondo = color(255);
  colorantes = fondo;
}

function draw() {
  background(fondo);
  fill(colorantes);
  image(circulo, 70, 42, 300, 300);

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

function nuevofondo(colorrandom) {
  let temp = fondo;
  fondo = colorrandom;
  return temp;
}

function keyPressed() {
  if (key === 'a') {
    fondo = color(255);
    posx = 570;
    posy = 195;
  } else if (key === 'h') {
    colorantes = nuevofondo(color(random(256), random(256), random(256)));
  } else if (key === 'j') {
    colorantes = nuevofondo(color(255));
  }
}
