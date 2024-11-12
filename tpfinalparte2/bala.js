class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      this.mover();
    }
  }

  mover() {
    this.posY -= 5;
    // Si la bala sale de la pantalla, se resetea automáticamente
    if (this.posY < 0) {
      this.reset();
    }
  }

  disparar(posX, posY) {
    this.posX = posX; // Colocar la bala en la posición actual del personaje
    this.posY = posY;
    this.disparada = true;
    sonido.play(); 
  }

  reset() {
    this.disparada = false;
    this.posY = -10; // Coloca la bala fuera de la pantalla cuando no se dispara
  }
}
