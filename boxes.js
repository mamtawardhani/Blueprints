class Box{

    constructor(x,y){
        var op = {
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,50,50, op)
        World.add(world, this.body)
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y, 50,50)
    }


}