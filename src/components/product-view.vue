<template> 
</template>
<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ColladaLoader } from "three/examples/jsm/loaders/ColladaLoader";
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
    modelSettings: {
      type: Object,
      required: true
    }
  },
  methods: {
  
    init() {
      this.scene = new THREE.Scene();
      this.scene.background = null;

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.renderer.setClearColor(0x000000, 1);
      const container = document.getElementById(this.containerId);
      this.renderer.setSize(container.offsetWidth, container.offsetHeight);
      container.appendChild(this.renderer.domElement);



      // START: Adding camera
      this.camera = new THREE.PerspectiveCamera(
        45,
        container.offsetWidth / container.offsetHeight,
        0.25,
        20
      );
      this.camera.position.set(10, 120, 50);
      // END: Adding camera

      // START: Adding controls
      const controls = new OrbitControls(this.camera, this.renderer.domElement);

      controls.minDistance = 1;
      controls.maxDistance = 1;
      // controls.enablePan = false;
      controls.target.set(0, 0, 0);
      controls.addEventListener("change", this.renderScene); // use if there is no animation loop
      // END: Adding controls

      // START: Adding light

      // sources de lumière
    let ambientLight = new THREE.AmbientLight(0x202020);
    this.scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 500, 100);
    this.scene.add(spotLight);
      // END: Adding light

      

      // START: Adding gtlf model
      let loader = new ColladaLoader();
      loader.load(
        'src/models/moteur1.dae',
        data => {
          var object = data.scene;
          object.position.set(0,0,0);
          if(this.modelSettings.scale) object.scale.set(this.modelSettings.scale, this.modelSettings.scale, this.modelSettings.scale);
          this.scene.add(object);
          this.renderScene();
          
        }
      );
      // END: Adding gtlf model
    },
   
    renderScene() {
      this.renderer.render(this.scene, this.camera);
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