class Chain {
constructor(bodyA,bodyB){
var optionA = {
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,
length:20,
}
this.chain = Constraint.create(optionA)
World.add(world,this.chain)
}
display(){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
}

}