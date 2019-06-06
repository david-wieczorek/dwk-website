import React, { Component } from 'react';
var THREE = require('three');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
/*
 * var camera = new THREE.PerspectiveCamera( 10, window.innerWidth/window.innerHeight, 0.1, 100 );
 * Attributes to PerspectiveCamera
 * First  Attribute: field of view
 * Second Attribute: aspect ratio
 * Third  Attribute: near
 * Fourth Attribute: far
 */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Added cube 1
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// wireframe - new way
var geo = new THREE.EdgesGeometry(cube.geometry); // or WireframeGeometry
var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 5 });
var wireframe = new THREE.LineSegments(geo, mat);
cube.add(wireframe);

// Added cube 2
var geometry1 = new THREE.BoxGeometry(1, 1, 1);
var material1 = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0xcccccc
});
var cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

camera.position.z = 4;

var animate = function() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.03; // Rotate cube clock wise in X direction
  cube.rotation.y += 0.03; // Rotate cube clock wise in Y direction
  cube1.rotation.x -= 0.06;
  cube1.rotation.y -= 0.06; // Rotate cube anti clock wise in y direction
  renderer.render(scene, camera);
};

animate();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'My website' };
  }
  render() {
    const { title } = this.state;
    return <div />;
  }
}

export default Header;
