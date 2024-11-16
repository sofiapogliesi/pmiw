class Juego {
  constructor(cantidadEnemigos, mike, imagenesEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.imagenesEnemigos = imagenesEnemigos;
    
    this.crearPersonaje(mike);
    this.enemigos = []; // Inicializa el arreglo de enemigos vacío
    
    this.intervaloEnemigos = 80; // Cada cuantos cuadros se agrega un enemigo
    this.contadorCuadros = 0; // Contador para manejar el intervalo
    this.tiempoTranscurrido = 0
    this.tiempoLimiteCuadros = 1000;
  }

 

 dibujar() {
   console.log("dibujando juego.");
    this.personaje.dibujar();
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      enemigo.dibujar();
      enemigo.caer();
      if (enemigo.posY > height) {
        enemigo.reiniciar();
      }
    }
    this.controlarColisiones();
    this.controlarDisparosAEnemigos();
        textSize(18);
         rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(560, 30, 120, 30);
    pop();
    fill(255);
    text("Tiempo: " + this.tiempoTranscurrido, 560, 30);
  }

  crearEnemigosContinuamente() {
    console.log("creando enemigo.");
    this.contadorCuadros++;
    if (this.contadorCuadros >= this.intervaloEnemigos) {
      let posX = random(0, width - 50);
      let imagenEnemigo = random(this.imagenesEnemigos);
      this.enemigos.push(new Enemigo(posX, 0, imagenEnemigo));
      this.contadorCuadros = 0;
    }
  }


   controlarColisiones() {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      if (enemigo.vida && this.colisionaConPersonaje(enemigo)) {
        this.personaje.reducirVida();
        enemigo.matar();
        if (this.personaje.vidas <= 0) {
          
          principal.estado = 3
           console.log("Juego terminado: todas las vidas perdidas.");
        }
      }
    }
  }

  colisionaConPersonaje(enemigo) {
    return (
      enemigo.posX < this.personaje.posX + 50 &&
      enemigo.posX + 50 > this.personaje.posX &&
      enemigo.posY < this.personaje.posY + 50 &&
      enemigo.posY + 50 > this.personaje.posY
      );
  }

 

 

  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }

  teclaPresionada(keyCode) {
  if (this.personaje) {
    this.personaje.teclaPresionada(keyCode);
  }
}
  actualizarTiempo() {
    this.tiempoTranscurrido++;
    if (this.tiempoTranscurrido >= this.tiempoLimiteCuadros) {
        console.log("Ganaste. Tiempo límite alcanzado.");
        principal.estado = 5; // Cambia a "Ganaste"
    }
}
reiniciarJuego() {
  this.estado = 1;
     this.tiempoTranscurrido = 0;
    this.enemigos = []; // Vacía el arreglo de enemigos
    this.contadorCuadros = 0; // Resetea el contador de cuadros
    this.personaje.vidas = 3; // Restablece las vidas del personaje
    this.personaje = new Personaje(width / 2, 300, this.personaje.imagen);

    this.temporizador = null;
  }
 controlarDisparosAEnemigos() {
  if (this.personaje.haDisparadoBala()) {
    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      enemigo.haTocadoLaBala(this.personaje.bala);
    }
  }
}
}
