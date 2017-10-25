// import React from 'react';
const THREE = require('three');

export default function Root() {
    return null;
}

// Get the DOM element in which you want to attach the scene
const container = document.querySelector('#container');

// Create a WebGL renderer
const renderer = new THREE.WebGLRenderer();

//Set the attributes of the renderer
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

//Set the renderer size
renderer.setSize(WIDTH, HEIGHT);

// Set camera attributes
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

//Create a camera
const camera =
new THREE.PerspectiveCamera(
    VIEW_ANGLE,
    ASPECT,
    NEAR,
    FAR
);




//Set the camera position - x, y, z
camera.position.set( 0, 0, 500 );

// Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000 );

// Add the camera to the scene.
scene.add(camera);

// Attach the renderer to the DOM element.
container.appendChild(renderer.domElement);

//Three.js uses geometric meshes to create primitive 3D shapes like spheres, cubes, etc. I’ll be using a sphere.

// Set up the sphere attributes
const RADIUS = 200;
const SEGMENTS = 50;
const RINGS = 50;

//create a group which will include our sphere and its texture meshed together
const globe = new THREE.Group();
scene.add( globe );

//Let's create our globe. Use texture loader.
//First we create a sphere
var loader = new THREE.TextureLoader();
loader.load( 'land_ocean_ice_cloud_2048.jpg', function ( texture ) {
    //create the sphere
    var sphere = new THREE.SphereGeometry( RADIUS, SEGMENTS, RINGS );

    //map the texture to the material. Read more here about materials in three.js
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

    // Create a new mesh with
    // sphere geometry. 
    var mesh = new THREE.Mesh( sphere, material );
    globe.add( mesh );
} );


    // // Move the Sphere back in Z so we
//     // can see it.
globe.position.z = -300;

// create a point light (probably won't make a difference since our texture is a bright image to begin with)
const pointLight =
new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 400;

// add to the scene
scene.add(pointLight);

//Set update function
function update () {
    //Render
    renderer.render(scene, camera);

    // Schedule the next frame.
    requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);

//Hard-coded animation function based on keypress
function animationBuilder(direction) {
    return function animateRotate() {
        switch (direction) {
            case 'up':
                globe.rotation.x -= 0.2;
                break;
            case 'down':
                globe.rotation.x += 0.2;
                break;
            case 'left':
                globe.rotation.y -= 0.2;
                break;
            case 'right':
                globe.rotation.y += 0.2;
                break;
            default:
                break;
        }
    }
}

var animateDirection = {
    up: animationBuilder('up'),
    down: animationBuilder('down'),
    left: animationBuilder('left'),
    right: animationBuilder('right')
}

function checkKey(e) {

    e = e || window.event;

    e.preventDefault();

    if (e.keyCode == '38') {
        animateDirection.up();
    }
    else if (e.keyCode == '40') {
        animateDirection.down();
    }
    else if (e.keyCode == '37') {
        animateDirection.left();
    }
    else if (e.keyCode == '39') {
        animateDirection.right();
    }
}

document.onkeydown = checkKey;

var lastMove = [window.innerWidth/2, window.innerHeight/2];
//Mouse-move animation function
function onDocumentMouseMove( e ) {
    e = e || window.event;
    const mouseX = ( e.clientX - lastMove[0]);
    const mouseY = ( e.clientY - lastMove[1]);
    globe.rotation.y += ( mouseX * .005);
    globe.rotation.x += ( mouseY * .005);
    lastMove[0] = e.clientX;
    lastMove[1] = e.clientY;
}

document.addEventListener('mousemove', onDocumentMouseMove);