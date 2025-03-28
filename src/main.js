var mouse = {
  x: 0,
  y: 0
}
var cuad = {
  x: 0,
  y: 0
}
var friction_a = 0.1;
var friction_b = 0.05;
window.setup = () => {
 createCanvas(windowWidth, windowHeight);
 background('black');
 mouse = createVector(mouseX, mouseY);
 cuad = createVector(mouseX, mouseY);
};

// p5.js draw function
window.draw = () => {
 background('black');
  mouse.x += (mouseX - mouse.x) * friction_a;
  mouse.y += (mouseY - mouse.y) * friction_a;
  cuad.x += (mouseX - cuad.x) * friction_b;
  cuad.y += (mouseY - cuad.y) * friction_b;
  ellipse(cuad.x, cuad.y, 15, 15);
fill(255, 0, 0);
  ellipse(mouse.x, mouse.y, 10, 10);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  if (mouseIsPressed) {
    fill(0, 0, 200);
  }
  else {
    fill(255);
  }

};

// p5.js windowResized function
window.windowResized = () => {
resizeCanvas(windowWidth, windowHeight);
background('black'); // Reset background after resizing
};
