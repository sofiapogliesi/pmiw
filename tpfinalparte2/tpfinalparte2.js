//Sofía Pogliesi - Florencia Morán 
// TPFINALPARTE2 COM5
//

let principal;
let freddy, chica, bonnie, foxy, fondo, mike;
let sonido;

function preload() {
  // Cargar las imágenes antes de que el sketch comience
  mike = loadImage("data/personaje.png"); // Imagen del personaje
  freddy = loadImage("data/freddy.png"); // Imagen de Freddy
  chica = loadImage("data/chica.png"); // Imagen de Chica
  bonnie = loadImage("data/bonnie.png"); // Imagen de Bonnie
  foxy = loadImage("data/foxy.png"); // Imagen de Foxy
  
  fondo = loadImage("data/fondo.jpg");
  sonido = loadSound("libraries/misonido.mp3");
}

function setup() {
  createCanvas(600, 480);
  principal = new Principal(4, mike, [freddy, chica, bonnie, foxy]);
}

function draw() {
  principal.dibujar();
}

function keyPressed() {
  if (principal.estado === 2) { // Asegúrate de estar en el estado de juego
    principal.Juego.teclaPresionada(keyCode); // Pasar la tecla al personaje
  }
}

function mousePressed() {
  principal.mousePresionado();
}
