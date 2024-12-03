class Boton {
  // inicializa objetos 
  // coordenadas - ancho - alto - texto 
  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;

  }

// cambia el color del botón y texto al poner el mouse encima 
  mostrar() { push(); 
    if(this.clicEnBoton(this.x, this.y, this.ancho, this.alto)) {
       fill(173, 216, 230);
  } else {
    fill(255);
    strokeWeight(3); 
    stroke(0);
  }
      rect(this.x, this.y, this.ancho, this.alto);
    pop();
     if(this.clicEnBoton(this.x, this.y, this.ancho, this.alto)) {
       fill(173, 216, 230);
  } else {
    fill(255);
  }
    
    fill(0); 
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.texto, this.x, this.y);
    }

// verifica si las coordenadas del mouse están dentro de los límites dados para dicho botón
  clicEnBoton() {
    return mouseX >= this.x - this.ancho / 2 &&
      mouseX <= this.x + this.ancho / 2 &&
      mouseY >= this.y - this.alto / 2 &&
      mouseY <= this.y + this.alto / 2;
  }
}
