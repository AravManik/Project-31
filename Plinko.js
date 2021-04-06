class Plinko {
    constructor(x, y) {
        var options = {

            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.w = 2*this.r;
        this.h = 2*this.r;
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0 ,0 , this.w, this.h);
        pop();
    }
};