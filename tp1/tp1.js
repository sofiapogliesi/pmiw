// Sofía Pogliesi 
// TP1 COM5 
// 

let circulo;
function preload() {
    circulo = loadImage('assets/circulo.jpg'); 
}

let posx, posy;
let fondo;

function setup() {
    createCanvas(800, 400);
    image(circulo);
    noStroke();
    
    const initialValues = init(570, 195, color(255));
    posx = initialValues.posx;
    posy = initialValues.posy;
    fondo = initialValues.fondo;
}

function draw() {
    background(fondo);
    image(circulo, 70, 42, 300, 300);

    for (let i = 300; i >= 30; i -= 30) {
        let fillColor;
        if (mouseIsPressed) {
            fillColor = (i % 60 == 0) ? color(255) : color(random(256), random(256), random(256));
        } else {
            fillColor = (i % 60 == 0) ? color(255) : color(0);
        }
        fill(fillColor);
        ellipse(posx, posy, i, i);
    }

    if (keyIsPressed) {
        if (key === 's') {
            posx -= 5;
            if (posx > width) posx = 0;
        }
        if (key === 'd') {
            posx += 5;
            if (posx < 0) posx = width;
        }
        if (key === 'f') {
            posy -= 5;
            if (posy < 0) posy = height;
        }
        if (key === 'g') {
            posy += 5;
            if (posy > height) posy = 0;
        }
        
        if (key === 'a') {
            reset();
        }
    }
}

function mouseClicked() {
    fondo = color(random(256), random(256), random(256));
}

function init(x, y, bgColor) {
    return {
    posx: x,
    posy: y,
    fondo: bgColor
    }
}
function reset() {
    const resetValues = init(570, 195, color(255)); 
    posx = resetValues.posx;
    posy = resetValues.posy;
    fondo = resetValues.fondo;
}
