class Personaje {
  //inicializa objetos 
  // posiciones - personaje principal - bala - vidas
  constructor(posX, posY, imagen) { 
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen;
    this.bala = new Bala(this.posX, this.posY);
    this.vidas = 3; 
  }

// crea bala - personaje principal - vidas 
  dibujar() { // dibuja la bala
    this.bala.dibujar(); 

    if (this.imagen) { // dibuja al personaje con la imagen 
      image(this.imagen, this.posX, this.posY, 65, 65); 
    }else {
      console.error("La imagen del personaje no está cargada."); // inspecciona 
     }

    // dibuja un réctangulo con la cantidad de vidas dentro 
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

// mueve personaje principal 
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
    this.posX += 10; // izquierda 
  }

  moverIzquierda() { // derecha 
    this.posX -= 10;
  }

// dispara bala 
  dispararBala() { // dispara la bala desde la posición del personaje principal 
    if (!this.bala.disparada) { 
      this.bala.disparar(this.posX + 10, this.posY);
   
    }
  }

// reincia bala 
  haDisparadoBala() {
    return this.bala.disparada;
  }

// reduce vida 
  reducirVida() {
    this.vidas--;
   
  }
}
