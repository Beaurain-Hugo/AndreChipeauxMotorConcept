import * as THREE from './three.js-dev/build/three.module.js';
import { OrbitControls } from './three.js-dev/examples/jsm/controls/OrbitControls.js';
import { ColladaLoader } from './three.js-dev/examples/jsm/loaders/ColladaLoader.js';
var clickInfo = [];
var animations = []; // tableau qui contient la liste de objets cliquables
var container = document.getElementById("canvas");

// variables utilisées par les deux fonctions
var renderer, camera, scene, controls;
var clock = new THREE.Clock();
var SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_LEFT, SCREEN_TOP;
const raycaster = new THREE.Raycaster();
var bookTop = null;

function onClickEvent(event) {
  clickInfo.userHasClicked = true;
  clickInfo.mouse = new THREE.Vector2();
  clickInfo.mouse.x = ((event.clientX - SCREEN_LEFT) / SCREEN_WIDTH) * 2 - 1;
  clickInfo.mouse.y = -((event.clientY - SCREEN_TOP) / SCREEN_HEIGHT) * 2 + 1;
}

function onWindowResize() {
  let w = container.offsetWidth;
  let h = container.offsetHeight;
  SCREEN_WIDTH = container.scrollWidth;
  SCREEN_HEIGHT = container.scrollHeight;
  SCREEN_LEFT = container.offsetLeft - container.scrollLeft + container.clientLeft;
  SCREEN_TOP = container.offsetTop - container.scrollTop + container.clientTop;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function start() {
  // initialisation du moteur de rendu
  renderer = new THREE.WebGLRenderer();
  // création d'un canvas dans un div
  renderer.setClearColor(0x222222, 1);
  window.addEventListener('resize', onWindowResize, false);

  container.appendChild(renderer.domElement);
  container.addEventListener('click', onClickEvent, false);

  let w = container.offsetWidth;
  let h = container.offsetHeight;
  SCREEN_WIDTH = container.scrollWidth;
  SCREEN_HEIGHT = container.scrollHeight;
  SCREEN_LEFT = container.offsetLeft - container.scrollLeft + container.clientLeft;
  SCREEN_TOP = container.offsetTop - container.scrollTop + container.clientTop;
  renderer.setSize(w, h);

  // création d'une caméra perspective(angle d'ouverture, rapport largeur/hauteur, near, far)
  camera = new THREE.PerspectiveCamera(30, w / h, 1, 6000);
  camera.position.set(10, 120, 50);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.minDistance = 10;
  controls.maxDistance = 200;
  controls.enablePan = true;
  controls.enableDamping = true;
  controls.panSpeed = 1;
  controls.update();

  // création de la scène
  scene = new THREE.Scene();
  scene.add(camera);

  clock.start();
  var loader = new ColladaLoader();
  loader.load('../models/moteur.dae', onLoaded, onProgress, onError);

  // sources de lumière
  let ambientLight = new THREE.AmbientLight(0x202020);
  scene.add(ambientLight);
  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(100, 500, 100);
  scene.add(spotLight);
}

function animate() {
  // rendu de la scène
  controls.update();
  renderer.render(scene, camera);

  // détection du picking
  if (clickInfo.userHasClicked) {
    clickInfo.userHasClicked = false; // pret pour le clique suivant
    raycaster.setFromCamera(clickInfo.mouse, camera);
    let intersections = raycaster.intersectObjects(scene.children, true);
    let obj = null;
    let cpt = 0;
    while (cpt < intersections.length && intersections[cpt].object.visible == false) {
      cpt++;
    }
    if (cpt < intersections.length) {
      obj = intersections[cpt].object; // l'objet de la premiere intersection
      // si l'objet à un nom vide alors on sélectionne son pere
      while (obj != null && obj.name == "") { // cherche le nom du parent
        obj = obj.parent;
      }
      if (obj) { // Lance la fonction onclick sur l'objet cliqué
        animations.forEach(object => {
          if (object.name == obj.name) {
            object.onClick(intersections[cpt]);
          }
        });
      }
    }
  }

  let dt = clock.getDelta();
  animations.forEach(object => { // mettre à jour l'animation sur tous les objects cliquables
    object.updateAnimation(dt);
  });


  // lancement du frame suivant
  requestAnimationFrame(animate);
}

function onLoaded(collada) {
  let object = collada.scene;

  scene.add(object);
  object.scale.set(0.4, 0.4, 0.4);

//  let top = object.getObjectByName('Labyrinthe_top');
  // top.rotation.y = THREE.MathUtils.degToRad(15);

 // object.getObjectByName('Labyrinthe').visible = false;

 // top.animationStatus = 0;
 // animations.push(top);
 // top.onClick = function (intersection) {
 //   this.t = 0;
 //   if (this.animationStatus == 0) {
 //     this.a0 = 0;
 //     this.a1 = Math.PI / 3;
 //     this.duration = 3.0;
 //     this.animationStatus = 1;
 //     this.a = -2 * (this.a1 - this.a0) / (this.duration * this.duration * this.duration)
 //     this.b = -1.5 * this.a * this.duration;
 //   } else if (this.animationStatus == 2) {
 //     this.a0 = Math.PI / 3;
 //     this.a1 = 0;
 //     this.duration = 1.0;
 //     this.animationStatus = 3;
 //     this.a = -2 * (this.a1 - this.a0) / (this.duration * this.duration * this.duration)
 //     this.b = -1.5 * this.a * this.duration;
 //   }
 // }
//
 // top.t = 0;
 // top.updateAnimation = function (dt) {
 //   // angle : la variation d'angle en dt seconde
 //   this.t += dt;
 //   let angle = this.t * this.t * (this.a * this.t + this.b) + this.a0;
 //   switch (this.animationStatus) {
 //     case 1:
 //       this.rotation.y = angle; // réduit l'angle de cadre de 'angle'
 //       if (this.t > this.duration) { // si il atteint le mini
 //         this.rotation.y = this.a1;
 //         this.animationStatus = 2; // on change le status
 //       }
 //       break;
 //     case 3:
 //       this.rotation.y = angle; // augmente l'angle de cadre de 'angle'
 //       if (this.t > this.duration) { // sin on atteint le maxi
 //         this.rotation.y = this.a1;
 //         this.animationStatus = 0; // on change le status
 //       }
 //       break;
 //   }
 // }
}
function onProgress(data) {
};

function onError(data) {
  console.error(data);
};

    /******************************************************************************/
    /* PROGRAMME PRINCIPAL ********************************************************/
    start();
    animate();

