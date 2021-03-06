// Author: Austin Bearden
// Date Created: 5/03/2018
// Description: Friction / And Slip Conditions
//Experimentation for 3D Ball Movement
// Organization: PhysicsFoosball
// Filename: Ball_Movement_Friction.js


// build the world
var world = new CANNON.World();
world.gravity.set(0, 0, -9.82); // m/s^2

// build a ball object
// give the ball a shape
var radius = 1;
var ball = new CANNON.Body({
    mass: 5,
    position: new CANNON.Vec3(0, 0, 0),
    shape: new CANNON.Sphere(radius),
    angularVelocity: new CANNON.Vec3(30, 30, 50)

});

// add the ball to my world
world.addBody(ball);

// create the plane for the world
var ground = new CANNON.Body({
    mass: 0 // mass == 0 makes body static
            // but what does it mean to have a Static body
});
var ground_shape = new CANNON.Plane();
// define the plane's shape
ground.addShape(ground_shape);
// add plane to world
world.addBody(ground);


// create an instance of the friction class
var friction_funct = new CANNON.FrictionEquation(ball, ground, 8); 
// but the above object at bottom of other object instantiations
// That way we can use the other objects as inputs to
// friction class object

// how does the FrictionEqation work?


// lets include a ContactMaterial class
var contact = new CANNON.ContactMaterial(ball, ground, [friction = 0.5]);

// now lets figure out time!
for(i = 0; i <= 5; i++) {
    world.step(1/4);
    console.log("Sphere x position: " + ball.position.x);
}

console.log(friction_funct.computeGiMf());


