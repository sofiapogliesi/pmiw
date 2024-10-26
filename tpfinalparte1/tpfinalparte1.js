// Sofía Pogliesi - Florencia Morán 
// TPFINALPARTE1 COM5
// https://youtu.be/Ga6-AMrTiCA

let pantalla = 1;
let textos = [];
let fondos = [];
let sonido;
function preload() {
   terrorFont = loadFont('libraries/terror_pro.ttf');
  sonido = loadSound('libraries/miSonido.mp3');
   sonido1 = loadSound('libraries/miSonido1.mp3');
  for (let i = 1; i <= 23; i++) { fondos[i] = loadImage("libraries/pantalla" + i + ".jpeg"); }
  }

function setup() {
  textFont(terrorFont);
  createCanvas(640, 480);
  textos = loadStrings("libraries/textos.txt");
  console.log( textos );
 
}

function draw() {
  background(25);  
  transicion();  
}

function transicion() {
  if (pantalla === 1) {
    mostrarpantalla(1, textos, [["inicio", 80, 400], ["creditos", 350, 400]]);
  } else if (pantalla === 3) {
    mostrarpantalla(3, textos, [["inicio", 350, 400]]);
  } else if (pantalla === 2) {
    mostrarpantalla(2, textos, [["camara", 80, 400], ["pasillo", 350, 400]]);
  } else if (pantalla === 4) {
    mostrarpantalla(4, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 5) {
    mostrarpantalla(5, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 6) {
    mostrarpantalla(6, textos, [["volver", 80, 400], ["seguir", 350, 400]]);
  } else if (pantalla === 7) {
    mostrarpantalla(7, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 8) {
    mostrarpantalla(8, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 9) {
    mostrarpantalla(9, textos, [["izquierda", 80, 400], ["derecha", 350, 400]]);
  } else if (pantalla === 10) {
    mostrarpantalla(10, textos, [["volver", 350, 400]]);
  } else if (pantalla === 11) {
    mostrarpantalla(11, textos, [["volver", 350, 400]]);
  } else if (pantalla === 12) {
    mostrarpantalla(12, textos, [["cerrar la puerta", 80, 400], ["esconderse", 350, 400]]);
  } else if (pantalla === 13) {
    mostrarpantalla(13, textos, [["srguir", 350, 400]]);
  } else if (pantalla === 14) {
    mostrarpantalla(14, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 15) {
    mostrarpantalla(15, textos, [["volver", 350, 400]]);
  } else if (pantalla === 16) {
    mostrarpantalla(16, textos, [["izquierda", 80, 400], ["derecha", 350, 400]]);
  } else if (pantalla === 17) {
    mostrarpantalla(17, textos, [["volver", 350, 400]]);
  } else if (pantalla === 18) {
    mostrarpantalla(18, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 19) {
    mostrarpantalla(19, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 20) {
    mostrarpantalla(20, textos, [["otra salida", 80, 400], ["prender fuego", 350, 400]]);
  } else if (pantalla === 21) {
    mostrarpantalla(21, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 22) {
    mostrarpantalla(22, textos, [["seguir", 350, 400]]);
  } else if (pantalla === 23) {
    mostrarpantalla(23, textos, [["volver", 350, 400]]);
  }
}

function mostrarpantalla(pantalla, texto, botones = []) {
  image(fondos[pantalla], 0, 0, width, height);  
  textAlign(CENTER);
  textSize(20);
  fill(250);
 
  
  text(textos[pantalla - 1], 0, 100, width, height);

  
  for (let boton of botones) {
    botonRectangular(boton[0], boton[1], boton[2], 200, 60); 
  }
}

function mousePressed() {
  if (pantalla === 1) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 2;
      sonido1.play();
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 3;
    }
  } else if ( pantalla === 3 ) {
    if ( superficie ( mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla=1;
    }
  } else if (pantalla === 2) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 4;
      sonido.play
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 5;
      sonido1.stop();
      sonido.play();
    }
  } else if (pantalla === 5) {

    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 6;
      sonido0.stop();
      sonido1.play();
    }
  } else if (pantalla === 6) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 7;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 8;
    }
  } else if (pantalla === 8) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 9;
    }
  } else if (pantalla === 9) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 10;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 11;
    }
  } else if (pantalla === 10) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 11) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 4) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 12;
    }
  } else if (pantalla === 12) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 13;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 14;
    }
  } else if (pantalla === 14) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 15;
    }
  } else if (pantalla === 15) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 7) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 13;
    }
  } else if (pantalla === 13) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 16;
    }
  } else if (pantalla === 16) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 17;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 18;
    }
  } else if (pantalla === 18) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 19;
    }
  } else if (pantalla === 17) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 19) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 20;
    }
  } else if (pantalla === 20) {
    if (superficie(mouseX, mouseY, 80, 400, 200, 60)) {
      pantalla = 21;
    } else if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 22;
    }
  } else if (pantalla === 21) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  } else if (pantalla === 22) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 23;
    }
  } else if (pantalla === 23) {
    if (superficie(mouseX, mouseY, 350, 400, 200, 60)) {
      pantalla = 1;
    }
  }
}
