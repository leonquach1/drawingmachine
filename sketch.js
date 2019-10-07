let noiseOffset = 0.0;
let strokeWidth = 5;
function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw(){
strokeWeight(strokeWidth);
noiseOffset += 0.05;
strokeWidth = noise(noiseOffset) * 25;
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
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
