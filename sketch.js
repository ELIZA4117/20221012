
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill()
  stroke(255)
  rectMode(CENTER)


  for(var j=0;j<(height/50);j++)
   for(var i=0;i<(width/50);i=i+1)
  {
  ellipse(25+(i*50),25+(j*50),50+mouseX/10)
  stroke(241,91+mouseX%256,181)
  rect(25+(i*50),25+(j*50),50)
  stroke(0,245,212)
  ellipse(50+(i*50),50+(j*50)+mouseY/5)
  stroke(255)
  }
}