    class Enemigo {
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.velocidad = 2;
    this.imagen = imagen;
  }

  caer() {
    this.posY += this.velocidad;
  }

  dibujar() {
    if (this.vida) {
      image(this.imagen, this.posX, this.posY, 60, 70);
    }
  }

  matar() {
    this.vida = false;
  }

  reiniciar() {
    this.posX = random(0, width - 50); // Nueva posición X aleatoria
    this.posY = 0; // Vuelve a la parte superior
    this.vida = true; // Reactiva la vida del enemigo
  }

  haTocadoLaBala(bala) {
    if (this.vida && dist(this.posX, this.posY, bala.posX, bala.posY) < 25) {
      this.matar();
      bala.reset();
    }
  }
}
