function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width -  pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else {

  }
}

 function keyTyped(){
    // console.log(`key ${key} is being typed`);
    // console.log("key " + key + "is being typed");
   if (key === 's'){
     //save drawn image
     saveCanvas('fileName', 'png');
   }

   if (key === 'e'){
     background(220);

   }

   return false;
 }
