
function setup() {
  createCanvas(400,400);
  webcam=createCapture(VIDEO)
  webcam.hide()
 
  
  
}

function draw(){
    
    circle(30, 30, 50);
    circle(350, 30, 50);
    circle(30, 350, 50);
    circle(350, 350, 50);
    rect(20, 55, 20, 270);
    rect(340, 55, 20, 270);
    rect(55, 20, 270, 20);
    rect(55, 340, 270, 20);
    image(capture, 0, 0, width, width * capture.height / capture.width);
    


}