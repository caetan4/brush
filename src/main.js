import  Point from './js/complements/points.js'; // Import the Point class

const PALETTE = ['rgb(182, 222, 127)','rgb(239,172,165)','rgb(62, 132, 64)']; 
const TOTAL_POINTS = 10; // Number of points
const bg = PALETTE[Math.floor(Math.random() * PALETTE.length)]; // Random background color
let points = []; // Array to hold points

window.setup = (event) => {
  for (let i = 1; i < TOTAL_POINTS; i++) {
    const randomColor = PALETTE[Math.floor(Math.random() * PALETTE.length)];
   
    const point = new Point({
     stroke: 0,
     fill: randomColor,
     size: 30 - (20 * i),
     friction: i * 0.01,
    })
    points.push(point);
    
 }
 createCanvas(windowWidth, windowHeight);
};

// p5.js draw function
window.draw = (event) => {
 background('white'); // Set background color
  for (let i = 0; i < points.length; i++) {
    points[i].draw();
  }
};

// p5.js windowResized function
window.windowResized = (event) => {
resizeCanvas(windowWidth, windowHeight);
background(rgb(247,239,218)); // Reset background after resizing
};
