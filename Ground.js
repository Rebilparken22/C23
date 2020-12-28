class Ground{
    constructor(x, y){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,400,20,options);
        this.w = 400;
        this.h = 20;
        World.add(world,this.body);
    }


    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);    
    }
}