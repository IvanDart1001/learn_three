/**
 * Created by lenovo on 2018/1/19.
 */
import * as THREE from 'three'

/**
 * init scene
 */

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);

/**
 * render elements
 */

let geometry = new THREE.BoxGeometry(1,1,1);
let material = new THREE.MeshBasicMaterial( {color:0x0099ff, wireframe:true});
let cube = new THREE.Mesh( geometry, material);
scene.add( cube );

camera.position.z = 5;

/**
 * rendering the scene
 */

(function animate(){
  requestAnimationFrame( animate );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render( scene, camera );
})();