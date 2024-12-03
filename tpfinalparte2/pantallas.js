class Pantalla {
  // inicializa objetos 
  // fondo y botones
constructor(pantalla, textos) {
this.imagen = fondo
this.boton = new Boton( 200, 350, 100, 50, "Jugar");
this.botoncreditos = new Boton(400, 350, 100, 50, "Creditos");
this.botoninicio = new Boton(300, 300, 100, 50, "Inicio");

}

// crea botones en pantalla de inicio
pantallaInicio(){
 background(fondo);
 
      textAlign(CENTER, CENTER);
      textSize(20);
      
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(320, 70, 150, 40);
    pop();
    
             rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(320, 200, 320, 40);
    pop();
      fill(255);
      
      text("Instrucciones:", width / 2, 70);
      text("- Presiona ENTER para disparar", width / 2, 200);
      
      this.boton.mostrar(); // jugar 
      this.botoncreditos.mostrar();
}

// crea botones en pantalla de ganar  
pantallaGanar(){
 background(fondo);
 
      textAlign(CENTER, CENTER);
      textSize(23);
      
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(300, 173, 140, 45);
    pop();
      fill(255);
      
      text("¡Ganaste!", 300, 173); 
      
      this.botoninicio.mostrar();
}

// crea botones en pantalla de perder 
pantallaPerdiste(){
  background(fondo);
  
      textAlign(CENTER, CENTER);
      textSize(23);
      
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(300, 173, 140, 45);
    pop();
      fill(255);
      
      text("¡Perdiste!", 300, 173);
      
      this.botoninicio.mostrar();
}

// crea botones en pantalla de créditos 
pantallaCredito(){
  background(fondo); 
  
       textAlign(CENTER, CENTER);
      textSize(20);
      
       rectMode(CENTER);
    fill(0);
    push();
    strokeWeight(3);
    stroke(255);
    rect(290, 173, 310, 45);
    pop();
      fill(255);
      
      text("Florencia Moran - Sofia Pogliesi", 290, 173); 
      
      this.botoninicio.mostrar();
}
}
