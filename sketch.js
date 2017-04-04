function setup(){
    createCanvas(600,400);
    background(66, 244, 191)
}

function draw(){
    flower(600, 200);
    flower(500, 200);
    flower(400, 200);
    flower(300, 200);
    flower(200, 200);
    flower(100, 200);
    
    if(mouseIsPressed){
        flower(mouseX, mouseY)
    }
    
    //extra designs :)
    fill(149, 244, 65);
    rect(0, 299, 600, 100);
    fill(255, 255, 0);
    ellipse(600, 0, 150, 150);
}

function flower(x,y){
    noStroke();
    //stem
    fill(149, 244, 65);
    rect(x-5,y,10,100);
    
    //peddles :)(the petals)
    fill(255, 0, 139);
    ellipse(x-10, y+10, 35, 35);
    ellipse(x+10, y+10, 35, 35);
    ellipse(x-10, y-10, 35, 35);
    ellipse(x+10, y-10, 35, 35);
    
    //Middle circle
    fill(252, 148, 205);
    ellipse(x, y, 35, 35);
    
    //bulb
    fill(255,255,0);
    ellipse(x,y,25,25);
    
}