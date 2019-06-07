import * as THREE from 'three';

function renderCube(ID) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  /*
   * const camera = new THREE.PerspectiveCamera( 10, window.innerWidth/window.innerHeight, 0.1, 100 );
   * Attributes to PerspectiveCamera
   * First  Attribute: field of view
   * Second Attribute: aspect ratio
   * Third  Attribute: near
   * Fourth Attribute: far
   */

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const canvas = document.getElementById(ID);
  canvas.appendChild(renderer.domElement);

  // Added cube 1
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // wireframe - new way
  const geo = new THREE.EdgesGeometry(cube.geometry); // or WireframeGeometry
  const mat = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 2 });
  const wireframe = new THREE.LineSegments(geo, mat);
  cube.add(wireframe);

  // Added cube 2
  const geometry1 = new THREE.BoxGeometry(1, 1, 1);
  const material1 = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0xffffff
  });
  const cube1 = new THREE.Mesh(geometry1, material1);
  scene.add(cube1);

  camera.position.z = 4;

  const animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.02; // Rotate cube clock wise in X direction
    cube.rotation.y += 0.02; // Rotate cube clock wise in Y direction
    cube1.rotation.x -= 0.06;
    cube1.rotation.y -= 0.06; // Rotate cube anti clock wise in y direction
    renderer.render(scene, camera);
  };

  animate();
}

export default renderCube;
