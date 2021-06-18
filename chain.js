class Chain{
    constructor(body1,body2,x,y){
        this.x=x
        this.y=y
        var con ={bodyA:body1,bodyB:body2,pointB:{x:this.x,y:this.y}}
this.chain=Constraint.create(con)
World.add(world,this.chain)

    }
display(){
    var s1=this.chain.bodyA.position
    var s2=this.chain.bodyB.position
    line(s1.x,s1.y,s2.x,s2.y)
}

}