class Bob{
    constructor(x,y,r)
{
  var options={
      'restitution':1.4,
      'friction':1.0,
      'density':1.0
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)


}
display(){
var pos=this.body.position;

ellipse(pos.x,pos.y,this.r)
}
}