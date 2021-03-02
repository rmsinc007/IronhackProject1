class Game {
 constructor() {
   this.activeDirections = {
     up: false,
     down: false,
     left: false,
     right: false,
   };
   this.obstacleArray = [];
   this.lives = 3;
   this.gameID = null;
   this.kayaker = new Kayaker();
   this.timer = 0;
   this.frames = 0;
   this.gameLoop();
 }
  
 generateObstacle() {
   const randomHeight = Math.round(Math.random() * 60 + 5);

   const randomWidth = Math.round(Math.random() * 65 + 35);
//change to X value due to coming from bottom rather than right with Dino
   const randomXValue = Math.round(Math.random()*1000);
   const newObstacle = new Obstacle(
     randomXValue,
     canvas.height,
     randomWidth,
     randomHeight,
   );
   this.obstacleArray.push(newObstacle);
   newObstacle.moveUpForever();
 }

 checkForDefeat() {
    if (this.lives <= 0) {
      clearInterval(this.gameID);
      ctx.font = "30px Arial";
      ctx.fillText("You're learning! Let's try again to unlock the next River!", 175, 300);
      
    }
 }
 checkForVictory() {
    if (this.timer > 60) {
      clearInterval(this.gameID);
      ctx.font = "30px Arial";
      ctx.fillText("You've won the first time trial and unlocked the next Rapids Challenge!", 50, 300);
    }
    //else {
    //  clearInterval(this.gameID);
    //  ctx.fillText("You're a natural, but can you get to the next level?  Try again", 450, 500);
  }
    //else {
      //clearInterval(this.gameID);
      //document.location.reload();
      //ctx.fillText("Great start for a beginner!  Let's try again to get to the next level", 450, 500);
  
  
 //checkForVictory() {
 // if(this.timer > 30){
 //   clearInterval(this.gameID);
 //   
 //  }

//  else(this.timer < 60) 
//    ctx.fillText("Tough water! Let's try again", 450, 120);
//
   



detectCollisions() {
  let collision = false;
  this.obstacleArray.forEach((eachObstacle) => {
    // to make this function super exact what you need to do is
    // create variables for the 4 sides of your kayaker
    // leftSide = currentX
    // rightSide = currentX + width of kayaker
    // top = currentY
    // bottom = currentY + height of kayaker
    // you need to do the same for the obstacle as well
    // and then ask if kayaker rightside > obstacle leftside && kayaker left side < box right side && kayaker top < obstacle bottom && kayaker bottom > obstacle top
    if (
      Math.abs(eachObstacle.x - this.kayaker.currentX) < 30 &&
      Math.abs(eachObstacle.y - this.kayaker.currentY) < 30
    ) {
      collision = true;
      // this is an approximate solution
      // because x is referring to the right side and y is referring to the top so the range we are using does not start in the center of our kayak
    }
  });
  return collision;
}

gameLoop() {
  this.gameID = setInterval(() => {
    this.frames++;
    
    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    this.obstacleArray.forEach((eachObstacle) => {
      eachObstacle.draw();
    
    });

    this.kayaker.draw();

    let rando = Math.random();
    if (rando > 0.85) this.generateObstacle();

    if (this.detectCollisions()) {
      this.lives -= 1;
      this.kayaker = new kayaker();
      //added checkForVictory to test scoring, moved from next if statement
      //this.checkForVictory();
    }
console.log(this.timer);
    if(this.frames % 10 === 0){
      this.timer +=1;
      document.getElementById('timer').innerHTML = this.timer;
      this.checkForVictory();
    }

    this.checkForDefeat();

    }, 100);
  }
}


