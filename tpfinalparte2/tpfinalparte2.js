//Sofía Pogliesi - Florencia Morán 
// TPFINALPARTE2 COM5
// https://youtu.be/qGEG-mPi_RM

// código del videojuego fnaf = uso de variables globales y locales - clases con objetos dentro 

// declara variables 
let principal; // clase 
let freddy, chica, bonnie, foxy, fondo, mike; // imagenes 
let sonido; // sonido 

// carga imagenes y sonido 
function preload() { 
  // personajes - fondo - disparo 
  mike = loadImage("data/personaje.png"); 
  freddy = loadImage("data/freddy.png"); 
  chica = loadImage("data/chica.png"); 
  bonnie = loadImage("data/bonnie.png"); 
  foxy = loadImage("data/foxy.png");  
  fondo = loadImage("data/fondo.jpg");
  sonido = loadSound("libraries/misonido.mp3");
}

// configura 
function setup() {
  // tamaño del videojuego y personajes 
  createCanvas(640, 480);
  principal = new Principal(4, mike, [freddy, chica, bonnie, foxy]);
}

// ejecuta 
function draw() { 
  // clase principal como punto de partida 
  principal.dibujar();
}

// mueve personaje principal 
function keyPressed() {
  if (principal.estado === 2) { // si está en la pantalla del juego
    principal.Juego.teclaPresionada(keyCode); 
  }
}

// pasa pantallas
function mousePressed() {
  principal.mousePresionado();
}
