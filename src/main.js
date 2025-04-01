class Point {
  constructor(args) {
    this.position = createVector(args.x || 0,args.y || 0 );
    this.fill = args.fill  || 'white';
    this.size = args.size || 10;
    this.stroke = args.stroke || 'black';
    this.opacity = args.opacity ||1; 
    this.friction = args.friction || 0.1;
  }

draw() {
  fill(this.fill);
  noStroke();
  ellipse(this.position.x, this.position.y, this.size);
}

  update(mouse) {
    this.position.x += (mouseX-this.position.x) * this.friction;
    this.position.y += (mouseY-this.position.y) * this.friction;
     
  }
}
let point_a;
let point_b;

window.setup = (event) => {
  point_a = new Point({  //esto es una instancia de la clase Point
  fill : 'blue',
  friction : 0.05,
  });
point_b = new Point({  //esto es una instancia de la clase Point
    fill : 'magenta',
    friction : 0.10,

    });
    
   createCanvas(windowWidth, windowHeight);
};

// p5.js draw function
window.draw = () => {
 background('black');
 point_a.update();
 point_a.draw();

 point_b.update();
  point_b.draw();


};

// p5.js windowResized function
window.windowResized = () => {
resizeCanvas(windowWidth, windowHeight);
background('black'); // Reset background after resizing
};
