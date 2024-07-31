function setup() {
  createCanvas(1000, 800);
   background("white");
}


function draw() {
  
  stroke ("blue");
  fill ("red");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
    circle (mouseX, mouseY, 20, 35);
  }
}
