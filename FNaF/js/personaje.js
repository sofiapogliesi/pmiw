class Personaje {
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen;
    this.bala = new Bala(this.posX, this.posY);
    this.vidas = 3; // Asignamos 3 vidas al personaje
  }

  dibujar() {
    this.bala.dibujar();

    if (this.imagen) {
      image(this.imagen, this.posX, this.posY, 65, 65); // Dibujar el personaje con la imagen
    }else {
      console.error("La imagen del personaje no está cargada.");
     }

    // Mostrar el número de vidas en pantalla
    textSize(18);
         rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(50, 30, 80, 30);
    pop();
    fill(255);
     text("Vidas: " + this.vidas, 50, 30); 
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === ENTER) {
      this.dispararBala();
    }
  }

  moverDerecha() {
    this.posX += 10;
  }

  moverIzquierda() {
    this.posX -= 10;
  }

  dispararBala() {
    if (!this.bala.disparada) {
      // Disparar la bala desde la posición actual del personaje
      this.bala.disparar(this.posX + 10, this.posY);
   
    }
  }

  haDisparadoBala() {
    return this.bala.disparada;
  }

  reducirVida() {
    this.vidas--;
   
  }
}
