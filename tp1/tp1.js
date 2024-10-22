// Sofía Pogliesi
// TP1 COM5
//

let circulo;
function preload () {
  circulo = loadImage ('assets/circulo.jpg');
}

let posx, posy;
let fondo;

function setup() {
  createCanvas(800, 400);
  image(circulo);
  noStroke();
  posx = 570;
  posy = 195;
  fondo = color(255);
}

function draw() {
  background(fondo);
  image(circulo, 70, 42, 300, 300);

  for (let i = 300; i >= 30; i -= 30) {
    let fillColor;
    if (mouseIsPressed) {
      fillColor = (i % 60 == 0) ? color(255) : color(random(256), random(256), random(256));
    } else {
      fillColor = (i % 60 == 0) ? color(255) : color(0);
    }
    fill(fillColor);
    ellipse(posx, posy, i, i);
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
    if (key === 'h') {
      fondo = color(random(256), random(256), random(256))
    }
  }

  function aplicarcolorrandom(tamaño) {
    if (mouseIsPressed) {
      return (tamaño % 60 == 0) ? color(255) : color(random(256), random(256), random(256));
    } else {
      return (tamaño % 60 == 0) ? color(255) : color(0);
    }
  }
}

function keyPressed() {
  if (key === 'a') {
    fondo = color(255);
    posx = 570;
    posy = 195;
  }
}
