function setup() {
    createCanvas(400, 400);
    redR =floor(random(0,255));
    greenR =floor(random(0,255));
    blueR =floor(random(0,255));
    print(redR,greenR,blueR);
    noLoop();
    noStroke();
  }
  
  function draw() {
    background(220);
    fill (redR,greenR,blueR);
    print(redR,greenR,blueR);
    circle (200,100, 100);
      
  //   //Monocromo 
    fill (redR+40,greenR+40,blueR+40);
    print ("+",redR+40,greenR+40,blueR+40);
    circle (100,150, 100);
    
    fill (redR-40,greenR-40,blueR-40);
    print ("-",redR-40,greenR-40,blueR-40);
    circle (300,150, 100);
}