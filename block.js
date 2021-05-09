class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
      }
      display(){
        push();
        var angle = this.body.angle;
        var pos= this.body.position;
        console.log(this.body.speed);
        if(this.body.speed < 3){
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
      }
      else{
        push();
    World.remove(world, this.body);
    this.Visiblity = this.Visiblity - 1;
    tint(255,this.Visiblity);
    pop();
      }
      }
}
