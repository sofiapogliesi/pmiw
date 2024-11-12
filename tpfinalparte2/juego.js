class Juego {
  constructor(cantidadEnemigos, mike, imagenesEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.imagenesEnemigos = imagenesEnemigos;
    this.boton = new Boton(100, 350, 100, 50, "Jugar");
    this.botoninicio = new Boton(width / 2, height / 2 + 100, 200, 50, "Reiniciar");
    this.botoncredito = new Boton(300, 350, 100, 50, "Creditos");
    this.crearPersonaje(mike);
    this.enemigos = []; // Inicializa el arreglo de enemigos vacío
    this.estado = 1; // Estado inicial del juego
    this.intervaloEnemigos = 100; // Cada cuantos cuadros se agrega un enemigo
    this.contadorCuadros = 0; // Contador para manejar el intervalo
    this.tiempoinicio = 0; 
    this.tiempofin = 500; 
  }

  mostrar(fondo, fondoganaste, fondoperdiste) {
    if (this.estado === 1) {
      background(fondo);
      textAlign(CENTER, CENTER);
      textSize(20);
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 70, 150, 40);
    pop();
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 200, 320, 40);
    pop();
      fill(255);
      text("Instrucciones:", width / 2, 70);
      text("- Presiona ENTER para disparar", width / 2, 200);
      this.boton.mostrar();
      this.botoncredito.mostrar();
    } else if (this.estado === 2) {
     background(fondo);
     this.actualizartiempo(); 
      this.dibujar();
      this.controlarColisiones();
      this.crearEnemigosContinuamente();
    } else if (this.estado === 3) {
      background(fondo);
      textAlign(CENTER, CENTER);
      textSize(30);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 150, 150, 50);
    pop();
      fill(255);
      text("¡Perdiste!", width / 2, 150);
      this.botoninicio.mostrar();
    }
    else if (this.estado === 4) {
      background(fondo); 
       textAlign(CENTER, CENTER);
      textSize(20);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 173, 320, 50);
    pop();
      fill(255);
      text("Florencia Moran y Sofia Pogliesi", 200, 173); 
      this.botoninicio.mostrar();
    }
        else if (this.estado === 5) {
       background(fondo);
      textAlign(CENTER, CENTER);
      textSize(30);
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(200, 150, 150, 50);
    pop();
      fill(255);
      text("¡Ganaste!", width / 2, 150); 
      this.botoninicio.mostrar();
    }
  }

  dibujar() {
    this.personaje.dibujar();
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
      enemigo.caer(); // Hace que los enemigos caigan constantemente
      if (enemigo.posY > height) { // Si el enemigo sale de la pantalla
        enemigo.reiniciar(); // Reinicia el enemigo en una nueva posición en la parte superior
      }
    }
    this.controlarDisparosAEnemigos();
    text("tiempo:" + this.tiempoinicio, 300, 30); 
  }

  crearEnemigosContinuamente() {
    this.contadorCuadros++;
    if (this.contadorCuadros >= this.intervaloEnemigos) {
      let posX = random(0, width - 50); // Genera una posición X aleatoria
      let imagenEnemigo = random(this.imagenesEnemigos); // Selecciona una imagen aleatoria
      this.enemigos.push(new Enemigo(posX, 0, imagenEnemigo)); // Agrega un nuevo enemigo en la parte superior
      this.contadorCuadros = 0; // Resetea el contador
    }
  }

  controlarColisiones() {
    for (let enemigo of this.enemigos) {
      if (enemigo.vida && this.colisionaConPersonaje(enemigo)) {
        this.personaje.reducirVida();
        enemigo.matar(); // El enemigo desaparece después de la colisión
        if (this.personaje.vidas <= 0) {
          this.estado = 3; // Cambia el estado al de "fin del juego" si las vidas llegan a 0
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

  mousePresionado() {
    if(this.estado === 1) {
      if(this.boton.clicEnBoton()) {
        this.estado = 2;
      }
      else if(this.botoncredito.clicEnBoton()) {
        this.estado = 4; 
      }
    }
    else if(this.estado === 3) {
      if(this.botoninicio.clicEnBoton()) {
        this.reiniciarJuego()   
      }
    }
    else if(this.estado === 4) {
      if(this.botoninicio.clicEnBoton()) {
        this.estado = 1;
      }
    }
        else if(this.estado === 5) {
      if(this.botoninicio.clicEnBoton()) {
        this.reiniciarJuego()
      }
    }
  }

  reiniciarJuego() {
    this.estado = 1;
    this.enemigos = []; // Vacía el arreglo de enemigos
    this.contadorCuadros = 0; // Resetea el contador de cuadros
    this.personaje.vidas = 3; // Restablece las vidas del personaje
    this.personaje = new Personaje(width / 2, 300, this.personaje.imagen);
    this.tiempoinicio = 0; 
  }

actualizartiempo() {
  if(this.estado === 2) {
    this.tiempoinicio ++; 
    if(this.tiempoinicio >= this.tiempofin) {
      this.estado = 5; 
    }
  }
}

  crearPersonaje(imagen) {
    this.personaje = new Personaje(width / 2, 300, imagen);
  }

  teclaPresionada(keyCode) {
    if (this.estado === 2) {
      this.personaje.teclaPresionada(keyCode);
    }
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haDisparadoBala()) {
      for (let enemigo of this.enemigos) {
        enemigo.haTocadoLaBala(this.personaje.bala);
      }
    }
  }
}
