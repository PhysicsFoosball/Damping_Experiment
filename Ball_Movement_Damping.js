// Author: Austin Bearden
// Date Created: 4/29/2018
// Description: Damping Experimentation for 3D Ball Movement
// Organization: PhysicsFoosball
// Filename: Ball_Movement_Damping.js

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
    angularVelocity: new CANNON.Vec3(100, 100, 100) // velocity in m / s

});

ball.angularDamping = 1.0; // linear damping

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

console.log("BV: " + ball.angularVelocity.x);

world.step(1/5); // 0.5 seconds

console.log("AV: " + ball.angularVelocity.x);
