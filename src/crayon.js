import Line from ".js/crayon/line.js"; // Import the Line class
let lines = []; // Array to hold lines
let _line = []; // Array to hold points

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
    background('white'); // Set background color
lines.forEach((Line) => line.draw()); // Draw each line in the array
};

window.draw = (event) => {
  background(0); // Set background color
  lines.forEach((Line) =>  line.draw()) // Draw each line in the array

};

// p5.js windowResized function
window.windowResized = (event) => {
resizeCanvas(windowWidth, windowHeight);
// Reset background after resizing
};
