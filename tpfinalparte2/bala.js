class Bala {
  // inicializa objetos 
  // posiciones y disparada
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

// crea bala 
  dibujar() {
    if (this.disparada) {
      fill(0); // negro
      ellipse(this.posX, this.posY, 5, 5); // círculo 
      this.mover(); // mueve y recetea bala 
    }
  }

// mueve y recetea bala 
  mover() {
    this.posY -= 5; // de abajo para arriba 
    if (this.posY < 0) { // bala sale de pantalla 
      this.reset(); // recetea bala
    }
  }
  
  // dispara bala 
 disparar(posX, posY) {
    this.posX = posX; // bala sale de la posición del personaje principal 
    this.posY = posY;
    this.disparada = true; // disparo de bala 
    sonido.play(); // suena sonido de disparo 
  }

// no disparo bala 
  reset() {
    this.disparada = false; // no hay disparo de bala 
    this.posY = -10; // bala fuera de pantalla 
  }
}
