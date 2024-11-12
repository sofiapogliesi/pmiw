let objJuego;
let mike;
let freddy, chica, bonnie, foxy;
let fGanas, fPerdes, bg;
let sonido; 

function preload() {
  // Cargar las imágenes antes de que el sketch comience
  mike = loadImage("data/personaje.png");  // Imagen del personaje
  freddy = loadImage("data/freddy.png");  // Imagen de Feddy
  chica = loadImage("data/chica.png");  // Imagen de Chica
  bonnie = loadImage("data/bonnie.png");  // Imagen de Bonnie
  foxy = loadImage("data/foxy.png");  // Imagen de Foxi
  bg = loadImage('data/fondo.jpg');
   sonido = loadSound("libraries/misonido.mp3");  
}

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego(4, mike, [freddy, chica, bonnie, foxy]);
}

function draw() {
  objJuego.mostrar(bg, fGanas, fPerdes);
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function mousePressed() {
  objJuego.mousePresionado();
}
