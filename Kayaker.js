class Kayaker {
   constructor() {
     this.currentX = 450;
     this.currentY = 200;
     this.height = 90;
     this.width = 75;
     this.img = new Image();
     this.img.src = "./kayak.png";
   }
   
   draw() {
       ctx.drawImage(
         this.img,
         this.currentX,
         this.currentY,
         this.width,
         this.height
       );
   }

   safeFromEdges(speed) {
     if (this.currentX - speed <= 0 && currentGame.activeDirections.left) return false;
     if (this.currentX + speed >= 1000 && currentGame.activeDirections.right) return false;
     if (this.currentY - speed <= 0 && currentGame.activeDirections.up) return false;
     if (this.currentY + speed >= 1000 && currentGame.activeDirections.down) return false;
  
     return true;
   }
   move(speed) {
       if (this.safeFromEdges(speed)) {
         if (currentGame.activeDirections.right) this.currentX += speed;
    
         if (currentGame.activeDirections.left) this.currentX -= speed;
    
         if (currentGame.activeDirections.down) this.currentY += speed;
    
         if (currentGame.activeDirections.up) this.currentY -= speed;
       }
     }
   } 
