function botonRectangular(texto, x, y, ancho, alto) {
  if (superficie(mouseX, mouseY, x, y, ancho, alto)) {
    fill(173, 216, 230);
  } else {
    fill(255);
  }
  rect(x, y, ancho, alto);
  if (superficie(mouseX, mouseY, x, y, ancho, alto)) {
    fill( 0);
  } else {
    fill(0);
  }
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
function superficie(mx, my, x, y, ancho, alto) {
  return mx > x && mx < x + ancho && my > y && my < y + alto;
}
