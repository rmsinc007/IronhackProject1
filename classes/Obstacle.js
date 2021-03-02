class Obstacle {
 constructor(x, y, width, height) {
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
  this.img = new Image();
  this.img.src = "./Rock.png";
 }

//different from Dinosaur
 draw() {
  ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.width,
    this.height
  );
   
  }
 
 moveUpForever() {
   setInterval(() => {
     this.y -= 11;
   }, 100);
 }
}