class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB;

    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if (this.chain.bodyA!=null){

       
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(10);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    }
    
}

}
