function setup(){
    //create canvas
    createCanvas(900, 400);
    // change the frame rate to make slower
    frameRate(10);
}

function draw(){ 
    // Set the background to black and turn off the fill color
    background(0);
    noFill(); //no fill in shapes

    //////////////// LINES
    stroke(0, 153, 255); //set the color of the stroke
    strokeWeight(2); //set the width of the stroke

    // for loop for upper lines
    for (i=1; i>0;i-=0.05){
        //line: x, y start, x,y end
        line(0, height*i*0.3*Math.random(), width, height*i*0.3*Math.random());
    }
    // for loop for lower lines
    for (i=1; i>0;i-=0.05){
        line(0, height-height*i*0.3*Math.random(), width, height-height*i*0.3*Math.random());
    }

    //////////////// BOX
    //change the color of the stroke
    stroke(255, 153, 0);
    // change the weight of the stroke
    strokeWeight(4);
    //for loop for the bounding box
    for (i=1; i>0;i-=0.1){
        // define a random variable from the package
        randomV=Math.random()*20;
        //rect: x, y, width, height
        rect(width*0.15+i*randomV, height*0.1, width * 0.7, height * 0.8);
    }


    //////////////// TEXT
    //change the weight again
    strokeWeight(1);
    //set the text size
    textSize(62); 
    //set the text fill and stroke
    fill(255);
    stroke(255);
    //align the text in the center
    textAlign(CENTER, CENTER);
    // set the text
    text('Hello World!', width*.5, height*.5) //text(str,x,y,[x2] - width text box,[y2] - height of text box)
}