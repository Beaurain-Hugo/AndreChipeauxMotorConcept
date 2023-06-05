<template> 
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

let scene, renderer, camera;
  var animations = []; // tableau qui contient la liste de objets cliquables
  var clock = new THREE.Clock();
  const raycaster = new THREE.Raycaster();

export default {
  name: "ProductView",
  data() {
    return {
      
    };
  },
  props: {
    containerId: {
      type: String,
      required: true
    },
    
  },
  
  methods: {

    init() {
      scene = new THREE.Scene();
      scene.background = null;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.setClearColor(0x000000, 1);
      const container = document.getElementById(this.containerId);
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(renderer.domElement);



      // START: Adding camera
      camera = new THREE.PerspectiveCamera(
        45,
        container.offsetWidth / container.offsetHeight,
        0.25,
        20
      );
      camera.position.set(10, 120, 0);
      // END: Adding camera

      // START: Adding controls
      const controls = new OrbitControls(camera, renderer.domElement);

      controls.minDistance = 1;
      controls.maxDistance = 1;
      // controls.enablePan = false;
      controls.target.set(0, 0, 0);
      controls.addEventListener("change", this.renderScene); // use if there is no animation loop
      // END: Adding controls

      // START: Adding light

      // sources de lumière
    let ambientLight = new THREE.AmbientLight(0x202020);
    scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 500, 100);
    scene.add(spotLight);
      // END: Adding light

      

      // START: Adding gtlf model 
      let loader = new ColladaLoader();
               console.log(loader)
      loader.load(
        'src/models/moteur1.dae',   function onLoaded(collada) {
         console.log(loader.load)
         console.log(collada)
    console.log(collada.scene)
   let object = collada.scene;
    
    scene.add(object);
    
    // définition des variables pour chaque objet cliquable / animable
    let cylindre1 = object.getObjectByName('Solide1_33')
    let cercleCylindre1_1 = object.getObjectByName('Solide1_35')
    let cercleCylindre1_2 = object.getObjectByName('Solide1_34')
    let cercleCylindre1_3 = object.getObjectByName('Solide1_36')
    let lienCylindre1 = object.getObjectByName('Solide1_30')
    let baseCylindre1_1 = object.getObjectByName('Solide1_31')
    let baseCylindre1_2 = object.getObjectByName('Solide1_32')


    let cylindre2 = object.getObjectByName('Solide1_40')
    let baseCylindre2_1 = object.getObjectByName('Solide1_38')
    let baseCylindre2_2 = object.getObjectByName('Solide1_39')
    let cercleCylindre2_1 = object.getObjectByName('Solide1_41')
    let cercleCylindre2_2 = object.getObjectByName('Solide1_43')
    let cercleCylindre2_3 = object.getObjectByName('Solide1_42')
    let lienCylindre2 = object.getObjectByName('Solide1_37')

    let cylindre3 = object.getObjectByName('Solide1_26')
    let baseCylindre3_1 = object.getObjectByName('Solide1_24')
    let baseCylindre3_2 = object.getObjectByName('Solide1_25')
    let cercleCylindre3_1 = object.getObjectByName('Solide1_28')
    let cercleCylindre3_2 = object.getObjectByName('Solide1_29')
    let cercleCylindre3_3 = object.getObjectByName('Solide1_27')
    let lienCylindre3 = object.getObjectByName('Solide1_23')

    let cylindre4 = object.getObjectByName('Solide1_19')
    let baseCylindre4_1 = object.getObjectByName('Solide1_17')
    let baseCylindre4_2 = object.getObjectByName('Solide1_18')
    let cercleCylindre4_1 = object.getObjectByName('Solide1_21')
    let cercleCylindre4_2 = object.getObjectByName('Solide1_22')
    let cercleCylindre4_3 = object.getObjectByName('Solide1_20')
    let lienCylindre4 = object.getObjectByName('Solide1_16')

    let cylindre5 = object.getObjectByName('Solide1_12')
    let baseCylindre5_1 = object.getObjectByName('Solide1_10')
    let baseCylindre5_2 = object.getObjectByName('Solide1_11')
    let cercleCylindre5_1 = object.getObjectByName('Solide1_14')
    let cercleCylindre5_2 = object.getObjectByName('Solide1_15')
    let cercleCylindre5_3 = object.getObjectByName('Solide1_13')
    let lienCylindre5 = object.getObjectByName('Solide1_9')

    let cylindre6 = object.getObjectByName('Solide1_5')
    let baseCylindre6_1 = object.getObjectByName('Solide1_3')
    let baseCylindre6_2 = object.getObjectByName('Solide1_4')
    let cercleCylindre6_1 = object.getObjectByName('Solide1_7')
    let cercleCylindre6_2 = object.getObjectByName('Solide1_8')
    let cercleCylindre6_3 = object.getObjectByName('Solide1_6')
    let lienCylindre6 = object.getObjectByName('Solide1_2')


    let rotator = object.getObjectByName('Rotator')
    
    object.getObjectByName('Base').visible = false;
   // baseCylindre6_1.visible = false

    // mouvement "rotator"
    rotator.animationStatus = 0;
    animations.push(rotator)
    rotator.onClick = function (intersection){
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    rotator.updateAnimation = function (dt) {
      rotator.t += dt;
      let rotate = rotator.a0+rotator.t*(rotator.a1-rotator.a0)/rotator.duration
      switch (rotator.animationStatus) {
        case 1:
          rotator.rotation.y = rotate
          if (rotator.t > rotator.duration) {
            rotator.rotation.y = rotator.a1
            rotator.t=0;
            rotator.a0 = 0;
            rotator.a1 = Math.PI * 2;
            rotator.duration = 4.0;
            rotator.animationStatus = 1;
          }
        break;
      }
    }


    cylindre1.animationStatus = 0;
    cercleCylindre1_1.animationStatus = 0;
    cercleCylindre1_2.animationStatus = 0;
    cercleCylindre1_3.animationStatus = 0;
    lienCylindre1.animationStatus = 0;
    cylindre1.animationStatus = 0;
    baseCylindre1_1.animationStatus = 0;
    baseCylindre1_2.animationStatus = 0;

    cylindre2.animationStatus = 0;
    baseCylindre2_1.animationStatus = 0;
    baseCylindre2_2.animationStatus = 0;
    cercleCylindre2_1.animationStatus = 0;
    cercleCylindre2_2.animationStatus = 0;
    cercleCylindre2_3.animationStatus = 0;
    lienCylindre2.animationStatus = 0;

    cylindre3.animationStatus = 0;
    baseCylindre3_1.animationStatus = 0;
    baseCylindre3_2.animationStatus = 0;
    cercleCylindre3_1.animationStatus = 0;
    cercleCylindre3_2.animationStatus = 0;
    cercleCylindre3_3.animationStatus = 0;
    lienCylindre3.animationStatus = 0;

    cylindre4.animationStatus = 0;
    baseCylindre4_1.animationStatus = 0;
    baseCylindre4_2.animationStatus = 0;
    cercleCylindre4_1.animationStatus = 0;
    cercleCylindre4_2.animationStatus = 0;
    cercleCylindre4_3.animationStatus = 0;
    lienCylindre4.animationStatus = 0;

    cylindre5.animationStatus = 0;
    baseCylindre5_1.animationStatus = 0;
    baseCylindre5_2.animationStatus = 0;
    cercleCylindre5_1.animationStatus = 0;
    cercleCylindre5_2.animationStatus = 0;
    cercleCylindre5_3.animationStatus = 0;
    lienCylindre5.animationStatus = 0;

    cylindre6.animationStatus = 0;
    baseCylindre6_1.animationStatus = 0;
    baseCylindre6_2.animationStatus = 0;
    cercleCylindre6_1.animationStatus = 0;
    cercleCylindre6_2.animationStatus = 0;
    cercleCylindre6_3.animationStatus = 0;
    lienCylindre6.animationStatus = 0;

    animations.push(cylindre1);
    animations.push(cercleCylindre1_1);
    animations.push(cercleCylindre1_2);
    animations.push(cercleCylindre1_3);
    animations.push(lienCylindre1);
    animations.push(baseCylindre1_1);
    animations.push(baseCylindre1_2);

    animations.push(cylindre2);
    animations.push(baseCylindre2_1);
    animations.push(baseCylindre2_2);
    animations.push(cercleCylindre2_1);
    animations.push(cercleCylindre2_2);
    animations.push(cercleCylindre2_3);
    animations.push(lienCylindre2);

    animations.push(cylindre3);
    animations.push(baseCylindre3_1);
    animations.push(baseCylindre3_2);
    animations.push(cercleCylindre3_1);
    animations.push(cercleCylindre3_2);
    animations.push(cercleCylindre3_3);
    animations.push(lienCylindre3);

    animations.push(cylindre4);
    animations.push(baseCylindre4_1);
    animations.push(baseCylindre4_2);
    animations.push(cercleCylindre4_1);
    animations.push(cercleCylindre4_2);
    animations.push(cercleCylindre4_3);
    animations.push(lienCylindre4);

    animations.push(cylindre5);
    animations.push(baseCylindre5_1);
    animations.push(baseCylindre5_2);
    animations.push(cercleCylindre5_1);
    animations.push(cercleCylindre5_2);
    animations.push(cercleCylindre5_3);
    animations.push(lienCylindre5);

    animations.push(cylindre6);
    animations.push(baseCylindre6_1);
    animations.push(baseCylindre6_2);
    animations.push(cercleCylindre6_1);
    animations.push(cercleCylindre6_2);
    animations.push(cercleCylindre6_3);
    animations.push(lienCylindre6);

   // mouvement clic sur le premier cylindre
  
  
    cylindre1.onClick = function (intersection){
      waitPresentation()
      
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        //baseCylindre1_1.r = ;
        //baseCylindre1_1.l = ;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre1.updateAnimation = function (dt) {
      cylindre1.t += dt;
      let translate = cylindre1.a0+cylindre1.t * (cylindre1.a1 - cylindre1.a0) / cylindre1.duration ;
      switch (cylindre1.animationStatus) {
        case 1:
          cylindre1.position.x = translate
          if (cylindre1.t > cylindre1.duration) {
            cylindre1.position.x = cylindre1.a1;
            cylindre1.t=0;
            cylindre1.a0 = 65;
            cylindre1.a1 = 90
            cylindre1.duration = 1.0;
            cylindre1.animationStatus = 2;
          }
          break;
        case 2:
          cylindre1.position.x = translate
          if (cylindre1.t > cylindre1.duration) {
            cylindre1.position.x = cylindre1.a0
            cylindre1.t = 0
            cylindre1.a0 = 90;
            cylindre1.a1 = 25
            cylindre1.duration = 1.0;
            cylindre1.animationStatus = 3;
          }
          break;
          case 3:
          cylindre1.position.x = translate
          if (cylindre1.t > cylindre1.duration) {
            cylindre1.position.x = cylindre1.a1;
            cylindre1.t=0;
            cylindre1.a0 = 25;
            cylindre1.a1 = 0;
            cylindre1.duration = 1.0;
            cylindre1.animationStatus = 4;
          }
          break;
          case 4:
          cylindre1.position.x = translate
          if (cylindre1.t > cylindre1.duration) {
            cylindre1.position.x = cylindre1.a1;
            cylindre1.t=0;
            cylindre1.a0 = 0;
            cylindre1.a1 = 65;
            cylindre1.duration = 1.0;
            cylindre1.animationStatus = 1;
          }
          break;
      }
    }
    cercleCylindre1_1.onClick = function (intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cercleCylindre1_1.updateAnimation = function(dt){
      cercleCylindre1_1.t += dt;
      let translate = cercleCylindre1_1.a0+cercleCylindre1_1.t * (cercleCylindre1_1.a1 - cercleCylindre1_1.a0) / cercleCylindre1_1.duration ;
      switch (cercleCylindre1_1.animationStatus) {
        case 1:
          cercleCylindre1_1.position.x = translate
          if (cercleCylindre1_1.t > cercleCylindre1_1.duration) {
            cercleCylindre1_1.position.x = cercleCylindre1_1.a1;
            cercleCylindre1_1.t=0;
            cercleCylindre1_1.a0 = 65;
            cercleCylindre1_1.a1 = 90
            cercleCylindre1_1.duration = 1.0;
            cercleCylindre1_1.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre1_1.position.x = translate
          if (cercleCylindre1_1.t > cercleCylindre1_1.duration) {
            cercleCylindre1_1.position.x = cercleCylindre1_1.a0
            cercleCylindre1_1.t = 0
            cercleCylindre1_1.a0 = 90;
            cercleCylindre1_1.a1 = 25
            cercleCylindre1_1.duration = 1.0;
            cercleCylindre1_1.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre1_1.position.x = translate
          if (cercleCylindre1_1.t > cercleCylindre1_1.duration) {
            cercleCylindre1_1.position.x = cercleCylindre1_1.a1;
            cercleCylindre1_1.t=0;
            cercleCylindre1_1.a0 = 25;
            cercleCylindre1_1.a1 = 0;
            cercleCylindre1_1.duration = 1.0;
            cercleCylindre1_1.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre1_1.position.x = translate
          if (cercleCylindre1_1.t > cercleCylindre1_1.duration) {
            cercleCylindre1_1.position.x = cercleCylindre1_1.a1;
            cercleCylindre1_1.t=0;
            cercleCylindre1_1.a0 = 0;
            cercleCylindre1_1.a1 = 65;
            cercleCylindre1_1.duration = 1.0;
            cercleCylindre1_1.animationStatus = 1;
          }
          break;
      }
    }
    cercleCylindre1_2.onClick = function (intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre1_2.updateAnimation = function(dt){
cercleCylindre1_2.t += dt;
let translate = cercleCylindre1_2.a0+cercleCylindre1_2.t * (cercleCylindre1_2.a1 - cercleCylindre1_2.a0) / cercleCylindre1_2.duration ;
switch (cercleCylindre1_2.animationStatus) {
  case 1:
          cercleCylindre1_2.position.x = translate
          if (cercleCylindre1_2.t > cercleCylindre1_2.duration) {
            cercleCylindre1_2.position.x = cercleCylindre1_2.a1;
            cercleCylindre1_2.t=0;
            cercleCylindre1_2.a0 = 65;
            cercleCylindre1_2.a1 = 90
            cercleCylindre1_2.duration = 1.0;
            cercleCylindre1_2.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre1_2.position.x = translate
          if (cercleCylindre1_2.t > cercleCylindre1_2.duration) {
            cercleCylindre1_2.position.x = cercleCylindre1_2.a0
            cercleCylindre1_2.t = 0
            cercleCylindre1_2.a0 = 90;
            cercleCylindre1_2.a1 = 25
            cercleCylindre1_2.duration = 1.0;
            cercleCylindre1_2.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre1_2.position.x = translate
          if (cercleCylindre1_2.t > cercleCylindre1_2.duration) {
            cercleCylindre1_2.position.x = cercleCylindre1_2.a1;
            cercleCylindre1_2.t=0;
            cercleCylindre1_2.a0 = 25;
            cercleCylindre1_2.a1 = 0;
            cercleCylindre1_2.duration = 1.0;
            cercleCylindre1_2.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre1_2.position.x = translate
          if (cercleCylindre1_2.t > cercleCylindre1_2.duration) {
            cercleCylindre1_2.position.x = cercleCylindre1_2.a1;
            cercleCylindre1_2.t=0;
            cercleCylindre1_2.a0 = 0;
            cercleCylindre1_2.a1 = 65;
            cercleCylindre1_2.duration = 1.0;
            cercleCylindre1_2.animationStatus = 1;
          }
          break;
}
}
    cercleCylindre1_3.onClick = function (intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre1_3.updateAnimation = function(dt){
cercleCylindre1_3.t += dt;
let translate = cercleCylindre1_3.a0+cercleCylindre1_3.t * (cercleCylindre1_3.a1 - cercleCylindre1_3.a0) / cercleCylindre1_3.duration ;
switch (cercleCylindre1_3.animationStatus) {
  case 1:
          cercleCylindre1_3.position.x = translate
          if (cercleCylindre1_3.t > cercleCylindre1_3.duration) {
            cercleCylindre1_3.position.x = cercleCylindre1_3.a1;
            cercleCylindre1_3.t=0;
            cercleCylindre1_3.a0 = 65;
            cercleCylindre1_3.a1 = 90
            cercleCylindre1_3.duration = 1.0;
            cercleCylindre1_3.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre1_3.position.x = translate
          if (cercleCylindre1_3.t > cercleCylindre1_3.duration) {
            cercleCylindre1_3.position.x = cercleCylindre1_3.a0
            cercleCylindre1_3.t = 0
            cercleCylindre1_3.a0 = 90;
            cercleCylindre1_3.a1 = 25
            cercleCylindre1_3.duration = 1.0;
            cercleCylindre1_3.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre1_3.position.x = translate
          if (cercleCylindre1_3.t > cercleCylindre1_3.duration) {
            cercleCylindre1_3.position.x = cercleCylindre1_3.a1;
            cercleCylindre1_3.t=0;
            cercleCylindre1_3.a0 = 25;
            cercleCylindre1_3.a1 = 0;
            cercleCylindre1_3.duration = 1.0;
            cercleCylindre1_3.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre1_3.position.x = translate
          if (cercleCylindre1_3.t > cercleCylindre1_3.duration) {
            cercleCylindre1_3.position.x = cercleCylindre1_3.a1;
            cercleCylindre1_3.t=0;
            cercleCylindre1_3.a0 = 0;
            cercleCylindre1_3.a1 = 65;
            cercleCylindre1_3.duration = 1.0;
            cercleCylindre1_3.animationStatus = 1;
          }
          break;
}
}
    lienCylindre1.onClick = function(intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre1.updateAnimation = function(dt){
lienCylindre1.t += dt;
let translate = lienCylindre1.a0+lienCylindre1.t * (lienCylindre1.a1 - lienCylindre1.a0) / lienCylindre1.duration ;
switch (lienCylindre1.animationStatus) {
  case 1:
          lienCylindre1.position.x = translate
          if (lienCylindre1.t > lienCylindre1.duration) {
            lienCylindre1.position.x = lienCylindre1.a1;
            lienCylindre1.t=0;
            lienCylindre1.a0 = 65;
            lienCylindre1.a1 = 90
            lienCylindre1.duration = 1.0;
            lienCylindre1.animationStatus = 2;
          }
          break;
        case 2:
          lienCylindre1.position.x = translate
          if (lienCylindre1.t > lienCylindre1.duration) {
            lienCylindre1.position.x = lienCylindre1.a0
            lienCylindre1.t = 0
            lienCylindre1.a0 = 90;
            lienCylindre1.a1 = 25
            lienCylindre1.duration = 1.0;
            lienCylindre1.animationStatus = 3;
          }
          break;
          case 3:
          lienCylindre1.position.x = translate
          if (lienCylindre1.t > lienCylindre1.duration) {
            lienCylindre1.position.x = lienCylindre1.a1;
            lienCylindre1.t=0;
            lienCylindre1.a0 = 25;
            lienCylindre1.a1 = 0;
            lienCylindre1.duration = 1.0;
            lienCylindre1.animationStatus = 4;
          }
          break;
          case 4:
          lienCylindre1.position.x = translate
          if (lienCylindre1.t > lienCylindre1.duration) {
            lienCylindre1.position.x = lienCylindre1.a1;
            lienCylindre1.t=0;
            lienCylindre1.a0 = 0;
            lienCylindre1.a1 = 65;
            lienCylindre1.duration = 1.0;
            lienCylindre1.animationStatus = 1;
          }
          break;
}
}
    baseCylindre1_1.onClick = function (intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre1_1.updateAnimation = function(dt){
      baseCylindre1_1.t += dt;
      let translate = baseCylindre1_1.  a0+baseCylindre1_1.t * (baseCylindre1_1.a1 - baseCylindre1_1.a0) / baseCylindre1_1.duration ;
      let rotate = baseCylindre1_1.z0+baseCylindre1_1.t*(baseCylindre1_1.z1-baseCylindre1_1.z0)/baseCylindre1_1.duration
      switch (baseCylindre1_1.animationStatus) {
        case 1:
          baseCylindre1_1.position.x = translate
          baseCylindre1_1.rotation.y = rotate
          if (baseCylindre1_1.t > baseCylindre1_1.duration) {
            baseCylindre1_1.position.x = baseCylindre1_1.a1
            baseCylindre1_1.rotation.y = baseCylindre1_1.z1
            baseCylindre1_1.t = 0
            baseCylindre1_1.a0 = 65
            baseCylindre1_1.a1 = 90
            baseCylindre1_1.z0 = -Math.PI / 20;
            baseCylindre1_1.z1 = Math.PI/20;
            baseCylindre1_1.duration = 1.0;
            baseCylindre1_1.animationStatus = 2;
          }
        break;
        case 2:
          baseCylindre1_1.position.x = translate
          baseCylindre1_1.rotation.y = rotate
          if(baseCylindre1_1.t > baseCylindre1_1.duration){
            baseCylindre1_1.position.x = baseCylindre1_1.a1
            baseCylindre1_1.rotation.y = baseCylindre1_1.z1
            baseCylindre1_1.t = 0
            baseCylindre1_1.a0 = 90
            baseCylindre1_1.a1 = 25
            baseCylindre1_1.z0 = Math.PI/20;
            baseCylindre1_1.z1 = Math.PI / 11;
            baseCylindre1_1.duration = 1.0;
            baseCylindre1_1.animationStatus = 3;
          }
        break;
        case 3:
          baseCylindre1_1.position.x = translate
          baseCylindre1_1.rotation.y = rotate
          if(baseCylindre1_1.t > baseCylindre1_1.duration){
            baseCylindre1_1.position.x = baseCylindre1_1.a1
            baseCylindre1_1.rotation.y = baseCylindre1_1.z1
            baseCylindre1_1.t = 0
            baseCylindre1_1.a0 = 25
            baseCylindre1_1.a1 = 0
            baseCylindre1_1.z0 = Math.PI / 11;
            baseCylindre1_1.z1 = 0;
            baseCylindre1_1.duration = 1.0;
            baseCylindre1_1.animationStatus = 4;
          }
        break;
        case 4:
          baseCylindre1_1.position.x = translate
          baseCylindre1_1.rotation.y = rotate
          if(baseCylindre1_1.t > baseCylindre1_1.duration){
            baseCylindre1_1.position.x = baseCylindre1_1.a1
            baseCylindre1_1.rotation.y = baseCylindre1_1.z1
            baseCylindre1_1.t = 0
            baseCylindre1_1.a0 = 0
            baseCylindre1_1.a1 = 65
            baseCylindre1_1.z0 = 0;
            baseCylindre1_1.z1 = -Math.PI / 20;
            baseCylindre1_1.duration = 1.0;
            baseCylindre1_1.animationStatus = 1;
          }
        break;
      }
    }
    baseCylindre1_2.onClick = function (intersection){
      waitPresentation()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre1_2.updateAnimation = function(dt){
      baseCylindre1_2.t += dt;
      let translate = baseCylindre1_2.a0+baseCylindre1_2.t * (baseCylindre1_2.a1 - baseCylindre1_2.a0) / baseCylindre1_2.duration ;
      let rotate = baseCylindre1_2.z0+baseCylindre1_2.t*(baseCylindre1_2.z1-baseCylindre1_2.z0)/baseCylindre1_2.duration
      switch (baseCylindre1_2.animationStatus) {
        case 1:
          baseCylindre1_2.position.x = translate
          baseCylindre1_2.rotation.y = rotate
          if (baseCylindre1_2.t > baseCylindre1_2.duration) {
            baseCylindre1_2.position.x = baseCylindre1_2.a1
            baseCylindre1_2.rotation.y = baseCylindre1_2.z1
            baseCylindre1_2.t = 0
            baseCylindre1_2.a0 = 65
            baseCylindre1_2.a1 = 90
            baseCylindre1_2.z0 = -Math.PI / 20;
            baseCylindre1_2.z1 = Math.PI / 20;
            baseCylindre1_2.duration = 1.0;
            baseCylindre1_2.animationStatus = 2;
          }
        break;
        case 2:
          baseCylindre1_2.position.x = translate
          baseCylindre1_2.rotation.y = rotate
          if(baseCylindre1_2.t > baseCylindre1_2.duration){
            baseCylindre1_2.position.x = baseCylindre1_2.a1
            baseCylindre1_2.rotation.y = baseCylindre1_2.z1
            baseCylindre1_2.t = 0
            baseCylindre1_2.a0 = 90
            baseCylindre1_2.a1 = 25
            baseCylindre1_2.z0 = Math.PI / 20;
            baseCylindre1_2.z1 = Math.PI / 11;
            baseCylindre1_2.duration = 1.0;
            baseCylindre1_2.animationStatus = 3;
          }
        break;
        case 3:
          baseCylindre1_2.position.x = translate
          baseCylindre1_2.rotation.y = rotate
          if(baseCylindre1_2.t > baseCylindre1_2.duration){
            baseCylindre1_2.position.x = baseCylindre1_2.a1
            baseCylindre1_2.rotation.y = baseCylindre1_2.z1
            baseCylindre1_2.t = 0
            baseCylindre1_2.a0 = 25
            baseCylindre1_2.a1 = 0
            baseCylindre1_2.z0 = Math.PI / 11;
            baseCylindre1_2.z1 = 0;
            baseCylindre1_2.duration = 1.0;
            baseCylindre1_2.animationStatus = 4;
          }
        break;
        case 4:
          baseCylindre1_2.position.x = translate
          baseCylindre1_2.rotation.y = rotate
          if(baseCylindre1_2.t > baseCylindre1_2.duration){
            baseCylindre1_2.position.x = baseCylindre1_2.a1
            baseCylindre1_2.rotation.y = baseCylindre1_2.z1
            baseCylindre1_2.t = 0
            baseCylindre1_2.a0 = 0
            baseCylindre1_2.a1 = 65
            baseCylindre1_2.z0 = 0;
            baseCylindre1_2.z1 = -Math.PI / 20;
            baseCylindre1_2.duration = 1.0;
            baseCylindre1_2.animationStatus = 1;
          }
        break;
      }
    }

    // mouvement clic sur le deuxième cylindre

    cylindre2.onClick = function (intersection) {
      waitPalmares()
      
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre2.updateAnimation = function (dt) {
      cylindre2.t += dt;
      let translate = cylindre2.a0+cylindre2.t * (cylindre2.a1 - cylindre2.a0) / cylindre2.duration ;
      switch (cylindre2.animationStatus) {
        case 1:
          cylindre2.position.x = translate
          if (cylindre2.t > cylindre2.duration) {
            cylindre2.position.x = cylindre2.a1;
            cylindre2.t=0;
            cylindre2.a0 = -65;
            cylindre2.a1 = -85;
            cylindre2.duration = 1.0;
            cylindre2.animationStatus = 2;
          }
          break;
        case 2:
          cylindre2.position.x = translate
          if (cylindre2.t > cylindre2.duration) {
            cylindre2.position.x = cylindre2.a0
            cylindre2.t = 0
            cylindre2.a0 = -85;
            cylindre2.a1 = -25;
            cylindre2.duration = 1.0;
            cylindre2.animationStatus = 3;
          }
          break;
          case 3:
          cylindre2.position.x = translate
          if (cylindre2.t > cylindre2.duration) {
            cylindre2.position.x = cylindre2.a0
            cylindre2.t = 0
            cylindre2.a0 = -25;
            cylindre2.a1 = 0;
            cylindre2.duration = 1.0;
            cylindre2.animationStatus = 4;
          }
          break;
          case 4:
          cylindre2.position.x = translate
          if (cylindre2.t > cylindre2.duration) {
            cylindre2.position.x = cylindre2.a0
            cylindre2.t = 0
            cylindre2.a0 = 0;
            cylindre2.a1 = -65;
            cylindre2.duration = 1.0;
            cylindre2.animationStatus = 1;
          }
          break;
      }
    }
    cercleCylindre2_1.onClick = function (intersection) {
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre2_1.updateAnimation = function (dt) {
cercleCylindre2_1.t += dt;
let translate = cercleCylindre2_1.a0+cercleCylindre2_1.t * (cercleCylindre2_1.a1 - cercleCylindre2_1.a0) / cercleCylindre2_1.duration ;
switch (cercleCylindre2_1.animationStatus) {
  case 1:
    cercleCylindre2_1.position.x = translate
    if (cercleCylindre2_1.t > cercleCylindre2_1.duration) {
      cercleCylindre2_1.position.x = cercleCylindre2_1.a1;
      cercleCylindre2_1.t=0;
      cercleCylindre2_1.a0 = -65;
      cercleCylindre2_1.a1 = -85;
      cercleCylindre2_1.duration = 1.0;
      cercleCylindre2_1.animationStatus = 2;
    }
    break;
  case 2:
    cercleCylindre2_1.position.x = translate
    if (cercleCylindre2_1.t > cercleCylindre2_1.duration) {
      cercleCylindre2_1.position.x = cercleCylindre2_1.a0
      cercleCylindre2_1.t = 0
      cercleCylindre2_1.a0 = -85;
      cercleCylindre2_1.a1 = -25;
      cercleCylindre2_1.duration = 1.0;
      cercleCylindre2_1.animationStatus = 3;
    }
    break;
    case 3:
    cercleCylindre2_1.position.x = translate
    if (cercleCylindre2_1.t > cercleCylindre2_1.duration) {
      cercleCylindre2_1.position.x = cercleCylindre2_1.a0
      cercleCylindre2_1.t = 0
      cercleCylindre2_1.a0 = -25;
      cercleCylindre2_1.a1 = 0;
      cercleCylindre2_1.duration = 1.0;
      cercleCylindre2_1.animationStatus = 4;
    }
    break;
    case 4:
    cercleCylindre2_1.position.x = translate
    if (cercleCylindre2_1.t > cercleCylindre2_1.duration) {
      cercleCylindre2_1.position.x = cercleCylindre2_1.a0
      cercleCylindre2_1.t = 0
      cercleCylindre2_1.a0 = 0;
      cercleCylindre2_1.a1 = -65;
      cercleCylindre2_1.duration = 1.0;
      cercleCylindre2_1.animationStatus = 1;
    }
    break;
}
}
    cercleCylindre2_2.onClick = function (intersection) {
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre2_2.updateAnimation = function (dt) {
cercleCylindre2_2.t += dt;
let translate = cercleCylindre2_2.a0+cercleCylindre2_2.t * (cercleCylindre2_2.a1 - cercleCylindre2_2.a0) / cercleCylindre2_2.duration ;
switch (cercleCylindre2_2.animationStatus) {
  case 1:
    cercleCylindre2_2.position.x = translate
    if (cercleCylindre2_2.t > cercleCylindre2_2.duration) {
      cercleCylindre2_2.position.x = cercleCylindre2_2.a1;
      cercleCylindre2_2.t=0;
      cercleCylindre2_2.a0 = -65;
      cercleCylindre2_2.a1 = -85;
      cercleCylindre2_2.duration = 1.0;
      cercleCylindre2_2.animationStatus = 2;
    }
    break;
  case 2:
    cercleCylindre2_2.position.x = translate
    if (cercleCylindre2_2.t > cercleCylindre2_2.duration) {
      cercleCylindre2_2.position.x = cercleCylindre2_2.a0
      cercleCylindre2_2.t = 0
      cercleCylindre2_2.a0 = -85;
      cercleCylindre2_2.a1 = -25;
      cercleCylindre2_2.duration = 1.0;
      cercleCylindre2_2.animationStatus = 3;
    }
    break;
    case 3:
    cercleCylindre2_2.position.x = translate
    if (cercleCylindre2_2.t > cercleCylindre2_2.duration) {
      cercleCylindre2_2.position.x = cercleCylindre2_2.a0
      cercleCylindre2_2.t = 0
      cercleCylindre2_2.a0 = -25;
      cercleCylindre2_2.a1 = 0;
      cercleCylindre2_2.duration = 1.0;
      cercleCylindre2_2.animationStatus = 4;
    }
    break;
    case 4:
    cercleCylindre2_2.position.x = translate
    if (cercleCylindre2_2.t > cercleCylindre2_2.duration) {
      cercleCylindre2_2.position.x = cercleCylindre2_2.a0
      cercleCylindre2_2.t = 0
      cercleCylindre2_2.a0 = 0;
      cercleCylindre2_2.a1 = -65;
      cercleCylindre2_2.duration = 1.0;
      cercleCylindre2_2.animationStatus = 1;
    }
    break;
}
}
    cercleCylindre2_3.onClick = function (intersection) {
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre2_3.updateAnimation = function (dt) {
cercleCylindre2_3.t += dt;
let translate = cercleCylindre2_3.a0+cercleCylindre2_3.t * (cercleCylindre2_3.a1 - cercleCylindre2_3.a0) / cercleCylindre2_3.duration ;
switch (cercleCylindre2_3.animationStatus) {
  case 1:
    cercleCylindre2_3.position.x = translate
    if (cercleCylindre2_3.t > cercleCylindre2_3.duration) {
      cercleCylindre2_3.position.x = cercleCylindre2_3.a1;
      cercleCylindre2_3.t=0;
      cercleCylindre2_3.a0 = -65;
      cercleCylindre2_3.a1 = -85;
      cercleCylindre2_3.duration = 1.0;
      cercleCylindre2_3.animationStatus = 2;
    }
    break;
  case 2:
    cercleCylindre2_3.position.x = translate
    if (cercleCylindre2_3.t > cercleCylindre2_3.duration) {
      cercleCylindre2_3.position.x = cercleCylindre2_3.a0
      cercleCylindre2_3.t = 0
      cercleCylindre2_3.a0 = -85;
      cercleCylindre2_3.a1 = -25;
      cercleCylindre2_3.duration = 1.0;
      cercleCylindre2_3.animationStatus = 3;
    }
    break;
    case 3:
    cercleCylindre2_3.position.x = translate
    if (cercleCylindre2_3.t > cercleCylindre2_3.duration) {
      cercleCylindre2_3.position.x = cercleCylindre2_3.a0
      cercleCylindre2_3.t = 0
      cercleCylindre2_3.a0 = -25;
      cercleCylindre2_3.a1 = 0;
      cercleCylindre2_3.duration = 1.0;
      cercleCylindre2_3.animationStatus = 4;
    }
    break;
    case 4:
    cercleCylindre2_3.position.x = translate
    if (cercleCylindre2_3.t > cercleCylindre2_3.duration) {
      cercleCylindre2_3.position.x = cercleCylindre2_3.a0
      cercleCylindre2_3.t = 0
      cercleCylindre2_3.a0 = 0;
      cercleCylindre2_3.a1 = -65;
      cercleCylindre2_3.duration = 1.0;
      cercleCylindre2_3.animationStatus = 1;
    }
    break;
}
}
    lienCylindre2.onClick = function (intersection) {
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre2.updateAnimation = function (dt) {
lienCylindre2.t += dt;
let translate = lienCylindre2.a0+lienCylindre2.t * (lienCylindre2.a1 - lienCylindre2.a0) / lienCylindre2.duration ;
switch (lienCylindre2.animationStatus) {
  case 1:
    lienCylindre2.position.x = translate
    if (lienCylindre2.t > lienCylindre2.duration) {
      lienCylindre2.position.x = lienCylindre2.a1;
      lienCylindre2.t=0;
      lienCylindre2.a0 = -65;
      lienCylindre2.a1 = -85;
      lienCylindre2.duration = 1.0;
      lienCylindre2.animationStatus = 2;
    }
    break;
  case 2:
    lienCylindre2.position.x = translate
    if (lienCylindre2.t > lienCylindre2.duration) {
      lienCylindre2.position.x = lienCylindre2.a0
      lienCylindre2.t = 0
      lienCylindre2.a0 = -85;
      lienCylindre2.a1 = -25;
      lienCylindre2.duration = 1.0;
      lienCylindre2.animationStatus = 3;
    }
    break;
    case 3:
    lienCylindre2.position.x = translate
    if (lienCylindre2.t > lienCylindre2.duration) {
      lienCylindre2.position.x = lienCylindre2.a0
      lienCylindre2.t = 0
      lienCylindre2.a0 = -25;
      lienCylindre2.a1 = 0;
      lienCylindre2.duration = 1.0;
      lienCylindre2.animationStatus = 4;
    }
    break;
    case 4:
    lienCylindre2.position.x = translate
    if (lienCylindre2.t > lienCylindre2.duration) {
      lienCylindre2.position.x = lienCylindre2.a0
      lienCylindre2.t = 0
      lienCylindre2.a0 = 0;
      lienCylindre2.a1 = -65;
      lienCylindre2.duration = 1.0;
      lienCylindre2.animationStatus = 1;
    }
    break;
}
}
    baseCylindre2_1.onClick = function (intersection){
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre2_1.updateAnimation = function(dt){
      baseCylindre2_1.t += dt;
      let translate = baseCylindre2_1.  a0+baseCylindre2_1.t * (baseCylindre2_1.a1 - baseCylindre2_1.a0) / baseCylindre2_1.duration ;
      let rotate = baseCylindre2_1.z0+baseCylindre2_1.t*(baseCylindre2_1.z1-baseCylindre2_1.z0)/baseCylindre2_1.duration
      switch (baseCylindre2_1.animationStatus) {
        case 1:
          baseCylindre2_1.position.x = translate
          baseCylindre2_1.rotation.y = rotate
          if (baseCylindre2_1.t > baseCylindre2_1.duration) {
            baseCylindre2_1.position.x = baseCylindre2_1.a1
            baseCylindre2_1.rotation.y = baseCylindre2_1.z1
            baseCylindre2_1.t = 0
            baseCylindre2_1.a0 = -65
            baseCylindre2_1.a1 = -85
            baseCylindre2_1.z0 = -Math.PI / 20;
            baseCylindre2_1.z1 = Math.PI / 18;
            baseCylindre2_1.duration = 1.0;
            baseCylindre2_1.animationStatus = 2;
          }
        break;
        case 2:
          baseCylindre2_1.position.x = translate
          baseCylindre2_1.rotation.y = rotate
          if(baseCylindre2_1.t > baseCylindre2_1.duration){
            baseCylindre2_1.position.x = baseCylindre2_1.a1
            baseCylindre2_1.rotation.y = baseCylindre2_1.z1
            baseCylindre2_1.t = 0
            baseCylindre2_1.a0 = -85
            baseCylindre2_1.a1 = -25
            baseCylindre2_1.z0 = Math.PI/18;
            baseCylindre2_1.z1 = Math.PI / 11;
            baseCylindre2_1.duration = 1.0;
            baseCylindre2_1.animationStatus = 3;
          }
        break;
        case 3:
          baseCylindre2_1.position.x = translate
          baseCylindre2_1.rotation.y = rotate
          if(baseCylindre2_1.t > baseCylindre2_1.duration){
            baseCylindre2_1.position.x = baseCylindre2_1.a1
            baseCylindre2_1.rotation.y = baseCylindre2_1.z1
            baseCylindre2_1.t = 0
            baseCylindre2_1.a0 = -25
            baseCylindre2_1.a1 = 0
            baseCylindre2_1.z0 = Math.PI / 11;
            baseCylindre2_1.z1 = 0;
            baseCylindre2_1.duration = 1.0;
            baseCylindre2_1.animationStatus = 4;
          }
        break;
        case 4:
          baseCylindre2_1.position.x = translate
          baseCylindre2_1.rotation.y = rotate
          if(baseCylindre2_1.t > baseCylindre2_1.duration){
            baseCylindre2_1.position.x = baseCylindre2_1.a1
            baseCylindre2_1.rotation.y = baseCylindre2_1.z1
            baseCylindre2_1.t = 0
            baseCylindre2_1.a0 = 0
            baseCylindre2_1.a1 = -65
            baseCylindre2_1.z0 = 0;
            baseCylindre2_1.z1 = -Math.PI / 20;
            baseCylindre2_1.duration = 1.0;
            baseCylindre2_1.animationStatus = 1;
          }
        break;
      }
    }
    baseCylindre2_2.onClick = function (intersection){
      waitPalmares()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    baseCylindre2_2.updateAnimation = function(dt){
      baseCylindre2_2.t += dt;
      let translate = baseCylindre2_2.a0+baseCylindre2_2.t * (baseCylindre2_2.a1 - baseCylindre2_2.a0) / baseCylindre2_2.duration ;
      let rotate = baseCylindre2_2.z0+baseCylindre2_2.t*(baseCylindre2_2.z1-baseCylindre2_2.z0)/baseCylindre2_2.duration
      switch (baseCylindre2_2.animationStatus) {
        case 1:
          baseCylindre2_2.position.x = translate
          baseCylindre2_2.rotation.y = rotate
          if (baseCylindre2_2.t > baseCylindre2_2.duration) {
            baseCylindre2_2.position.x = baseCylindre2_2.a1
            baseCylindre2_2.rotation.y = baseCylindre2_2.z1
            baseCylindre2_2.t = 0
            baseCylindre2_2.a0 = -65
            baseCylindre2_2.a1 = -85
            baseCylindre2_2.z0 = -Math.PI / 20;
            baseCylindre2_2.z1 = Math.PI/18;
            baseCylindre2_2.duration = 1.0;
            baseCylindre2_2.animationStatus = 2;
          }
        break;
        case 2:
          baseCylindre2_2.position.x = translate
          baseCylindre2_2.rotation.y = rotate
          if(baseCylindre2_2.t > baseCylindre2_2.duration){
            baseCylindre2_2.position.x = baseCylindre2_2.a1
            baseCylindre2_2.rotation.y = baseCylindre2_2.z1
            baseCylindre2_2.t = 0
            baseCylindre2_2.a0 = -85
            baseCylindre2_2.a1 = -25
            baseCylindre2_2.z0 = Math.PI / 18;
            baseCylindre2_2.z1 = Math.PI/11;
            baseCylindre2_2.duration = 1.0;
            baseCylindre2_2.animationStatus = 3;
          }
        break;
        case 3:
          baseCylindre2_2.position.x = translate
          baseCylindre2_2.rotation.y = rotate
          if(baseCylindre2_2.t > baseCylindre2_2.duration){
            baseCylindre2_2.position.x = baseCylindre2_2.a1
            baseCylindre2_2.rotation.y = baseCylindre2_2.z1
            baseCylindre2_2.t = 0
            baseCylindre2_2.a0 = -25
            baseCylindre2_2.a1 = 0
            baseCylindre2_2.z0 = Math.PI / 11;
            baseCylindre2_2.z1 = 0;
            baseCylindre2_2.duration = 1.0;
            baseCylindre2_2.animationStatus = 4;
          }
        break;
        case 4:
          baseCylindre2_2.position.x = translate
          baseCylindre2_2.rotation.y = rotate
          if(baseCylindre2_2.t > baseCylindre2_2.duration){
            baseCylindre2_2.position.x = baseCylindre2_2.a1
            baseCylindre2_2.rotation.y = baseCylindre2_2.z1
            baseCylindre2_2.t = 0
            baseCylindre2_2.a0 = 0
            baseCylindre2_2.a1 = -65
            baseCylindre2_2.z0 = 0;
            baseCylindre2_2.z1 = -Math.PI / 20;
            baseCylindre2_2.duration = 1.0;
            baseCylindre2_2.animationStatus = 1;
          }
        break;
      }
    }
  
    cylindre3.onClick = function (intersection) {
      waitLivredOr()
      
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre3.updateAnimation = function(dt){
      cylindre3.t += dt;
      let translate = cylindre3.a0+cylindre3.t * (cylindre3.a1 - cylindre3.a0) / cylindre3.duration ;
      switch (cylindre3.animationStatus) {
        case 1:
          cylindre3.position.x = translate
          if (cylindre3.t > cylindre3.duration) {
            cylindre3.position.x = cylindre3.a1;
            cylindre3.t=0;
            cylindre3.a0 = -33;
            cylindre3.a1 = -85;
            cylindre3.duration = 1.0;
            cylindre3.animationStatus = 2;
          }
          break;
        case 2:
          cylindre3.position.x = translate
          if (cylindre3.t > cylindre3.duration) {
            cylindre3.position.x = cylindre3.a0
            cylindre3.t = 0
            cylindre3.a0 = -85;
            cylindre3.a1 = -45;
            cylindre3.duration = 1.0;
            cylindre3.animationStatus = 3;
          }
          break;
          case 3:
          cylindre3.position.x = translate
          if (cylindre3.t > cylindre3.duration) {
            cylindre3.position.x = cylindre3.a0
            cylindre3.t = 0
            cylindre3.a0 = -45;
            cylindre3.a1 = 0;
            cylindre3.duration = 1.0;
            cylindre3.animationStatus = 4;
          }
          break;
          case 4:
          cylindre3.position.x = translate
          if (cylindre3.t > cylindre3.duration) {
            cylindre3.position.x = cylindre3.a0
            cylindre3.t = 0
            cylindre3.a0 = 0;
            cylindre3.a1 = -33;
            cylindre3.duration = 1.0;
            cylindre3.animationStatus = 1;
          }
          break;
      }
    }

    cercleCylindre3_1.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre3_1.updateAnimation = function(dt){
      cercleCylindre3_1.t += dt;
      let translate = cercleCylindre3_1.a0+cercleCylindre3_1.t * (cercleCylindre3_1.a1 - cercleCylindre3_1.a0) / cercleCylindre3_1.duration ;
      switch (cercleCylindre3_1.animationStatus) {
        case 1:
          cercleCylindre3_1.position.x = translate
          if (cercleCylindre3_1.t > cercleCylindre3_1.duration) {
            cercleCylindre3_1.position.x = cercleCylindre3_1.a1;
            cercleCylindre3_1.t=0;
            cercleCylindre3_1.a0 = -33;
            cercleCylindre3_1.a1 = -85;
            cercleCylindre3_1.duration = 1.0;
            cercleCylindre3_1.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre3_1.position.x = translate
          if (cercleCylindre3_1.t > cercleCylindre3_1.duration) {
            cercleCylindre3_1.position.x = cercleCylindre3_1.a0
            cercleCylindre3_1.t = 0
            cercleCylindre3_1.a0 = -85;
            cercleCylindre3_1.a1 = -45;
            cercleCylindre3_1.duration = 1.0;
            cercleCylindre3_1.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre3_1.position.x = translate
          if (cercleCylindre3_1.t > cercleCylindre3_1.duration) {
            cercleCylindre3_1.position.x = cercleCylindre3_1.a0
            cercleCylindre3_1.t = 0
            cercleCylindre3_1.a0 = -45;
            cercleCylindre3_1.a1 = 0;
            cercleCylindre3_1.duration = 1.0;
            cercleCylindre3_1.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre3_1.position.x = translate
          if (cercleCylindre3_1.t > cercleCylindre3_1.duration) {
            cercleCylindre3_1.position.x = cercleCylindre3_1.a0
            cercleCylindre3_1.t = 0
            cercleCylindre3_1.a0 = 0;
            cercleCylindre3_1.a1 = -33;
            cercleCylindre3_1.duration = 1.0;
            cercleCylindre3_1.animationStatus = 1;
          }
          break;
      }
}

    cercleCylindre3_2.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre3_2.updateAnimation = function(dt){
      cercleCylindre3_2.t += dt;
      let translate = cercleCylindre3_2.a0+cercleCylindre3_2.t * (cercleCylindre3_2.a1 - cercleCylindre3_2.a0) / cercleCylindre3_2.duration ;
      switch (cercleCylindre3_2.animationStatus) {
        case 1:
          cercleCylindre3_2.position.x = translate
          if (cercleCylindre3_2.t > cercleCylindre3_2.duration) {
            cercleCylindre3_2.position.x = cercleCylindre3_2.a1;
            cercleCylindre3_2.t=0;
            cercleCylindre3_2.a0 = -33;
            cercleCylindre3_2.a1 = -85;
            cercleCylindre3_2.duration = 1.0;
            cercleCylindre3_2.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre3_2.position.x = translate
          if (cercleCylindre3_2.t > cercleCylindre3_2.duration) {
            cercleCylindre3_2.position.x = cercleCylindre3_2.a0
            cercleCylindre3_2.t = 0
            cercleCylindre3_2.a0 = -85;
            cercleCylindre3_2.a1 = -45;
            cercleCylindre3_2.duration = 1.0;
            cercleCylindre3_2.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre3_2.position.x = translate
          if (cercleCylindre3_2.t > cercleCylindre3_2.duration) {
            cercleCylindre3_2.position.x = cercleCylindre3_2.a0
            cercleCylindre3_2.t = 0
            cercleCylindre3_2.a0 = -45;
            cercleCylindre3_2.a1 = 0;
            cercleCylindre3_2.duration = 1.0;
            cercleCylindre3_2.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre3_2.position.x = translate
          if (cercleCylindre3_2.t > cercleCylindre3_2.duration) {
            cercleCylindre3_2.position.x = cercleCylindre3_2.a0
            cercleCylindre3_2.t = 0
            cercleCylindre3_2.a0 = 0;
            cercleCylindre3_2.a1 = -33;
            cercleCylindre3_2.duration = 1.0;
            cercleCylindre3_2.animationStatus = 1;
          }
          break;
      }
}

    cercleCylindre3_3.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre3_3.updateAnimation = function(dt){
      cercleCylindre3_3.t += dt;
      let translate = cercleCylindre3_3.a0+cercleCylindre3_3.t * (cercleCylindre3_3.a1 - cercleCylindre3_3.a0) / cercleCylindre3_3.duration ;
      switch (cercleCylindre3_3.animationStatus) {
        case 1:
          cercleCylindre3_3.position.x = translate
          if (cercleCylindre3_3.t > cercleCylindre3_3.duration) {
            cercleCylindre3_3.position.x = cercleCylindre3_3.a1;
            cercleCylindre3_3.t=0;
            cercleCylindre3_3.a0 = -33;
            cercleCylindre3_3.a1 = -85;
            cercleCylindre3_3.duration = 1.0;
            cercleCylindre3_3.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre3_3.position.x = translate
          if (cercleCylindre3_3.t > cercleCylindre3_3.duration) {
            cercleCylindre3_3.position.x = cercleCylindre3_3.a0
            cercleCylindre3_3.t = 0
            cercleCylindre3_3.a0 = -85;
            cercleCylindre3_3.a1 = -45;
            cercleCylindre3_3.duration = 1.0;
            cercleCylindre3_3.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre3_3.position.x = translate
          if (cercleCylindre3_3.t > cercleCylindre3_3.duration) {
            cercleCylindre3_3.position.x = cercleCylindre3_3.a0
            cercleCylindre3_3.t = 0
            cercleCylindre3_3.a0 = -45;
            cercleCylindre3_3.a1 = 0;
            cercleCylindre3_3.duration = 1.0;
            cercleCylindre3_3.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre3_3.position.x = translate
          if (cercleCylindre3_3.t > cercleCylindre3_3.duration) {
            cercleCylindre3_3.position.x = cercleCylindre3_3.a0
            cercleCylindre3_3.t = 0
            cercleCylindre3_3.a0 = 0;
            cercleCylindre3_3.a1 = -33;
            cercleCylindre3_3.duration = 1.0;
            cercleCylindre3_3.animationStatus = 1;
          }
          break;
      }
}

    lienCylindre3.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre3.updateAnimation = function(dt){
      lienCylindre3.t += dt;
      let translate = lienCylindre3.a0+lienCylindre3.t * (lienCylindre3.a1 - lienCylindre3.a0) / lienCylindre3.duration ;
      switch (lienCylindre3.animationStatus) {
        case 1:
          lienCylindre3.position.x = translate
          if (lienCylindre3.t > lienCylindre3.duration) {
            lienCylindre3.position.x = lienCylindre3.a1;
            lienCylindre3.t=0;
            lienCylindre3.a0 = -33;
            lienCylindre3.a1 = -85;
            lienCylindre3.duration = 1.0;
            lienCylindre3.animationStatus = 2;
          }
          break;
        case 2:
          lienCylindre3.position.x = translate
          if (lienCylindre3.t > lienCylindre3.duration) {
            lienCylindre3.position.x = lienCylindre3.a0
            lienCylindre3.t = 0
            lienCylindre3.a0 = -85;
            lienCylindre3.a1 = -45;
            lienCylindre3.duration = 1.0;
            lienCylindre3.animationStatus = 3;
          }
          break;
          case 3:
          lienCylindre3.position.x = translate
          if (lienCylindre3.t > lienCylindre3.duration) {
            lienCylindre3.position.x = lienCylindre3.a0
            lienCylindre3.t = 0
            lienCylindre3.a0 = -45;
            lienCylindre3.a1 = 0;
            lienCylindre3.duration = 1.0;
            lienCylindre3.animationStatus = 4;
          }
          break;
          case 4:
          lienCylindre3.position.x = translate
          if (lienCylindre3.t > lienCylindre3.duration) {
            lienCylindre3.position.x = lienCylindre3.a0
            lienCylindre3.t = 0
            lienCylindre3.a0 = 0;
            lienCylindre3.a1 = -33;
            lienCylindre3.duration = 1.0;
            lienCylindre3.animationStatus = 1;
          }
          break;
      }
}

    baseCylindre3_1.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    baseCylindre3_1.updateAnimation = function(dt){
      baseCylindre3_1.t += dt;
            let translate = baseCylindre3_1.a0+baseCylindre3_1.t * (baseCylindre3_1.a1 - baseCylindre3_1.a0) / baseCylindre3_1.duration ;
            let rotate = baseCylindre3_1.z0+baseCylindre3_1.t*(baseCylindre3_1.z1-baseCylindre3_1.z0)/baseCylindre3_1.duration
            switch (baseCylindre3_1.animationStatus) {
              case 1:
                baseCylindre3_1.position.x = translate
                baseCylindre3_1.rotation.y = rotate
                if (baseCylindre3_1.t > baseCylindre3_1.duration) {
                  baseCylindre3_1.position.x = baseCylindre3_1.a1
                  baseCylindre3_1.rotation.y = baseCylindre3_1.z1
                  baseCylindre3_1.t = 0
                  baseCylindre3_1.a0 = -33
                  baseCylindre3_1.a1 = -85
                  baseCylindre3_1.z0 = Math.PI / 12;
                  baseCylindre3_1.z1 = Math.PI/65;
                  baseCylindre3_1.duration = 1.0;
                  baseCylindre3_1.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre3_1.position.x = translate
                baseCylindre3_1.rotation.y = rotate
                if(baseCylindre3_1.t > baseCylindre3_1.duration){
                  baseCylindre3_1.position.x = baseCylindre3_1.a1
                  baseCylindre3_1.rotation.y = baseCylindre3_1.z1
                  baseCylindre3_1.t = 0
                  baseCylindre3_1.a0 = -85
                  baseCylindre3_1.a1 = -45
                  baseCylindre3_1.z0 = Math.PI / 65;
                  baseCylindre3_1.z1 = -Math.PI/16;
                  baseCylindre3_1.duration = 1.0;
                  baseCylindre3_1.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre3_1.position.x = translate
                baseCylindre3_1.rotation.y = rotate
                if(baseCylindre3_1.t > baseCylindre3_1.duration){
                  baseCylindre3_1.position.x = baseCylindre3_1.a1
                  baseCylindre3_1.rotation.y = baseCylindre3_1.z1
                  baseCylindre3_1.t = 0
                  baseCylindre3_1.a0 = -45
                  baseCylindre3_1.a1 = 0
                  baseCylindre3_1.z0 = -Math.PI / 16;
                  baseCylindre3_1.z1 = 0;
                  baseCylindre3_1.duration = 1.0;
                  baseCylindre3_1.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre3_1.position.x = translate
                baseCylindre3_1.rotation.y = rotate
                if(baseCylindre3_1.t > baseCylindre3_1.duration){
                  baseCylindre3_1.position.x = baseCylindre3_1.a1
                  baseCylindre3_1.rotation.y = baseCylindre3_1.z1
                  baseCylindre3_1.t = 0
                  baseCylindre3_1.a0 = 0
                  baseCylindre3_1.a1 = -33
                  baseCylindre3_1.z0 = 0;
                  baseCylindre3_1.z1 = Math.PI / 12;
                  baseCylindre3_1.duration = 1.0;
                  baseCylindre3_1.animationStatus = 1;
                }
              break;
            }
}

    baseCylindre3_2.onClick = function (intersection) {
      waitLivredOr()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }      
    }
    baseCylindre3_2.updateAnimation = function(dt){
      baseCylindre3_2.t += dt;
            let translate = baseCylindre3_2.a0+baseCylindre3_2.t * (baseCylindre3_2.a1 - baseCylindre3_2.a0) / baseCylindre3_2.duration ;
            let rotate = baseCylindre3_2.z0+baseCylindre3_2.t*(baseCylindre3_2.z1-baseCylindre3_2.z0)/baseCylindre3_2.duration
            switch (baseCylindre3_2.animationStatus) {
              case 1:
                baseCylindre3_2.position.x = translate
                baseCylindre3_2.rotation.y = rotate
                if (baseCylindre3_2.t > baseCylindre3_2.duration) {
                  baseCylindre3_2.position.x = baseCylindre3_2.a1
                  baseCylindre3_2.rotation.y = baseCylindre3_2.z1
                  baseCylindre3_2.t = 0
                  baseCylindre3_2.a0 = -33
                  baseCylindre3_2.a1 = -85
                  baseCylindre3_2.z0 = Math.PI / 12;
                  baseCylindre3_2.z1 = Math.PI / 65;
                  baseCylindre3_2.duration = 1.0;
                  baseCylindre3_2.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre3_2.position.x = translate
                baseCylindre3_2.rotation.y = rotate
                if(baseCylindre3_2.t > baseCylindre3_2.duration){
                  baseCylindre3_2.position.x = baseCylindre3_2.a1
                  baseCylindre3_2.rotation.y = baseCylindre3_2.z1
                  baseCylindre3_2.t = 0
                  baseCylindre3_2.a0 = -85
                  baseCylindre3_2.a1 = -45
                  baseCylindre3_2.z0 = Math.PI / 65;
                  baseCylindre3_2.z1 = -Math.PI/16;
                  baseCylindre3_2.duration = 1.0;
                  baseCylindre3_2.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre3_2.position.x = translate
                baseCylindre3_2.rotation.y = rotate
                if(baseCylindre3_2.t > baseCylindre3_2.duration){
                  baseCylindre3_2.position.x = baseCylindre3_2.a1
                  baseCylindre3_2.rotation.y = baseCylindre3_2.z1
                  baseCylindre3_2.t = 0
                  baseCylindre3_2.a0 = -45
                  baseCylindre3_2.a1 = 0
                  baseCylindre3_2.z0 = -Math.PI / 16;
                  baseCylindre3_2.z1 = 0;
                  baseCylindre3_2.duration = 1.0;
                  baseCylindre3_2.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre3_2.position.x = translate
                baseCylindre3_2.rotation.y = rotate
                if(baseCylindre3_2.t > baseCylindre3_2.duration){
                  baseCylindre3_2.position.x = baseCylindre3_2.a1
                  baseCylindre3_2.rotation.y = baseCylindre3_2.z1
                  baseCylindre3_2.t = 0
                  baseCylindre3_2.a0 = 0
                  baseCylindre3_2.a1 = -33
                  baseCylindre3_2.z0 = 0;
                  baseCylindre3_2.z1 = Math.PI / 12;
                  baseCylindre3_2.duration = 1.0;
                  baseCylindre3_2.animationStatus = 1;
                }
              break;
            }
    }
   
    cylindre4.onClick = function (intersection) {
      waitExpertise()
      
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre4.updateAnimation = function (dt) {
      cylindre4.t += dt;
      let translate = cylindre4.a0+cylindre4.t * (cylindre4.a1 - cylindre4.a0) / cylindre4.duration ;
      switch (cylindre4.animationStatus) {
        case 1:
          cylindre4.position.x = translate
          if (cylindre4.t > cylindre4.duration) {
            cylindre4.position.x = cylindre4.a1;
            cylindre4.t=0;
            cylindre4.a0 = 35;
            cylindre4.a1 = 85;
            cylindre4.duration = 1.0;
            cylindre4.animationStatus = 2;
          }
          break;
        case 2:
          cylindre4.position.x = translate
          if (cylindre4.t > cylindre4.duration) {
            cylindre4.position.x = cylindre4.a0
            cylindre4.t = 0
            cylindre4.a0 = 85;
            cylindre4.a1 = 45;
            cylindre4.duration = 1.0;
            cylindre4.animationStatus = 3;
          }
          break;
          case 3:
          cylindre4.position.x = translate
          if (cylindre4.t > cylindre4.duration) {
            cylindre4.position.x = cylindre4.a0
            cylindre4.t = 0
            cylindre4.a0 = 45;
            cylindre4.a1 = 0;
            cylindre4.duration = 1.0;
            cylindre4.animationStatus = 4;
          }
          break;
          case 4:
          cylindre4.position.x = translate
          if (cylindre4.t > cylindre4.duration) {
            cylindre4.position.x = cylindre4.a0
            cylindre4.t = 0
            cylindre4.a0 = 0;
            cylindre4.a1 = 35;
            cylindre4.duration = 1.0;
            cylindre4.animationStatus = 1;
          }
          break;
      }
    }
    cercleCylindre4_1.onClick = function (intersection) {
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre4_1.updateAnimation = function (dt) {
      cercleCylindre4_1.t += dt;

let translate = cercleCylindre4_1.a0+cercleCylindre4_1.t * (cercleCylindre4_1.a1 - cercleCylindre4_1.a0) / cercleCylindre4_1.duration ;
      switch (cercleCylindre4_1.animationStatus) {
        case 1:
          cercleCylindre4_1.position.x = translate
          if (cercleCylindre4_1.t > cercleCylindre4_1.duration) {
            cercleCylindre4_1.position.x = cercleCylindre4_1.a1;
            cercleCylindre4_1.t=0;
            cercleCylindre4_1.a0 = 35;
            cercleCylindre4_1.a1 = 85;
            cercleCylindre4_1.duration = 1.0;
            cercleCylindre4_1.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre4_1.position.x = translate
          if (cercleCylindre4_1.t > cercleCylindre4_1.duration) {
            cercleCylindre4_1.position.x = cercleCylindre4_1.a0
            cercleCylindre4_1.t = 0
            cercleCylindre4_1.a0 = 85;
            cercleCylindre4_1.a1 = 45;
            cercleCylindre4_1.duration = 1.0;
            cercleCylindre4_1.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre4_1.position.x = translate
          if (cercleCylindre4_1.t > cercleCylindre4_1.duration) {
            cercleCylindre4_1.position.x = cercleCylindre4_1.a0
            cercleCylindre4_1.t = 0
            cercleCylindre4_1.a0 = 45;
            cercleCylindre4_1.a1 = 0;
            cercleCylindre4_1.duration = 1.0;
            cercleCylindre4_1.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre4_1.position.x = translate
          if (cercleCylindre4_1.t > cercleCylindre4_1.duration) {
            cercleCylindre4_1.position.x = cercleCylindre4_1.a0
            cercleCylindre4_1.t = 0
            cercleCylindre4_1.a0 = 0;
            cercleCylindre4_1.a1 = 35;
            cercleCylindre4_1.duration = 1.0;
            cercleCylindre4_1.animationStatus = 1;
          }
          break;
      }
}
    cercleCylindre4_2.onClick = function (intersection) {
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre4_2.updateAnimation = function (dt) {
      cercleCylindre4_2.t += dt;
      let translate = cercleCylindre4_2.a0+cercleCylindre4_2.t * (cercleCylindre4_2.a1 - cercleCylindre4_2.a0) / cercleCylindre4_2.duration ;
      switch (cercleCylindre4_2.animationStatus) {
        case 1:
          cercleCylindre4_2.position.x = translate
          if (cercleCylindre4_2.t > cercleCylindre4_2.duration) {
            cercleCylindre4_2.position.x = cercleCylindre4_2.a1;
            cercleCylindre4_2.t=0;
            cercleCylindre4_2.a0 = 35;
            cercleCylindre4_2.a1 = 85;
            cercleCylindre4_2.duration = 1.0;
            cercleCylindre4_2.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre4_2.position.x = translate
          if (cercleCylindre4_2.t > cercleCylindre4_2.duration) {
            cercleCylindre4_2.position.x = cercleCylindre4_2.a0
            cercleCylindre4_2.t = 0
            cercleCylindre4_2.a0 = 85;
            cercleCylindre4_2.a1 = 45;
            cercleCylindre4_2.duration = 1.0;
            cercleCylindre4_2.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre4_2.position.x = translate
          if (cercleCylindre4_2.t > cercleCylindre4_2.duration) {
            cercleCylindre4_2.position.x = cercleCylindre4_2.a0
            cercleCylindre4_2.t = 0
            cercleCylindre4_2.a0 = 45;
            cercleCylindre4_2.a1 = 0;
            cercleCylindre4_2.duration = 1.0;
            cercleCylindre4_2.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre4_2.position.x = translate
          if (cercleCylindre4_2.t > cercleCylindre4_2.duration) {
            cercleCylindre4_2.position.x = cercleCylindre4_2.a0
            cercleCylindre4_2.t = 0
            cercleCylindre4_2.a0 = 0;
            cercleCylindre4_2.a1 = 35;
            cercleCylindre4_2.duration = 1.0;
            cercleCylindre4_2.animationStatus = 1;
          }
          break;
      }
}
    cercleCylindre4_3.onClick = function (intersection) {
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre4_3.updateAnimation = function (dt) {
      cercleCylindre4_3.t += dt;
      let translate = cercleCylindre4_3.a0+cercleCylindre4_3.t * (cercleCylindre4_3.a1 - cercleCylindre4_3.a0) / cercleCylindre4_3.duration ;
      switch (cercleCylindre4_3.animationStatus) {
        case 1:
          cercleCylindre4_3.position.x = translate
          if (cercleCylindre4_3.t > cercleCylindre4_3.duration) {
            cercleCylindre4_3.position.x = cercleCylindre4_3.a1;
            cercleCylindre4_3.t=0;
            cercleCylindre4_3.a0 = 35;
            cercleCylindre4_3.a1 = 85;
            cercleCylindre4_3.duration = 1.0;
            cercleCylindre4_3.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre4_3.position.x = translate
          if (cercleCylindre4_3.t > cercleCylindre4_3.duration) {
            cercleCylindre4_3.position.x = cercleCylindre4_3.a0
            cercleCylindre4_3.t = 0
            cercleCylindre4_3.a0 = 85;
            cercleCylindre4_3.a1 = 45;
            cercleCylindre4_3.duration = 1.0;
            cercleCylindre4_3.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre4_3.position.x = translate
          if (cercleCylindre4_3.t > cercleCylindre4_3.duration) {
            cercleCylindre4_3.position.x = cercleCylindre4_3.a0
            cercleCylindre4_3.t = 0
            cercleCylindre4_3.a0 = 45;
            cercleCylindre4_3.a1 = 0;
            cercleCylindre4_3.duration = 1.0;
            cercleCylindre4_3.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre4_3.position.x = translate
          if (cercleCylindre4_3.t > cercleCylindre4_3.duration) {
            cercleCylindre4_3.position.x = cercleCylindre4_3.a0
            cercleCylindre4_3.t = 0
            cercleCylindre4_3.a0 = 0;
            cercleCylindre4_3.a1 = 35;
            cercleCylindre4_3.duration = 1.0;
            cercleCylindre4_3.animationStatus = 1;
          }
          break;
      }
}
    lienCylindre4.onClick = function (intersection) {
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre4.updateAnimation = function (dt) {
      lienCylindre4.t += dt;
      let translate = lienCylindre4.a0+lienCylindre4.t * (lienCylindre4.a1 - lienCylindre4.a0) / lienCylindre4.duration ;
      switch (lienCylindre4.animationStatus) {
        case 1:
          lienCylindre4.position.x = translate
          if (lienCylindre4.t > lienCylindre4.duration) {
            lienCylindre4.position.x = lienCylindre4.a1;
            lienCylindre4.t=0;
            lienCylindre4.a0 = 35;
            lienCylindre4.a1 = 85;
            lienCylindre4.duration = 1.0;
            lienCylindre4.animationStatus = 2;
          }
          break;
        case 2:
          lienCylindre4.position.x = translate
          if (lienCylindre4.t > lienCylindre4.duration) {
            lienCylindre4.position.x = lienCylindre4.a0
            lienCylindre4.t = 0
            lienCylindre4.a0 = 85;
            lienCylindre4.a1 = 45;
            lienCylindre4.duration = 1.0;
            lienCylindre4.animationStatus = 3;
          }
          break;
          case 3:
          lienCylindre4.position.x = translate
          if (lienCylindre4.t > lienCylindre4.duration) {
            lienCylindre4.position.x = lienCylindre4.a0
            lienCylindre4.t = 0
            lienCylindre4.a0 = 45;
            lienCylindre4.a1 = 0;
            lienCylindre4.duration = 1.0;
            lienCylindre4.animationStatus = 4;
          }
          break;
          case 4:
          lienCylindre4.position.x = translate
          if (lienCylindre4.t > lienCylindre4.duration) {
            lienCylindre4.position.x = lienCylindre4.a0
            lienCylindre4.t = 0
            lienCylindre4.a0 = 0;
            lienCylindre4.a1 = 35;
            lienCylindre4.duration = 1.0;
            lienCylindre4.animationStatus = 1;
          }
          break;
      }
}
    baseCylindre4_1.onClick = function (intersection){
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre4_1.updateAnimation = function(dt){
      baseCylindre4_1.t += dt;
      let translate = baseCylindre4_1.  a0+baseCylindre4_1.t * (baseCylindre4_1.a1 - baseCylindre4_1.a0) / baseCylindre4_1.duration ;
      let rotate = baseCylindre4_1.z0+baseCylindre4_1.t*(baseCylindre4_1.z1-baseCylindre4_1.z0)/baseCylindre4_1.duration
      let rotate2 = Math.sqrt(  )
      switch (baseCylindre4_1.animationStatus) {
        case 1:
          baseCylindre4_1.position.x = translate
          baseCylindre4_1.rotation.y = rotate
          if (baseCylindre4_1.t > baseCylindre4_1.duration) {
            baseCylindre4_1.position.x = baseCylindre4_1.a1
            baseCylindre4_1.rotation.y = baseCylindre4_1.z1
            baseCylindre4_1.t = 0
            baseCylindre4_1.a0 = 35
            baseCylindre4_1.a1 = 85
            baseCylindre4_1.z0 = Math.PI / 12;
            baseCylindre4_1.z1 = Math.PI / 40;
            baseCylindre4_1.duration = 1.0;
            baseCylindre4_1.animationStatus = 2;
          }
        break;
        case 2:
          baseCylindre4_1.position.x = translate
          baseCylindre4_1.rotation.y = rotate
          if(baseCylindre4_1.t > baseCylindre4_1.duration){
            baseCylindre4_1.position.x = baseCylindre4_1.a1
            baseCylindre4_1.rotation.y = baseCylindre4_1.z1
            baseCylindre4_1.t = 0
            baseCylindre4_1.a0 = 85
            baseCylindre4_1.a1 = 45
            baseCylindre4_1.z0 = Math.PI/40;
            baseCylindre4_1.z1 = -Math.PI / 16;
            baseCylindre4_1.duration = 1.0;
            baseCylindre4_1.animationStatus = 3;
          }
        break;
        case 3:
          baseCylindre4_1.position.x = translate
          baseCylindre4_1.rotation.y = rotate
          if(baseCylindre4_1.t > baseCylindre4_1.duration){
            baseCylindre4_1.position.x = baseCylindre4_1.a1
            baseCylindre4_1.rotation.y = baseCylindre4_1.z1
            baseCylindre4_1.t = 0
            baseCylindre4_1.a0 = 45
            baseCylindre4_1.a1 = 0
            baseCylindre4_1.z0 = -Math.PI / 16;
            baseCylindre4_1.z1 = 0;
            baseCylindre4_1.duration = 1.0;
            baseCylindre4_1.animationStatus = 4;
          }
        break;
        case 4:
          baseCylindre4_1.position.x = translate
          baseCylindre4_1.rotation.y = rotate
          if(baseCylindre4_1.t > baseCylindre4_1.duration){
            baseCylindre4_1.position.x = baseCylindre4_1.a1
            baseCylindre4_1.rotation.y = baseCylindre4_1.z1
            baseCylindre4_1.t = 0
            baseCylindre4_1.a0 = 0
            baseCylindre4_1.a1 = 35
            baseCylindre4_1.z0 = 0;
            baseCylindre4_1.z1 = Math.PI / 12;
            baseCylindre4_1.duration = 1.0;
            baseCylindre4_1.animationStatus = 1;
          }
        break;
      }
    }
    baseCylindre4_2.onClick = function (intersection){
      waitExpertise()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    baseCylindre4_2.updateAnimation = function(dt){
      baseCylindre4_2.t += dt;
            let translate = baseCylindre4_2.a0+baseCylindre4_2.t * (baseCylindre4_2.a1 - baseCylindre4_2.a0) / baseCylindre4_2.duration ;
            let rotate = baseCylindre4_2.z0+baseCylindre4_2.t*(baseCylindre4_2.z1-baseCylindre4_2.z0)/baseCylindre4_2.duration
            switch (baseCylindre4_2.animationStatus) {
              case 1:
                baseCylindre4_2.position.x = translate
                baseCylindre4_2.rotation.y = rotate
                if (baseCylindre4_2.t > baseCylindre4_2.duration) {
                  baseCylindre4_2.position.x = baseCylindre4_2.a1
                  baseCylindre4_2.rotation.y = baseCylindre4_2.z1
                  baseCylindre4_2.t = 0
                  baseCylindre4_2.a0 = 35
                  baseCylindre4_2.a1 = 85
                  baseCylindre4_2.z0 = Math.PI / 12;
                  baseCylindre4_2.z1 = Math.PI / 40;
                  baseCylindre4_2.duration = 1.0;
                  baseCylindre4_2.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre4_2.position.x = translate
                baseCylindre4_2.rotation.y = rotate
                if(baseCylindre4_2.t > baseCylindre4_2.duration){
                  baseCylindre4_2.position.x = baseCylindre4_2.a1
                  baseCylindre4_2.rotation.y = baseCylindre4_2.z1
                  baseCylindre4_2.t = 0
                  baseCylindre4_2.a0 = 85
                  baseCylindre4_2.a1 = 45
                  baseCylindre4_2.z0 = Math.PI / 40;
                  baseCylindre4_2.z1 = -Math.PI/16;
                  baseCylindre4_2.duration = 1.0;
                  baseCylindre4_2.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre4_2.position.x = translate
                baseCylindre4_2.rotation.y = rotate
                if(baseCylindre4_2.t > baseCylindre4_2.duration){
                  baseCylindre4_2.position.x = baseCylindre4_2.a1
                  baseCylindre4_2.rotation.y = baseCylindre4_2.z1
                  baseCylindre4_2.t = 0
                  baseCylindre4_2.a0 = 45
                  baseCylindre4_2.a1 = 0
                  baseCylindre4_2.z0 = -Math.PI / 16;
                  baseCylindre4_2.z1 = 0;
                  baseCylindre4_2.duration = 1.0;
                  baseCylindre4_2.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre4_2.position.x = translate
                baseCylindre4_2.rotation.y = rotate
                if(baseCylindre4_2.t > baseCylindre4_2.duration){
                  baseCylindre4_2.position.x = baseCylindre4_2.a1
                  baseCylindre4_2.rotation.y = baseCylindre4_2.z1
                  baseCylindre4_2.t = 0
                  baseCylindre4_2.a0 = 0
                  baseCylindre4_2.a1 = 35
                  baseCylindre4_2.z0 = 0;
                  baseCylindre4_2.z1 = Math.PI / 12;
                  baseCylindre4_2.duration = 1.0;
                  baseCylindre4_2.animationStatus = 1;
                }
              break;
            }
    }
    
    cylindre5.onClick = function (intersection) {
      waitGalerie()
      
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre5.updateAnimation = function (dt) {
      cylindre5.t += dt;
      let translate = cylindre5.a0+cylindre5.t * (cylindre5.a1 - cylindre5.a0) / cylindre5.duration ;
      switch (cylindre5.animationStatus) {
        case 1:
          cylindre5.position.x = translate
          if (cylindre5.t > cylindre5.duration) {
            cylindre5.position.x = cylindre5.a1;
            cylindre5.t=0;
            cylindre5.a0 = -25;
            cylindre5.a1 = 35;
            cylindre5.duration = 1.0;
            cylindre5.animationStatus = 2;
          }
          break;
        case 2:
          cylindre5.position.x = translate
          if (cylindre5.t > cylindre5.duration) {
            cylindre5.position.x = cylindre5.a0
            cylindre5.t = 0
            cylindre5.a0 = 35;
            cylindre5.a1 = 55;
            cylindre5.duration = 1.0;
            cylindre5.animationStatus = 3;
          }
          break;
          case 3:
          cylindre5.position.x = translate
          if (cylindre5.t > cylindre5.duration) {
            cylindre5.position.x = cylindre5.a0
            cylindre5.t = 0
            cylindre5.a0 = 55;
            cylindre5.a1 = 0;
            cylindre5.duration = 1.0;
            cylindre5.animationStatus = 4;
          }
          break;
          case 4:
          cylindre5.position.x = translate
          if (cylindre5.t > cylindre5.duration) {
            cylindre5.position.x = cylindre5.a0
            cylindre5.t = 0
            cylindre5.a0 = 0;
            cylindre5.a1 = -25;
            cylindre5.duration = 1.0;
            cylindre5.animationStatus = 1;
          }
          break;
      }
    
    }
    cercleCylindre5_1.onClick = function (intersection) {
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre5_1.updateAnimation = function (dt) {
      cercleCylindre5_1.t += dt;
      let translate = cercleCylindre5_1.a0+cercleCylindre5_1.t * (cercleCylindre5_1.a1 - cercleCylindre5_1.a0) / cercleCylindre5_1.duration ;
      switch (cercleCylindre5_1.animationStatus) {
        case 1:
          cercleCylindre5_1.position.x = translate
          if (cercleCylindre5_1.t > cercleCylindre5_1.duration) {
            cercleCylindre5_1.position.x = cercleCylindre5_1.a1;
            cercleCylindre5_1.t=0;
            cercleCylindre5_1.a0 = -25;
            cercleCylindre5_1.a1 = 35;
            cercleCylindre5_1.duration = 1.0;
            cercleCylindre5_1.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre5_1.position.x = translate
          if (cercleCylindre5_1.t > cercleCylindre5_1.duration) {
            cercleCylindre5_1.position.x = cercleCylindre5_1.a0
            cercleCylindre5_1.t = 0
            cercleCylindre5_1.a0 = 35;
            cercleCylindre5_1.a1 = 55;
            cercleCylindre5_1.duration = 1.0;
            cercleCylindre5_1.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre5_1.position.x = translate
          if (cercleCylindre5_1.t > cercleCylindre5_1.duration) {
            cercleCylindre5_1.position.x = cercleCylindre5_1.a0
            cercleCylindre5_1.t = 0
            cercleCylindre5_1.a0 = 55;
            cercleCylindre5_1.a1 = 0;
            cercleCylindre5_1.duration = 1.0;
            cercleCylindre5_1.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre5_1.position.x = translate
          if (cercleCylindre5_1.t > cercleCylindre5_1.duration) {
            cercleCylindre5_1.position.x = cercleCylindre5_1.a0
            cercleCylindre5_1.t = 0
            cercleCylindre5_1.a0 = 0;
            cercleCylindre5_1.a1 = -25;
            cercleCylindre5_1.duration = 1.0;
            cercleCylindre5_1.animationStatus = 1;
          }
          break;
      }
}
    cercleCylindre5_2.onClick = function (intersection) {
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre5_2.updateAnimation = function (dt) {
      cercleCylindre5_2.t += dt;
      let translate = cercleCylindre5_2.a0+cercleCylindre5_2.t * (cercleCylindre5_2.a1 - cercleCylindre5_2.a0) / cercleCylindre5_2.duration ;
      switch (cercleCylindre5_2.animationStatus) {
        case 1:
          cercleCylindre5_2.position.x = translate
          if (cercleCylindre5_2.t > cercleCylindre5_2.duration) {
            cercleCylindre5_2.position.x = cercleCylindre5_2.a1;
            cercleCylindre5_2.t=0;
            cercleCylindre5_2.a0 = -25;
            cercleCylindre5_2.a1 = 35;
            cercleCylindre5_2.duration = 1.0;
            cercleCylindre5_2.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre5_2.position.x = translate
          if (cercleCylindre5_2.t > cercleCylindre5_2.duration) {
            cercleCylindre5_2.position.x = cercleCylindre5_2.a0
            cercleCylindre5_2.t = 0
            cercleCylindre5_2.a0 = 35;
            cercleCylindre5_2.a1 = 55;
            cercleCylindre5_2.duration = 1.0;
            cercleCylindre5_2.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre5_2.position.x = translate
          if (cercleCylindre5_2.t > cercleCylindre5_2.duration) {
            cercleCylindre5_2.position.x = cercleCylindre5_2.a0
            cercleCylindre5_2.t = 0
            cercleCylindre5_2.a0 = 55;
            cercleCylindre5_2.a1 = 0;
            cercleCylindre5_2.duration = 1.0;
            cercleCylindre5_2.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre5_2.position.x = translate
          if (cercleCylindre5_2.t > cercleCylindre5_2.duration) {
            cercleCylindre5_2.position.x = cercleCylindre5_2.a0
            cercleCylindre5_2.t = 0
            cercleCylindre5_2.a0 = 0;
            cercleCylindre5_2.a1 = -25;
            cercleCylindre5_2.duration = 1.0;
            cercleCylindre5_2.animationStatus = 1;
          }
          break;
      }
}
    cercleCylindre5_3.onClick = function (intersection) {
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre5_3.updateAnimation = function (dt) {
      cercleCylindre5_3.t += dt;
      let translate = cercleCylindre5_3.a0+cercleCylindre5_3.t * (cercleCylindre5_3.a1 - cercleCylindre5_3.a0) / cercleCylindre5_3.duration ;
      switch (cercleCylindre5_3.animationStatus) {
        case 1:
          cercleCylindre5_3.position.x = translate
          if (cercleCylindre5_3.t > cercleCylindre5_3.duration) {
            cercleCylindre5_3.position.x = cercleCylindre5_3.a1;
            cercleCylindre5_3.t=0;
            cercleCylindre5_3.a0 = -25;
            cercleCylindre5_3.a1 = 35;
            cercleCylindre5_3.duration = 1.0;
            cercleCylindre5_3.animationStatus = 2;
          }
          break;
        case 2:
          cercleCylindre5_3.position.x = translate
          if (cercleCylindre5_3.t > cercleCylindre5_3.duration) {
            cercleCylindre5_3.position.x = cercleCylindre5_3.a0
            cercleCylindre5_3.t = 0
            cercleCylindre5_3.a0 = 35;
            cercleCylindre5_3.a1 = 55;
            cercleCylindre5_3.duration = 1.0;
            cercleCylindre5_3.animationStatus = 3;
          }
          break;
          case 3:
          cercleCylindre5_3.position.x = translate
          if (cercleCylindre5_3.t > cercleCylindre5_3.duration) {
            cercleCylindre5_3.position.x = cercleCylindre5_3.a0
            cercleCylindre5_3.t = 0
            cercleCylindre5_3.a0 = 55;
            cercleCylindre5_3.a1 = 0;
            cercleCylindre5_3.duration = 1.0;
            cercleCylindre5_3.animationStatus = 4;
          }
          break;
          case 4:
          cercleCylindre5_3.position.x = translate
          if (cercleCylindre5_3.t > cercleCylindre5_3.duration) {
            cercleCylindre5_3.position.x = cercleCylindre5_3.a0
            cercleCylindre5_3.t = 0
            cercleCylindre5_3.a0 = 0;
            cercleCylindre5_3.a1 = -25;
            cercleCylindre5_3.duration = 1.0;
            cercleCylindre5_3.animationStatus = 1;
          }
          break;
      }
        
}
    lienCylindre5.onClick = function (intersection) {
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre5.updateAnimation = function (dt) {
      lienCylindre5.t += dt;
      let translate = lienCylindre5.a0+lienCylindre5.t * (lienCylindre5.a1 - lienCylindre5.a0) / lienCylindre5.duration ;
      switch (lienCylindre5.animationStatus) {
        case 1:
          lienCylindre5.position.x = translate
          if (lienCylindre5.t > lienCylindre5.duration) {
            lienCylindre5.position.x = lienCylindre5.a1;
            lienCylindre5.t=0;
            lienCylindre5.a0 = -25;
            lienCylindre5.a1 = 35;
            lienCylindre5.duration = 1.0;
            lienCylindre5.animationStatus = 2;
          }
          break;
        case 2:
          lienCylindre5.position.x = translate
          if (lienCylindre5.t > lienCylindre5.duration) {
            lienCylindre5.position.x = lienCylindre5.a0
            lienCylindre5.t = 0
            lienCylindre5.a0 = 35;
            lienCylindre5.a1 = 55;
            lienCylindre5.duration = 1.0;
            lienCylindre5.animationStatus = 3;
          }
          break;
          case 3:
          lienCylindre5.position.x = translate
          if (lienCylindre5.t > lienCylindre5.duration) {
            lienCylindre5.position.x = lienCylindre5.a0
            lienCylindre5.t = 0
            lienCylindre5.a0 = 55;
            lienCylindre5.a1 = 0;
            lienCylindre5.duration = 1.0;
            lienCylindre5.animationStatus = 4;
          }
          break;
          case 4:
          lienCylindre5.position.x = translate
          if (lienCylindre5.t > lienCylindre5.duration) {
            lienCylindre5.position.x = lienCylindre5.a0
            lienCylindre5.t = 0
            lienCylindre5.a0 = 0;
            lienCylindre5.a1 = -25;
            lienCylindre5.duration = 1.0;
            lienCylindre5.animationStatus = 1;
          }
          break;
      }
}
    baseCylindre5_1.onClick = function (intersection){
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre5_1.updateAnimation = function(dt){
      baseCylindre5_1.t += dt;
            let translate = baseCylindre5_1.a0+baseCylindre5_1.t * (baseCylindre5_1.a1 - baseCylindre5_1.a0) / baseCylindre5_1.duration ;
            let rotate = baseCylindre5_1.z0+baseCylindre5_1.t*(baseCylindre5_1.z1-baseCylindre5_1.z0)/baseCylindre5_1.duration
            switch (baseCylindre5_1.animationStatus) {
              case 1:
                baseCylindre5_1.position.x = translate
                baseCylindre5_1.rotation.y = rotate
                if (baseCylindre5_1.t > baseCylindre5_1.duration) {
                  baseCylindre5_1.position.x = baseCylindre5_1.a1
                  baseCylindre5_1.rotation.y = baseCylindre5_1.z1
                  baseCylindre5_1.t = 0
                  baseCylindre5_1.a0 = -25
                  baseCylindre5_1.a1 = 35
                  baseCylindre5_1.z0 = -Math.PI / 11;
                  baseCylindre5_1.z1 = -Math.PI / 7.5;
                  baseCylindre5_1.duration = 1.0;
                  baseCylindre5_1.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre5_1.position.x = translate
                baseCylindre5_1.rotation.y = rotate
                if(baseCylindre5_1.t > baseCylindre5_1.duration){
                  baseCylindre5_1.position.x = baseCylindre5_1.a1
                  baseCylindre5_1.rotation.y = baseCylindre5_1.z1
                  baseCylindre5_1.t = 0
                  baseCylindre5_1.a0 = 35
                  baseCylindre5_1.a1 = 55
                  baseCylindre5_1.z0 = -Math.PI / 7.5;
                  baseCylindre5_1.z1 = -Math.PI/24;
                  baseCylindre5_1.duration = 1.0;
                  baseCylindre5_1.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre5_1.position.x = translate
                baseCylindre5_1.rotation.y = rotate
                if(baseCylindre5_1.t > baseCylindre5_1.duration){
                  baseCylindre5_1.position.x = baseCylindre5_1.a1
                  baseCylindre5_1.rotation.y = baseCylindre5_1.z1
                  baseCylindre5_1.t = 0
                  baseCylindre5_1.a0 = 55
                  baseCylindre5_1.a1 = 0
                  baseCylindre5_1.z0 = -Math.PI / 24;
                  baseCylindre5_1.z1 = 0;
                  baseCylindre5_1.duration = 1.0;
                  baseCylindre5_1.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre5_1.position.x = translate
                baseCylindre5_1.rotation.y = rotate
                if(baseCylindre5_1.t > baseCylindre5_1.duration){
                  baseCylindre5_1.position.x = baseCylindre5_1.a1
                  baseCylindre5_1.rotation.y = baseCylindre5_1.z1
                  baseCylindre5_1.t = 0
                  baseCylindre5_1.a0 = 0
                  baseCylindre5_1.a1 = -25
                  baseCylindre5_1.z0 = 0;
                  baseCylindre5_1.z1 = -Math.PI / 11;
                  baseCylindre5_1.duration = 1.0;
                  baseCylindre5_1.animationStatus = 1;
                }
              break;
            }
    }
    baseCylindre5_2.onClick = function (intersection){
      waitGalerie()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    baseCylindre5_2.updateAnimation = function(dt){
      baseCylindre5_2.t += dt;
            let translate = baseCylindre5_2.a0+baseCylindre5_2.t * (baseCylindre5_2.a1 - baseCylindre5_2.a0) / baseCylindre5_2.duration ;
            let rotate = baseCylindre5_2.z0+baseCylindre5_2.t*(baseCylindre5_2.z1-baseCylindre5_2.z0)/baseCylindre5_2.duration
            switch (baseCylindre5_2.animationStatus) {
              case 1:
                baseCylindre5_2.position.x = translate
                baseCylindre5_2.rotation.y = rotate
                if (baseCylindre5_2.t > baseCylindre5_2.duration) {
                  baseCylindre5_2.position.x = baseCylindre5_2.a1
                  baseCylindre5_2.rotation.y = baseCylindre5_2.z1
                  baseCylindre5_2.t = 0
                  baseCylindre5_2.a0 = -25
                  baseCylindre5_2.a1 = 35
                  baseCylindre5_2.z0 = -Math.PI / 11;
                  baseCylindre5_2.z1 = -Math.PI / 7.5;
                  baseCylindre5_2.duration = 1.0;
                  baseCylindre5_2.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre5_2.position.x = translate
                baseCylindre5_2.rotation.y = rotate
                if(baseCylindre5_2.t > baseCylindre5_2.duration){
                  baseCylindre5_2.position.x = baseCylindre5_2.a1
                  baseCylindre5_2.rotation.y = baseCylindre5_2.z1
                  baseCylindre5_2.t = 0
                  baseCylindre5_2.a0 = 35
                  baseCylindre5_2.a1 = 55
                  baseCylindre5_2.z0 = -Math.PI / 7.5;
                  baseCylindre5_2.z1 = -Math.PI/24;
                  baseCylindre5_2.duration = 1.0;
                  baseCylindre5_2.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre5_2.position.x = translate
                baseCylindre5_2.rotation.y = rotate
                if(baseCylindre5_2.t > baseCylindre5_2.duration){
                  baseCylindre5_2.position.x = baseCylindre5_2.a1
                  baseCylindre5_2.rotation.y = baseCylindre5_2.z1
                  baseCylindre5_2.t = 0
                  baseCylindre5_2.a0 = 55
                  baseCylindre5_2.a1 = 0
                  baseCylindre5_2.z0 = -Math.PI / 24;
                  baseCylindre5_2.z1 = 0;
                  baseCylindre5_2.duration = 1.0;
                  baseCylindre5_2.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre5_2.position.x = translate
                baseCylindre5_2.rotation.y = rotate
                if(baseCylindre5_2.t > baseCylindre5_2.duration){
                  baseCylindre5_2.position.x = baseCylindre5_2.a1
                  baseCylindre5_2.rotation.y = baseCylindre5_2.z1
                  baseCylindre5_2.t = 0
                  baseCylindre5_2.a0 = 0;
                  baseCylindre5_2.a1 = -25;
                  baseCylindre5_2.z0 = 0;
                  baseCylindre5_2.z1 = -Math.PI / 11;
                  baseCylindre5_2.duration = 1.0;
                  baseCylindre5_2.animationStatus = 1;
                }
              break;
            }
    }

    cylindre6.onClick = function (intersection) {
      waitContact()
      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    cylindre6.updateAnimation = function (dt) {
      cylindre6.t += dt;
            let translate = cylindre6.a0+cylindre6.t * (cylindre6.a1 - cylindre6.a0) / cylindre6.duration ;
            switch (cylindre6.animationStatus) {
              case 1:
                cylindre6.position.x = translate
                if (cylindre6.t > cylindre6.duration) {
                  cylindre6.position.x = cylindre6.a1
                  cylindre6.t = 0
                  cylindre6.a0 = 32
                  cylindre6.a1 = -30
                  cylindre6.duration = 1.0;
                  cylindre6.animationStatus = 2;
                }
              break;
              case 2:
                cylindre6.position.x = translate
                if(cylindre6.t > cylindre6.duration){
                  cylindre6.position.x = cylindre6.a1
                  cylindre6.t = 0
                  cylindre6.a0 = -30
                  cylindre6.a1 = -50
                  cylindre6.duration = 1.0;
                  cylindre6.animationStatus = 3;
                }
              break;
              case 3:
                cylindre6.position.x = translate
                if(cylindre6.t > cylindre6.duration){
                  cylindre6.position.x = cylindre6.a1
                  cylindre6.t = 0
                  cylindre6.a0 = -50
                  cylindre6.a1 = 0
                  cylindre6.duration = 1.0;
                  cylindre6.animationStatus = 4;
                }
              break;
              case 4:
                cylindre6.position.x = translate
                if(cylindre6.t > cylindre6.duration){
                  cylindre6.position.x = cylindre6.a1
                  cylindre6.t = 0
                  cylindre6.a0 = 0;
                  cylindre6.a1 = 32;
                  cylindre6.duration = 1.0;
                  cylindre6.animationStatus = 1;
                }
              break;
            }
    }
    cercleCylindre6_1.onClick = function (intersection) {
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre6_1.updateAnimation = function (dt) {
      cercleCylindre6_1.t += dt;
            let translate = cercleCylindre6_1.a0+cercleCylindre6_1.t * (cercleCylindre6_1.a1 - cercleCylindre6_1.a0) / cercleCylindre6_1.duration ;
            switch (cercleCylindre6_1.animationStatus) {
              case 1:
                cercleCylindre6_1.position.x = translate
                if (cercleCylindre6_1.t > cercleCylindre6_1.duration) {
                  cercleCylindre6_1.position.x = cercleCylindre6_1.a1
                  cercleCylindre6_1.t = 0
                  cercleCylindre6_1.a0 = 32
                  cercleCylindre6_1.a1 = -30
                  cercleCylindre6_1.duration = 1.0;
                  cercleCylindre6_1.animationStatus = 2;
                }
              break;
              case 2:
                cercleCylindre6_1.position.x = translate
                if(cercleCylindre6_1.t > cercleCylindre6_1.duration){
                  cercleCylindre6_1.position.x = cercleCylindre6_1.a1
                  cercleCylindre6_1.t = 0
                  cercleCylindre6_1.a0 = -30
                  cercleCylindre6_1.a1 = -50
                  cercleCylindre6_1.duration = 1.0;
                  cercleCylindre6_1.animationStatus = 3;
                }
              break;
              case 3:
                cercleCylindre6_1.position.x = translate
                if(cercleCylindre6_1.t > cercleCylindre6_1.duration){
                  cercleCylindre6_1.position.x = cercleCylindre6_1.a1
                  cercleCylindre6_1.t = 0
                  cercleCylindre6_1.a0 = -50
                  cercleCylindre6_1.a1 = 0
                  cercleCylindre6_1.duration = 1.0;
                  cercleCylindre6_1.animationStatus = 4;
                }
              break;
              case 4:
                cercleCylindre6_1.position.x = translate
                if(cercleCylindre6_1.t > cercleCylindre6_1.duration){
                  cercleCylindre6_1.position.x = cercleCylindre6_1.a1
                  cercleCylindre6_1.t = 0
                  cercleCylindre6_1.a0 = 0;
                  cercleCylindre6_1.a1 = 32;
                  cercleCylindre6_1.duration = 1.0;
                  cercleCylindre6_1.animationStatus = 1;
                }
              break;
            }
}
    cercleCylindre6_2.onClick = function (intersection) {
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre6_2.updateAnimation = function (dt) {
      cercleCylindre6_2.t += dt;
            let translate = cercleCylindre6_2.a0+cercleCylindre6_2.t * (cercleCylindre6_2.a1 - cercleCylindre6_2.a0) / cercleCylindre6_2.duration ;
            switch (cercleCylindre6_2.animationStatus) {
              case 1:
                cercleCylindre6_2.position.x = translate
                if (cercleCylindre6_2.t > cercleCylindre6_2.duration) {
                  cercleCylindre6_2.position.x = cercleCylindre6_2.a1
                  cercleCylindre6_2.t = 0
                  cercleCylindre6_2.a0 = 32
                  cercleCylindre6_2.a1 = -30
                  cercleCylindre6_2.duration = 1.0;
                  cercleCylindre6_2.animationStatus = 2;
                }
              break;
              case 2:
                cercleCylindre6_2.position.x = translate
                if(cercleCylindre6_2.t > cercleCylindre6_2.duration){
                  cercleCylindre6_2.position.x = cercleCylindre6_2.a1
                  cercleCylindre6_2.t = 0
                  cercleCylindre6_2.a0 = -30
                  cercleCylindre6_2.a1 = -50
                  cercleCylindre6_2.duration = 1.0;
                  cercleCylindre6_2.animationStatus = 3;
                }
              break;
              case 3:
                cercleCylindre6_2.position.x = translate
                if(cercleCylindre6_2.t > cercleCylindre6_2.duration){
                  cercleCylindre6_2.position.x = cercleCylindre6_2.a1
                  cercleCylindre6_2.t = 0
                  cercleCylindre6_2.a0 = -50
                  cercleCylindre6_2.a1 = 0
                  cercleCylindre6_2.duration = 1.0;
                  cercleCylindre6_2.animationStatus = 4;
                }
              break;
              case 4:
                cercleCylindre6_2.position.x = translate
                if(cercleCylindre6_2.t > cercleCylindre6_2.duration){
                  cercleCylindre6_2.position.x = cercleCylindre6_2.a1
                  cercleCylindre6_2.t = 0
                  cercleCylindre6_2.a0 = 0;
                  cercleCylindre6_2.a1 = 32;
                  cercleCylindre6_2.duration = 1.0;
                  cercleCylindre6_2.animationStatus = 1;
                }
              break;
            }
}
    cercleCylindre6_3.onClick = function (intersection) {
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    cercleCylindre6_3.updateAnimation = function (dt) {
      cercleCylindre6_3.t += dt;
            let translate = cercleCylindre6_3.a0+cercleCylindre6_3.t * (cercleCylindre6_3.a1 - cercleCylindre6_3.a0) / cercleCylindre6_3.duration ;
            switch (cercleCylindre6_3.animationStatus) {
              case 1:
                cercleCylindre6_3.position.x = translate
                if (cercleCylindre6_3.t > cercleCylindre6_3.duration) {
                  cercleCylindre6_3.position.x = cercleCylindre6_3.a1
                  cercleCylindre6_3.t = 0
                  cercleCylindre6_3.a0 = 32
                  cercleCylindre6_3.a1 = -30
                  cercleCylindre6_3.duration = 1.0;
                  cercleCylindre6_3.animationStatus = 2;
                }
              break;
              case 2:
                cercleCylindre6_3.position.x = translate
                if(cercleCylindre6_3.t > cercleCylindre6_3.duration){
                  cercleCylindre6_3.position.x = cercleCylindre6_3.a1
                  cercleCylindre6_3.t = 0
                  cercleCylindre6_3.a0 = -30
                  cercleCylindre6_3.a1 = -50
                  cercleCylindre6_3.duration = 1.0;
                  cercleCylindre6_3.animationStatus = 3;
                }
              break;
              case 3:
                cercleCylindre6_3.position.x = translate
                if(cercleCylindre6_3.t > cercleCylindre6_3.duration){
                  cercleCylindre6_3.position.x = cercleCylindre6_3.a1
                  cercleCylindre6_3.t = 0
                  cercleCylindre6_3.a0 = -50
                  cercleCylindre6_3.a1 = 0
                  cercleCylindre6_3.duration = 1.0;
                  cercleCylindre6_3.animationStatus = 4;
                }
              break;
              case 4:
                cercleCylindre6_3.position.x = translate
                if(cercleCylindre6_3.t > cercleCylindre6_3.duration){
                  cercleCylindre6_3.position.x = cercleCylindre6_3.a1
                  cercleCylindre6_3.t = 0
                  cercleCylindre6_3.a0 = 0;
                  cercleCylindre6_3.a1 = 32;
                  cercleCylindre6_3.duration = 1.0;
                  cercleCylindre6_3.animationStatus = 1;
                }
              break;
            }
}
    lienCylindre6.onClick = function (intersection) {
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    lienCylindre6.updateAnimation = function (dt) {
      lienCylindre6.t += dt;
            let translate = lienCylindre6.a0+lienCylindre6.t * (lienCylindre6.a1 - lienCylindre6.a0) / lienCylindre6.duration ;
            switch (lienCylindre6.animationStatus) {
              case 1:
                lienCylindre6.position.x = translate
                if (lienCylindre6.t > lienCylindre6.duration) {
                  lienCylindre6.position.x = lienCylindre6.a1
                  lienCylindre6.t = 0
                  lienCylindre6.a0 = 32
                  lienCylindre6.a1 = -30
                  lienCylindre6.duration = 1.0;
                  lienCylindre6.animationStatus = 2;
                }
              break;
              case 2:
                lienCylindre6.position.x = translate
                if(lienCylindre6.t > lienCylindre6.duration){
                  lienCylindre6.position.x = lienCylindre6.a1
                  lienCylindre6.t = 0
                  lienCylindre6.a0 = -30
                  lienCylindre6.a1 = -50
                  lienCylindre6.duration = 1.0;
                  lienCylindre6.animationStatus = 3;
                }
              break;
              case 3:
                lienCylindre6.position.x = translate
                if(lienCylindre6.t > lienCylindre6.duration){
                  lienCylindre6.position.x = lienCylindre6.a1
                  lienCylindre6.t = 0
                  lienCylindre6.a0 = -50
                  lienCylindre6.a1 = 0
                  lienCylindre6.duration = 1.0;
                  lienCylindre6.animationStatus = 4;
                }
              break;
              case 4:
                lienCylindre6.position.x = translate
                if(lienCylindre6.t > lienCylindre6.duration){
                  lienCylindre6.position.x = lienCylindre6.a1
                  lienCylindre6.t = 0
                  lienCylindre6.a0 = 0;
                  lienCylindre6.a1 = 32;
                  lienCylindre6.duration = 1.0;
                  lienCylindre6.animationStatus = 1;
                }
              break;
            }
}
    baseCylindre6_1.onClick = function (intersection){
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
    }
    baseCylindre6_1.updateAnimation = function(dt){
      baseCylindre6_1.t += dt;
            let translate = baseCylindre6_1.a0+baseCylindre6_1.t * (baseCylindre6_1.a1 - baseCylindre6_1.a0) / baseCylindre6_1.duration ;
            let rotate = baseCylindre6_1.z0+baseCylindre6_1.t*(baseCylindre6_1.z1-baseCylindre6_1.z0)/baseCylindre6_1.duration
            switch (baseCylindre6_1.animationStatus) {
              case 1:
                baseCylindre6_1.position.x = translate
                baseCylindre6_1.rotation.y = rotate
                if (baseCylindre6_1.t > baseCylindre6_1.duration) {
                  baseCylindre6_1.position.x = baseCylindre6_1.a1
                  baseCylindre6_1.rotation.y = baseCylindre6_1.z1
                  baseCylindre6_1.t = 0
                  baseCylindre6_1.a0 = 32
                  baseCylindre6_1.a1 = -30
                  baseCylindre6_1.z0 = -Math.PI / 11;
                  baseCylindre6_1.z1 = -Math.PI / 8;
                  baseCylindre6_1.duration = 1.0;
                  baseCylindre6_1.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre6_1.position.x = translate
                baseCylindre6_1.rotation.y = rotate
                if(baseCylindre6_1.t > baseCylindre6_1.duration){
                  baseCylindre6_1.position.x = baseCylindre6_1.a1
                  baseCylindre6_1.rotation.y = baseCylindre6_1.z1
                  baseCylindre6_1.t = 0
                  baseCylindre6_1.a0 = -30
                  baseCylindre6_1.a1 = -50
                  baseCylindre6_1.z0 = -Math.PI / 8;
                  baseCylindre6_1.z1 = -Math.PI/28;
                  baseCylindre6_1.duration = 1.0;
                  baseCylindre6_1.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre6_1.position.x = translate
                baseCylindre6_1.rotation.y = rotate
                if(baseCylindre6_1.t > baseCylindre6_1.duration){
                  baseCylindre6_1.position.x = baseCylindre6_1.a1
                  baseCylindre6_1.rotation.y = baseCylindre6_1.z1
                  baseCylindre6_1.t = 0
                  baseCylindre6_1.a0 = -50
                  baseCylindre6_1.a1 = 0
                  baseCylindre6_1.z0 = -Math.PI / 28;
                  baseCylindre6_1.z1 = 0;
                  baseCylindre6_1.duration = 1.0;
                  baseCylindre6_1.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre6_1.position.x = translate
                baseCylindre6_1.rotation.y = rotate
                if(baseCylindre6_1.t > baseCylindre6_1.duration){
                  baseCylindre6_1.position.x = baseCylindre6_1.a1
                  baseCylindre6_1.rotation.y = baseCylindre6_1.z1
                  baseCylindre6_1.t = 0
                  baseCylindre6_1.a0 = 0;
                  baseCylindre6_1.a1 = 32;
                  baseCylindre6_1.z0 = 0;
                  baseCylindre6_1.z1 = -Math.PI / 11;
                  baseCylindre6_1.duration = 1.0;
                  baseCylindre6_1.animationStatus = 1;
                }
              break;
            }
    }
    baseCylindre6_2.onClick = function (intersection){
      waitContact()

      rotator.t = 0
      if (rotator.animationStatus == 0){
        rotator.a0 = 0  ;
        rotator.a1 = 2* Math.PI ;
        rotator.duration = 4.0;
        rotator.animationStatus = 1;
      } else if (rotator.animationStatus > 0){
        rotator.animationStatus = 0;
      }

      cylindre1.t = 0;
      if (cylindre1.animationStatus == 0){
        cylindre1.a0 = 0;
        cylindre1.a1 = 65;
        cylindre1.duration = 1.0;
        cylindre1.animationStatus = 1;
      } else if (cylindre1.animationStatus > 0){
        cylindre1.animationStatus = 0;
      }
      cercleCylindre1_1.t = 0;
      if (cercleCylindre1_1.animationStatus == 0){
        cercleCylindre1_1.a0 = 0;
        cercleCylindre1_1.a1 = 65;
        cercleCylindre1_1.duration = 1.0;
        cercleCylindre1_1.animationStatus = 1;
      } else if (cercleCylindre1_1.animationStatus > 0){
        cercleCylindre1_1.animationStatus = 0;
      }
      cercleCylindre1_2.t = 0;
      if (cercleCylindre1_2.animationStatus == 0){
        cercleCylindre1_2.a0 = 0;
        cercleCylindre1_2.a1 = 65;
        cercleCylindre1_2.duration = 1.0;
        cercleCylindre1_2.animationStatus = 1;
      }else if (cercleCylindre1_2.animationStatus > 0){
        cercleCylindre1_2.animationStatus = 0;
      }
      cercleCylindre1_3.t = 0;
      if (cercleCylindre1_3.animationStatus == 0){
        cercleCylindre1_3.a0 = 0;
        cercleCylindre1_3.a1 = 65;
        cercleCylindre1_3.duration = 1.0;
        cercleCylindre1_3.animationStatus = 1;
      } else if (cercleCylindre1_3.animationStatus > 0){
        cercleCylindre1_3.animationStatus = 0;
      }
      lienCylindre1.t = 0;
      if (lienCylindre1.animationStatus == 0){
        lienCylindre1.a0 = 0;
        lienCylindre1.a1 = 65;
        lienCylindre1.duration = 1.0;
        lienCylindre1.animationStatus = 1;
      } else if (lienCylindre1.animationStatus > 0){
        lienCylindre1.animationStatus = 0;
      }
      baseCylindre1_1.t = 0;
      if (baseCylindre1_1.animationStatus == 0){
        baseCylindre1_1.a0 = 0;
        baseCylindre1_1.a1 = 65;
        baseCylindre1_1.z0 = 0;
        baseCylindre1_1.z1 = -Math.PI / 20;
        baseCylindre1_1.duration = 1.0;
        baseCylindre1_1.animationStatus = 1;

      } else if (baseCylindre1_1.animationStatus > 0){
        baseCylindre1_1.animationStatus = 0;
      }
      baseCylindre1_2.t = 0;
      if (baseCylindre1_2.animationStatus == 0){
        baseCylindre1_2.a0 = 0;
        baseCylindre1_2.a1 = 65;
        baseCylindre1_2.z0 = 0;          ;
        baseCylindre1_2.z1 = -Math.PI / 20   ;
        baseCylindre1_2.duration = 1.0;
        baseCylindre1_2.animationStatus = 1;
      
      } else if (baseCylindre1_2.animationStatus > 0){
        baseCylindre1_2.animationStatus = 0;
      }

      cylindre2.t = 0;
      if (cylindre2.animationStatus == 0){
        cylindre2.a0 = 0;
        cylindre2.a1 = -65;
        cylindre2.duration = 1.0;
        cylindre2.animationStatus = 1;
      } else if (cylindre2.animationStatus > 0){
        cylindre2.animationStatus = 0;
      }
      cercleCylindre2_1.t = 0;
      if (cercleCylindre2_1.animationStatus == 0){
        cercleCylindre2_1.a0 = 0;
        cercleCylindre2_1.a1 = -65;
        cercleCylindre2_1.duration = 1.0;
        cercleCylindre2_1.animationStatus = 1;
      } else if (cercleCylindre2_1.animationStatus > 0){
        cercleCylindre2_1.animationStatus = 0;
      }
      cercleCylindre2_2.t = 0;
      if (cercleCylindre2_2.animationStatus == 0){
        cercleCylindre2_2.a0 = 0;
        cercleCylindre2_2.a1 = -65;
        cercleCylindre2_2.duration = 1.0;
        cercleCylindre2_2.animationStatus = 1;
      } else if (cercleCylindre2_2.animationStatus > 0){
        cercleCylindre2_2.animationStatus = 0;
      }
      cercleCylindre2_3.t = 0;
      if (cercleCylindre2_3.animationStatus == 0){
        cercleCylindre2_3.a0 = 0;
        cercleCylindre2_3.a1 = -65;
        cercleCylindre2_3.duration = 1.0;
        cercleCylindre2_3.animationStatus = 1;
      } else if (cercleCylindre2_3.animationStatus > 0){
        cercleCylindre2_3.animationStatus = 0;
      }
      baseCylindre2_1.t = 0;
      if (baseCylindre2_1.animationStatus == 0){
        baseCylindre2_1.a0 = 0;
        baseCylindre2_1.a1 = -65;
        baseCylindre2_1.z0 = 0;
        baseCylindre2_1.z1 = -Math.PI / 20;
        baseCylindre2_1.duration = 1.0;
        baseCylindre2_1.animationStatus = 1;
      } else if (baseCylindre2_1.animationStatus > 0){
        baseCylindre2_1.animationStatus = 0;
      }
      baseCylindre2_2.t = 0;
      if (baseCylindre2_2.animationStatus == 0){
        baseCylindre2_2.a0 = 0;
        baseCylindre2_2.a1 = -65;
        baseCylindre2_2.z0 = 0
        baseCylindre2_2.z1 = -Math.PI / 20   ;
        baseCylindre2_2.duration = 1.0;
        baseCylindre2_2.animationStatus = 1;
      } else if (baseCylindre2_2.animationStatus > 0){
        baseCylindre2_2.animationStatus = 0;
      }
      lienCylindre2.t = 0;
      if (lienCylindre2.animationStatus == 0){
        lienCylindre2.a0 = 0;
        lienCylindre2.a1 = -65;
        lienCylindre2.duration = 1.0;
        lienCylindre2.animationStatus = 1;
      } else if (lienCylindre2.animationStatus > 0){
        lienCylindre2.animationStatus = 0;
      }
      

      cylindre3.t = 0;
      if (cylindre3.animationStatus == 0){
        cylindre3.a0 = 0;
        cylindre3.a1 = -33;
        cylindre3.duration = 1.0;
        cylindre3.animationStatus = 1;
      } else if (cylindre3.animationStatus > 0){
        cylindre3.animationStatus = 0;
      }
      cercleCylindre3_1.t = 0;
      if (cercleCylindre3_1.animationStatus == 0){
        cercleCylindre3_1.a0 = 0;
        cercleCylindre3_1.a1 = -33;
        cercleCylindre3_1.duration = 1.0;
        cercleCylindre3_1.animationStatus = 1;
      } else if (cercleCylindre3_1.animationStatus > 0){
        cercleCylindre3_1.animationStatus = 0;
      } 
      cercleCylindre3_2.t = 0;
      if (cercleCylindre3_2.animationStatus == 0){
        cercleCylindre3_2.a0 = 0;
        cercleCylindre3_2.a1 = -33;
        cercleCylindre3_2.duration = 1.0;
        cercleCylindre3_2.animationStatus = 1;
      } else if (cercleCylindre3_2.animationStatus > 0){
        cercleCylindre3_2.animationStatus = 0;
      }
      cercleCylindre3_3.t = 0;
      if (cercleCylindre3_3.animationStatus == 0){
        cercleCylindre3_3.a0 = 0;
        cercleCylindre3_3.a1 = -33;
        cercleCylindre3_3.duration = 1.0;
        cercleCylindre3_3.animationStatus = 1;
      } else if (cercleCylindre3_3.animationStatus > 0){
        cercleCylindre3_3.animationStatus = 0;
      }
      lienCylindre3.t = 0;
      if (lienCylindre3.animationStatus == 0){
        lienCylindre3.a0 = 0;
        lienCylindre3.a1 = -33;
        lienCylindre3.duration = 1.0;
        lienCylindre3.animationStatus = 1;
      } else if (lienCylindre3.animationStatus > 0){
        lienCylindre3.animationStatus = 0;
      }
      baseCylindre3_1.t = 0;
      if (baseCylindre3_1.animationStatus == 0){
        baseCylindre3_1.a0 = 0;
        baseCylindre3_1.a1 = -33;
        baseCylindre3_1.z0 = 0;
        baseCylindre3_1.z1 = Math.PI /12;
        baseCylindre3_1.duration = 1.0;
        baseCylindre3_1.animationStatus = 1;
      } else if (baseCylindre3_1.animationStatus > 0){
        baseCylindre3_1.animationStatus = 0;
      }
      baseCylindre3_2.t = 0;
      if (baseCylindre3_2.animationStatus == 0){
        baseCylindre3_2.a0 = 0;
        baseCylindre3_2.a1 = -33;
        baseCylindre3_2.z0 = 0;
        baseCylindre3_2.z1 = Math.PI /12;
        baseCylindre3_2.duration = 1.0;
        baseCylindre3_2.animationStatus = 1;
      } else if (baseCylindre3_2.animationStatus > 0){
        baseCylindre3_2.animationStatus = 0;
      }
    
      cylindre4.t = 0;
      if (cylindre4.animationStatus == 0){
        cylindre4.a0 = 0;
        cylindre4.a1 = 35;
        cylindre4.duration = 1.0;
        cylindre4.animationStatus = 1;
      } else if (cylindre4.animationStatus > 0){
        cylindre4.animationStatus = 0;
      }
      cercleCylindre4_1.t = 0;
      if (cercleCylindre4_1.animationStatus == 0){
        cercleCylindre4_1.a0 = 0;
        cercleCylindre4_1.a1 = 35;
        cercleCylindre4_1.duration = 1.0;
        cercleCylindre4_1.animationStatus = 1;
      } else if (cercleCylindre4_1.animationStatus > 0){
        cercleCylindre4_1.animationStatus = 0;
      }
      cercleCylindre4_2.t = 0;
      if (cercleCylindre4_2.animationStatus == 0){
        cercleCylindre4_2.a0 = 0;
        cercleCylindre4_2.a1 = 35;
        cercleCylindre4_2.duration = 1.0;
        cercleCylindre4_2.animationStatus = 1;
      } else if (cercleCylindre4_2.animationStatus > 0){
        cercleCylindre4_2.animationStatus = 0;
      } 
      cercleCylindre4_3.t = 0;
      if (cercleCylindre4_3.animationStatus == 0){
        cercleCylindre4_3.a0 = 0;
        cercleCylindre4_3.a1 = 35;
        cercleCylindre4_3.duration = 1.0;
        cercleCylindre4_3.animationStatus = 1;
      } else if (cercleCylindre4_3.animationStatus > 0){
        cercleCylindre4_3.animationStatus = 0;
      }
      lienCylindre4.t = 0;
      if (lienCylindre4.animationStatus == 0){
        lienCylindre4.a0 = 0;
        lienCylindre4.a1 = 35;
        lienCylindre4.duration = 1.0;
        lienCylindre4.animationStatus = 1;
      } else if (lienCylindre4.animationStatus > 0){
        lienCylindre4.animationStatus = 0;
      }
      baseCylindre4_1.t = 0;
      if (baseCylindre4_1.animationStatus == 0){
        baseCylindre4_1.a0 = 0;
        baseCylindre4_1.a1 = 35;
        baseCylindre4_1.z0 = 0;
        baseCylindre4_1.z1 = Math.PI /12;
        baseCylindre4_1.duration = 1.0;
        baseCylindre4_1.animationStatus = 1;
      } else if (baseCylindre4_1.animationStatus > 0){
        baseCylindre4_1.animationStatus = 0;
      }
      baseCylindre4_2.t = 0;
      if (baseCylindre4_2.animationStatus == 0){
        baseCylindre4_2.a0 = 0;
        baseCylindre4_2.a1 = 35;
        baseCylindre4_2.z0 = 0;
        baseCylindre4_2.z1 = Math.PI / 12;
        baseCylindre4_2.duration = 1.0;
        baseCylindre4_2.animationStatus = 1;
      } else if (baseCylindre4_2.animationStatus > 0){
        baseCylindre4_2.animationStatus = 0;
      }
    
      cylindre5.t = 0;
      if (cylindre5.animationStatus == 0){
        cylindre5.a0 = 0;
        cylindre5.a1 = -26;
        cylindre5.duration = 1.0;
        cylindre5.animationStatus = 1;
      } else if (cylindre5.animationStatus > 0){
        cylindre5.animationStatus = 0;
      }
      cercleCylindre5_1.t = 0;
      if (cercleCylindre5_1.animationStatus == 0){
        cercleCylindre5_1.a0 = 0;
        cercleCylindre5_1.a1 = -26;
        cercleCylindre5_1.duration = 1.0;
        cercleCylindre5_1.animationStatus = 1;
      } else if (cercleCylindre5_1.animationStatus > 0){
        cercleCylindre5_1.animationStatus = 0;
      }
      cercleCylindre5_2.t = 0;
      if (cercleCylindre5_2.animationStatus == 0){
        cercleCylindre5_2.a0 = 0;
        cercleCylindre5_2.a1 = -26;
        cercleCylindre5_2.duration = 1.0;
        cercleCylindre5_2.animationStatus = 1;
      } else if (cercleCylindre5_2.animationStatus > 0){
        cercleCylindre5_2.animationStatus = 0;
      }
      cercleCylindre5_3.t = 0;
      if (cercleCylindre5_3.animationStatus == 0){
        cercleCylindre5_3.a0 = 0;
        cercleCylindre5_3.a1 = -26;
        cercleCylindre5_3.duration = 1.0;
        cercleCylindre5_3.animationStatus = 1;
      } else if (cercleCylindre5_3.animationStatus > 0){
        cercleCylindre5_3.animationStatus = 0;
      }
      lienCylindre5.t = 0;
      if (lienCylindre5.animationStatus == 0){
        lienCylindre5.a0 = 0;
        lienCylindre5.a1 = -26;
        lienCylindre5.duration = 1.0;
        lienCylindre5.animationStatus = 1;
      }  else if (lienCylindre5.animationStatus > 0){
        lienCylindre5.animationStatus = 0;
      }    
      baseCylindre5_1.t = 0;
      if (baseCylindre5_1.animationStatus == 0){
        baseCylindre5_1.a0 = 0;
        baseCylindre5_1.a1 = -26;
        baseCylindre5_1.z0 = 0;
        baseCylindre5_1.z1 = -Math.PI / 11;
        baseCylindre5_1.duration = 1.0;
        baseCylindre5_1.animationStatus = 1;
      } else if (baseCylindre5_1.animationStatus > 0){
        baseCylindre5_1.animationStatus = 0;
      }
      baseCylindre5_2.t = 0;
      if (baseCylindre5_2.animationStatus == 0){
        baseCylindre5_2.a0 = 0;
        baseCylindre5_2.a1 = -26;
        baseCylindre5_2.z0 = 0;
        baseCylindre5_2.z1 = -Math.PI / 11;
        baseCylindre5_2.duration = 1.0;
        baseCylindre5_2.animationStatus = 1;
      } else if (baseCylindre5_2.animationStatus > 0){
        baseCylindre5_2.animationStatus = 0;
      }

      cylindre6.t = 0;
      if (cylindre6.animationStatus == 0){
        cylindre6.a0 = 0;
        cylindre6.a1 = 32;
        cylindre6.duration = 1.0;
        cylindre6.animationStatus = 1;
      } else if (cylindre6.animationStatus > 0){
        cylindre6.animationStatus = 0;
      }
      cercleCylindre6_1.t = 0;
      if (cercleCylindre6_1.animationStatus == 0){
        cercleCylindre6_1.a0 = 0;
        cercleCylindre6_1.a1 = 32;
        cercleCylindre6_1.duration = 1.0;
        cercleCylindre6_1.animationStatus = 1;
      } else if (cercleCylindre6_1.animationStatus > 0){
        cercleCylindre6_1.animationStatus = 0;
      }
      cercleCylindre6_2.t = 0;
      if (cercleCylindre6_2.animationStatus == 0){
        cercleCylindre6_2.a0 = 0;
        cercleCylindre6_2.a1 = 32;
        cercleCylindre6_2.duration = 1.0;
        cercleCylindre6_2.animationStatus = 1;
      } else if (cercleCylindre6_2.animationStatus > 0){
        cercleCylindre6_2.animationStatus = 0;
      }
      cercleCylindre6_3.t = 0;
      if (cercleCylindre6_3.animationStatus == 0){
        cercleCylindre6_3.a0 = 0;
        cercleCylindre6_3.a1 = 32;
        cercleCylindre6_3.duration = 1.0;
        cercleCylindre6_3.animationStatus = 1;
      } else if (cercleCylindre6_3.animationStatus > 0){
        cercleCylindre6_3.animationStatus = 0;
      }
      lienCylindre6.t = 0;
      if (lienCylindre6.animationStatus == 0){
        lienCylindre6.a0 = 0;
        lienCylindre6.a1 = 32;
        lienCylindre6.duration = 1.0;
        lienCylindre6.animationStatus = 1;
      }  else if ( lienCylindre6.animationStatus > 0){
         lienCylindre6.animationStatus = 0;
      }     
      baseCylindre6_1.t = 0;
      if (baseCylindre6_1.animationStatus == 0){
        baseCylindre6_1.a0 = 0;
        baseCylindre6_1.a1 = 32;
        baseCylindre6_1.z0 = 0;
        baseCylindre6_1.z1 = -Math.PI / 11;
        baseCylindre6_1.duration = 1.0;
        baseCylindre6_1.animationStatus = 1;
      } else if (baseCylindre6_1.animationStatus > 0){
        baseCylindre6_1.animationStatus = 0;
      }
      baseCylindre6_2.t = 0;
      if (baseCylindre6_2.animationStatus == 0){
        baseCylindre6_2.a0 = 0;
        baseCylindre6_2.a1 = 32;
        baseCylindre6_2.z0 = 0;
        baseCylindre6_2.z1 = -Math.PI/11;
        baseCylindre6_2.duration = 1.0;
        baseCylindre6_2.animationStatus = 1;
      } else if (baseCylindre6_2.animationStatus > 0){
        baseCylindre6_2.animationStatus = 0;
      }
}
    baseCylindre6_2.updateAnimation = function(dt){
      baseCylindre6_2.t += dt;
            let translate = baseCylindre6_2.a0+baseCylindre6_2.t * (baseCylindre6_2.a1 - baseCylindre6_2.a0) / baseCylindre6_2.duration ;
            let rotate = baseCylindre6_2.z0+baseCylindre6_2.t*(baseCylindre6_2.z1-baseCylindre6_2.z0)/baseCylindre6_2.duration
            switch (baseCylindre6_2.animationStatus) {
              case 1:
                baseCylindre6_2.position.x = translate
                baseCylindre6_2.rotation.y = rotate
                if (baseCylindre6_2.t > baseCylindre6_2.duration) {
                  baseCylindre6_2.position.x = baseCylindre6_2.a1
                  baseCylindre6_2.rotation.y = baseCylindre6_2.z1
                  baseCylindre6_2.t = 0
                  baseCylindre6_2.a0 = 32
                  baseCylindre6_2.a1 = -30
                  baseCylindre6_2.z0 = -Math.PI / 11;
                  baseCylindre6_2.z1 = -Math.PI / 8;
                  baseCylindre6_2.duration = 1.0;
                  baseCylindre6_2.animationStatus = 2;
                }
              break;
              case 2:
                baseCylindre6_2.position.x = translate
                baseCylindre6_2.rotation.y = rotate
                if(baseCylindre6_2.t > baseCylindre6_2.duration){
                  baseCylindre6_2.position.x = baseCylindre6_2.a1
                  baseCylindre6_2.rotation.y = baseCylindre6_2.z1
                  baseCylindre6_2.t = 0
                  baseCylindre6_2.a0 = -30
                  baseCylindre6_2.a1 = -50
                  baseCylindre6_2.z0 = -Math.PI / 8;
                  baseCylindre6_2.z1 = -Math.PI/28;
                  baseCylindre6_2.duration = 1.0;
                  baseCylindre6_2.animationStatus = 3;
                }
              break;
              case 3:
                baseCylindre6_2.position.x = translate
                baseCylindre6_2.rotation.y = rotate
                if(baseCylindre6_2.t > baseCylindre6_2.duration){
                  baseCylindre6_2.position.x = baseCylindre6_2.a1
                  baseCylindre6_2.rotation.y = baseCylindre6_2.z1
                  baseCylindre6_2.t = 0
                  baseCylindre6_2.a0 = -50
                  baseCylindre6_2.a1 = 0
                  baseCylindre6_2.z0 = -Math.PI / 28;
                  baseCylindre6_2.z1 = 0;
                  baseCylindre6_2.duration = 1.0;
                  baseCylindre6_2.animationStatus = 4;
                }
              break;
              case 4:
                baseCylindre6_2.position.x = translate
                baseCylindre6_2.rotation.y = rotate
                if(baseCylindre6_2.t > baseCylindre6_2.duration){
                  baseCylindre6_2.position.x = baseCylindre6_2.a1
                  baseCylindre6_2.rotation.y = baseCylindre6_2.z1
                  baseCylindre6_2.t = 0
                  baseCylindre6_2.a0 = 0;
                  baseCylindre6_2.a1 = 32;
                  baseCylindre6_2.z0 = 0;
                  baseCylindre6_2.z1 = -Math.PI / 11;
                  baseCylindre6_2.duration = 1.0;
                  baseCylindre6_2.animationStatus = 1;
                }
              break;
            }
    }
    
    let dt = clock.getElapsedTime();
  
  },   function onProgress(data) {
  },
  
  function onError(data) {
    console.error(data);
  },
        
      );
      

      // END: Adding gtlf model
    },
    
   
   
    renderScene() {
      renderer.render(scene, camera);
    },
  
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>  
      #info {
        display:none;
        position: absolute;
        width: 400px;
        top: 10px;
        right: 10px;
        bottom: 10px;
        background-color: #EEEEEE;
        border: 2px solid white;
        padding: 5px;
        font-size: 14pt;
        font-family: times new roman;
        font-weight: bold;
        font-style: italic;
        color: black;
      }
  
      input {
        background-color: #FFFFFF;
        border: none;
        width: 260px;
        color: black;
        font-size: 14pt;
        font-family: times new roman;
        font-weight: bold;
      }
  
      
      </style>