import Preloader from "./preloader.js"; // Import the Point class
import Line from "./line.js"; // Import the Line class


let lines = []; // Array to hold lines
let _line = null; // Array to hold points
const redoBtn = document.getElementById('.redo');
const erreaserBtn = document.getElementById('.erreaser');
redoBtn.addEventListener('click', () => {
});

erreaserBtn.addEventListener('click', () => {
});


window.setup = (event) => {
 createCanvas(windowWidth, windowHeight);
};
window.mousePressed = (event) => {
  _line = new Line({
    stroke: color (random(255), random(255), random (255)), // Random stroke color
    strokeWeight: random (1, 10), 
  });
  lines.push(_line); // Add the line to the array
};
/*
window.mouseDragged = (event) => {   
    mouse_IsPressed = false;
  const p = createVector(event.x, event.y); // Get the current mouse position
   _line.points.push(p); // Clear the line when the mouse is released
}
*/


window.mouseDragged = (event) => {
   
const p = createVector(mouseX, mouseY);
_line.addPoint(p); // Add the current mouse position to the line
  
};

window.draw = (event) => {
  background(0); // Set background color
  lines.forEach((line) =>  line.draw()) // Draw each line in the array

};

// p5.js windowResized function
window.windowResized = (event) => {
resizeCanvas(windowWidth, windowHeight);
// Reset background after resizing
};
