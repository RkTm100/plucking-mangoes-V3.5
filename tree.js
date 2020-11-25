class tree{
constructor(x,y,width,height)
{
    var options={
      isStatic=true


    }
   this.x=x;
   this.y=y;
   this.width=width;
   this.height=height;
   this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
   this.image=loadImage("image/tree.png")
   World.add(world,this.body)
}
display(){

    var mangopos=this.body.position;

    push()
    translate(mangopos.x, mangopos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.x,this.y,this.width,this.height);
    rect(0,0,this.width,this.height)
    pop()
    

}



 

  









}