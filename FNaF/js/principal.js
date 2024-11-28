class Principal {
  constructor() {
   this.Juego = new Juego(10, mike, [freddy, chica, bonnie, foxy]);
    this.pantalla = new Pantalla(fondo);
    this.estado = 1; // Estado inicial: Pantalla de inicio
  }

  dibujar() {
    if (this.estado === 1) {
      this.pantalla.pantallaInicio(); // Mostrar pantalla de inicio
    } else if (this.estado === 2) {
      background(fondo);
   this.Juego.crearEnemigosContinuamente(); // Crear enemigos continuamente
    this.Juego.actualizarTiempo(); 
     
   this.Juego.dibujar();
    } else if (this.estado === 3) {
                 console.log("estado igual 3 dmodsmcijdncijndicnds");

      this.pantalla.pantallaPerdiste(); // Mostrar pantalla de perder
    } else if (this.estado === 4) {
      this.pantalla.pantallaCredito(); // Mostrar pantalla de créditos
    } else if (this.estado === 5) {
      this.pantalla.pantallaGanar(); // Mostrar pantalla de ganar
    }
  }

  mousePresionado() {
    if (this.estado === 1) {
      if (this.pantalla.boton.clicEnBoton()) {
         console.log("Botón 'Jugar' presionado."); // Debug
        this.estado = 2; // Cambia al estado del juego
      } else if (this.pantalla.botoncreditos.clicEnBoton()) {
        this.estado = 4; // Cambia a la pantalla de créditos
      }
    } else if (this.estado === 3 || this.estado === 5) {
      if (this.pantalla.botoninicio.clicEnBoton()) {
        this.reiniciarJuego();
      }
    } else if (this.estado === 4) {
      if (this.pantalla.botoninicio.clicEnBoton()) {
        this.estado = 1; // Vuelve al inicio
      }
    }
    else if (this.estado === 2) {
      if (this.pantalla.botoninicio.clicEnBoton()) {
        this.estado = 1; // Vuelve al inicio
      }
    }
  }

    reiniciarJuego() {
    this.estado = 1;
    this.Juego.reiniciarJuego();  // Llamar al método reiniciar del juego
  }
}
