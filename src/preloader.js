export default class Preloader {
    constructor(args = {}) {
        this.points = args.points || []; // Array to hold points
        this.stroke = args.stroke || color(255,0,0); // Stroke color
        this.strokeWeight = args.strokeWeight || 1; // Stroke weigh
    }
 addPoint(p) {
        this.points.push(p); // Add a point to the array
    }

    draw() {
      
        stroke(this.stroke); // Set stroke color
        strokeWeight(this.strokeWeight); // Set stroke weight
        noFill(); // Disable fill for the shape
        beginShape(); // Start drawing the shape
        this.points.forEach((p)  => {
            vertex(p.x, p.y); // Draw each point as a vertex
        });
        endShape(); // End the shape
    }
}
