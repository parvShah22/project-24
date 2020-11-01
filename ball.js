class Ball {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x, y,radius , options);
        
        World.add(world, this.body);
      }
     display(){
        var pos =this.body.position;
      
        
        
        
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y, this.radius, this.radius);
        
          };
    }


