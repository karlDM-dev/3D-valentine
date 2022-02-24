import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const canvas = document.getElementById('app');

let canvasHeight = canvas.parentElement.clientHeight;
let canvasWidth = canvas.parentElement.clientWidth;

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0x000000, 1.0 );

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  canvasWidth / canvasHeight
);
camera.position.set(30, 0, 40);

const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 30 );
light.castShadow = true;
scene.add( light );

light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;

// Plane
const planeGeometry = new THREE.PlaneGeometry( 100, 100, 100, 100 );
const planeMaterial = new THREE.MeshPhongMaterial({ 
  color: 0xFBFCFC, 
  side: THREE.DoubleSide 
});

const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
plane.position.set(0, 0, -10)
scene.add( plane );

const material = new THREE.MeshPhongMaterial({
  color: 0xC62828, 
  side: THREE.DoubleSide
});

const geometry1 = new THREE.PlaneGeometry( 1, 1 );
const plane1 = new THREE.Mesh( geometry1, material );
plane1.position.set(0, 0, 5);
plane1.rotation.set(0, 0, 0)
plane1.castShadow = true;

const geometry2 = new THREE.PlaneGeometry( 1, 3 );
const plane2 = new THREE.Mesh( geometry2, material );
plane2.position.set(-1, 2.5, 10);
plane2.rotation.set(50, 0, 70)
plane2.castShadow = true;

const geometry3 = new THREE.PlaneGeometry( 5, 5 );
const plane3 = new THREE.Mesh( geometry3, material );
plane3.position.set(-2, 2, 5);
plane3.rotation.set(20, 40, 0)
plane3.castShadow = true;

const geometry4 = new THREE.PlaneGeometry( 4, 5 );
const plane4 = new THREE.Mesh( geometry4, material );
plane4.position.set(-1, 5, 5);
plane4.rotation.set(20, 50, 20)
plane4.castShadow = true;

const geometry5 = new THREE.PlaneGeometry( 2, 2 );
const plane5 = new THREE.Mesh( geometry5, material );
plane5.position.set(-0.6 , 4, 15);
plane5.rotation.set(20, 0, 70)
plane5.castShadow = true;

const geometry6 = new THREE.PlaneGeometry( 2, 2 );
const plane6 = new THREE.Mesh( geometry6, material );
plane6.position.set(2 , 2, 20);
plane6.rotation.set(20, 0, 70)
plane6.castShadow = true;

const geometry7 = new THREE.PlaneGeometry( 3, 3 );
const plane7 = new THREE.Mesh( geometry7, material );
plane7.position.set(2 , 5, 5);
plane7.rotation.set(4, 4, 0)
plane7.castShadow = true;

const geometry8 = new THREE.PlaneGeometry( 5, 3 );
const plane8 = new THREE.Mesh( geometry8, material );
plane8.position.set(1 , 2, 10);
plane8.rotation.set(0, 2, 0)
plane8.castShadow = true;

const geometry9 = new THREE.PlaneGeometry( 2, 5 );
const plane9 = new THREE.Mesh( geometry9, material );
plane9.position.set(3.8 , 0.6, 8);
plane9.rotation.set(1.4, 0, 0)
plane9.castShadow = true;

const geometry10 = new THREE.PlaneGeometry( 2, 5 );
const plane10 = new THREE.Mesh( geometry10, material );
plane10.position.set(3.3 , 1.7, 15);
plane10.rotation.set(1.3, 0, 0)
plane10.castShadow = true;

const geometry11 = new THREE.PlaneGeometry( 5, 5 );
const plane11 = new THREE.Mesh( geometry11, material );
plane11.position.set(3 , -0.9, 3);
plane11.rotation.set(1.3, 0.5, 0)
plane11.castShadow = true;

const geometry12 = new THREE.PlaneGeometry( 2, 2 );
const plane12 = new THREE.Mesh( geometry12, material );
plane12.position.set(0 , -0.3, 13);
plane12.rotation.set(1.1, -1, 0)
plane12.castShadow = true;

const geometry13 = new THREE.PlaneGeometry( 2, 2 );
const plane13 = new THREE.Mesh( geometry13, material );
plane13.position.set(1 , -0.1, 12);
plane13.rotation.set(2, 0, 0)
plane13.castShadow = true;

const geometry14 = new THREE.PlaneGeometry( 3, 3 );
const plane14 = new THREE.Mesh( geometry14, material );
plane14.position.set(2, 1, 5);
plane14.rotation.set(0, 0, 0)
plane14.castShadow = true;

scene.add( 
  plane1, 
  plane2, 
  plane3, 
  plane4, 
  plane5, 
  plane6, 
  plane7, 
  plane8,
  plane9,
  plane10,
  plane11,
  plane12,
  plane13,
  plane13,
  plane14,
)

// Helper
const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;

// Render
renderer.setAnimationLoop( time => {
  controls.update();
  renderer.render(scene, camera);
});

// Handle responsiveness
window.addEventListener('resize', event => {
  canvasHeight = canvas.parentElement.clientHeight;
  canvasWidth = canvas.parentElement.clientWidth;
  camera.aspect = canvasWidth / canvasHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(
    canvasWidth,
    canvasHeight
  );
});
