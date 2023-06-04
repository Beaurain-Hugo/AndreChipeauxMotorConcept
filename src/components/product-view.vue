<template> 
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";

let scene, renderer, camera;
 function onLoad() {
      
    };

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
      loader.load(
        'src/models/moteur1.dae',
        data => {
          var object = data.scene;
        object.position.set(0,0,0);
        scene.add(object);
        this.renderScene();
        }
        
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