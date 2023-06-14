<script setup>
import { ref, onMounted } from 'vue';
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/outline';

const imageWidth = window.innerWidth
console.log(imageWidth)

const carrouselXS = ref(false)
const carrouselSM = ref(false)
const carrouselMD = ref(false)
const carrouselLG = ref(false)
const imgSizeCarrousel = () => {
  if (imageWidth <= 450) {
    console.log(imageWidth)
    carrouselXS.value = true
    carrouselSM.value = false
    carrouselMD.value = false
    carrouselLG.value = false
  } else if (imageWidth <= 640){
     carrouselXS.value = false
     carrouselSM.value = true
     carrouselMD.value = false
     carrouselLG.value = false
     console.log(imageWidth)
  } else if (imageWidth <= 768){
     carrouselXS.value = false
     carrouselSM.value = false
     carrouselMD.value = true
     carrouselLG.value = false
      console.log(imageWidth)
  } else if (768 < imageWidth){
     carrouselXS.value = false
     carrouselSM.value = false
     carrouselMD.value = false
     carrouselLG.value = true
     console.log(imageWidth)
  }
}

function carrousel() {
    
    var imagesXS = document.querySelectorAll('#carrouselXS');
    let translate = window.innerWidth;
    console.log("translate", translate)
      let d = 2000;
      let delta = 1000;
  
      imagesXS.forEach(function(img,indice) {
          img.style.zIndex = imagesXS.length - indice;
      });
  
      let animXS = anime.timeline({
          loop: true,
          delay: 0
      });
  
      animXS.add({
          targets: imagesXS,
          translateX: [{value: translate, duration: d},
                       {value: -translate, duration: 0, delay: function(img,ind) {
                           if (ind == 0) return (10*delta)+(9*d);
                           if (ind == 1) return (9*delta)+(8*d);
                           if (ind == 2) return (8*delta)+(7*d);
                           if (ind == 3) return (7*delta)+(6*d);
                           if (ind == 4) return (6*delta)+(5*d);
                           if (ind == 5) return (5*delta)+(4*d);
                           if (ind == 6) return (4*delta)+(3*d);
                           if (ind == 7) return (3*delta)+(2*d);
                           if (ind == 8) return (2*delta)+d;
                           if (ind == 9) return delta;
                           return 0;
                       }},
                       {value: '0', duration: function(img,ind) {
                           if (ind == 10) return 0;
                           return d;
                       }}],
          easing: 'linear',
          delay: function(img,ind) {
              if (ind == 0) return delta;
              if (ind == 1) return (2*delta)+d;
              if (ind == 2) return (3*delta)+(2*d);
              if (ind == 3) return (4*delta)+(3*d);
              if (ind == 4) return (5*delta)+(4*d);
              if (ind == 5) return (6*delta)+(5*d);
              if (ind == 6) return (7*delta)+(6*d);
              if (ind == 7) return (8*delta)+(7*d);
              if (ind == 8) return (9*delta)+(8*d);
              if (ind == 9) return (10*delta)+(9*d);
              return (11*delta)+(10*d);
          }
      });

      var imagesSM = document.querySelectorAll('#carrouselSM');
        console.log("translate", translate)

  
      imagesSM.forEach(function(img,indice) {
          img.style.zIndex = imagesSM.length - indice;
      });
  
      let animSM = anime.timeline({
          loop: true,
          delay: 0
      });
  
      animSM.add({
          targets: imagesSM,
          translateX: [{value: translate, duration: d},
                       {value: -translate, duration: 0, delay: function(img,ind) {
                           if (ind == 0) return (10*delta)+(9*d);
                           if (ind == 1) return (9*delta)+(8*d);
                           if (ind == 2) return (8*delta)+(7*d);
                           if (ind == 3) return (7*delta)+(6*d);
                           if (ind == 4) return (6*delta)+(5*d);
                           if (ind == 5) return (5*delta)+(4*d);
                           if (ind == 6) return (4*delta)+(3*d);
                           if (ind == 7) return (3*delta)+(2*d);
                           if (ind == 8) return (2*delta)+d;
                           if (ind == 9) return delta;
                           return 0;
                       }},
                       {value: '0', duration: function(img,ind) {
                           if (ind == 10) return 0;
                           return d;
                       }}],
          easing: 'linear',
          delay: function(img,ind) {
              if (ind == 0) return delta;
              if (ind == 1) return (2*delta)+d;
              if (ind == 2) return (3*delta)+(2*d);
              if (ind == 3) return (4*delta)+(3*d);
              if (ind == 4) return (5*delta)+(4*d);
              if (ind == 5) return (6*delta)+(5*d);
              if (ind == 6) return (7*delta)+(6*d);
              if (ind == 7) return (8*delta)+(7*d);
              if (ind == 8) return (9*delta)+(8*d);
              if (ind == 9) return (10*delta)+(9*d);
              return (11*delta)+(10*d);
          }
      });

      var imagesMD = document.querySelectorAll('#carrouselMD');
    console.log("translate", translate)
  
      imagesMD.forEach(function(img,indice) {
          img.style.zIndex = imagesMD.length - indice;
      });
  
      let animMD = anime.timeline({
          loop: true,
          delay: 0
      });
  
      animMD.add({
          targets: imagesMD,
          translateX: [{value: translate, duration: d},
                       {value: -translate, duration: 0, delay: function(img,ind) {
                           if (ind == 0) return (10*delta)+(9*d);
                           if (ind == 1) return (9*delta)+(8*d);
                           if (ind == 2) return (8*delta)+(7*d);
                           if (ind == 3) return (7*delta)+(6*d);
                           if (ind == 4) return (6*delta)+(5*d);
                           if (ind == 5) return (5*delta)+(4*d);
                           if (ind == 6) return (4*delta)+(3*d);
                           if (ind == 7) return (3*delta)+(2*d);
                           if (ind == 8) return (2*delta)+d;
                           if (ind == 9) return delta;
                           return 0;
                       }},
                       {value: '0', duration: function(img,ind) {
                           if (ind == 10) return 0;
                           return d;
                       }}],
          easing: 'linear',
          delay: function(img,ind) {
              if (ind == 0) return delta;
              if (ind == 1) return (2*delta)+d;
              if (ind == 2) return (3*delta)+(2*d);
              if (ind == 3) return (4*delta)+(3*d);
              if (ind == 4) return (5*delta)+(4*d);
              if (ind == 5) return (6*delta)+(5*d);
              if (ind == 6) return (7*delta)+(6*d);
              if (ind == 7) return (8*delta)+(7*d);
              if (ind == 8) return (9*delta)+(8*d);
              if (ind == 9) return (10*delta)+(9*d);
              return (11*delta)+(10*d);
          }
      });

    var imagesLG = document.querySelectorAll('#carrouselLG');
    console.log("translate", translate)
  
      imagesLG.forEach(function(img,indice) {
          img.style.zIndex = imagesLG.length - indice;
      });
  
      let animLG = anime.timeline({
          loop: true,
          delay: 0
      });
  
      animLG.add({
          targets: imagesLG,
          translateX: [{value: translate, duration: d},
                       {value: -translate, duration: 0, delay: function(img,ind) {
                           if (ind == 0) return (10*delta)+(9*d);
                           if (ind == 1) return (9*delta)+(8*d);
                           if (ind == 2) return (8*delta)+(7*d);
                           if (ind == 3) return (7*delta)+(6*d);
                           if (ind == 4) return (6*delta)+(5*d);
                           if (ind == 5) return (5*delta)+(4*d);
                           if (ind == 6) return (4*delta)+(3*d);
                           if (ind == 7) return (3*delta)+(2*d);
                           if (ind == 8) return (2*delta)+d;
                           if (ind == 9) return delta;
                           return 0;
                       }},
                       {value: '0', duration: function(img,ind) {
                           if (ind == 10) return 0;
                           return d;
                       }}],
          easing: 'linear',
          delay: function(img,ind) {
              if (ind == 0) return delta;
              if (ind == 1) return (2*delta)+d;
              if (ind == 2) return (3*delta)+(2*d);
              if (ind == 3) return (4*delta)+(3*d);
              if (ind == 4) return (5*delta)+(4*d);
              if (ind == 5) return (6*delta)+(5*d);
              if (ind == 6) return (7*delta)+(6*d);
              if (ind == 7) return (8*delta)+(7*d);
              if (ind == 8) return (9*delta)+(8*d);
              if (ind == 9) return (10*delta)+(9*d);
              return (11*delta)+(10*d);
          }
      });
  }

onMounted(() => {
  carrousel()
  imgSizeCarrousel()
})
</script>

<template>
  <main class="flex flex-col gap-6">
    <div class="p-0 relative overflow-hidden">
      <div v-show="carrouselXS" class="h-[90vh] left-0">
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel2XS.jpg"/>
 				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel5XS.jpg"/>
        <img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel7XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel6XS.jpg"/>
        <img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel1XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel11XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel8XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel3XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel4XS.jpg"/>
				<img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel9XS.jpg"/>
        <img id="carrouselXS" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel10XS.jpg"/>

			</div>
      <div v-show="carrouselSM" class="h-[90vh] left-0">
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel2SM.jpg"/>
 				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel5SM.jpg"/>
        <img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel7SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel6SM.jpg"/>
        <img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel1SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel11SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel8SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel3SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel4SM.jpg"/>
				<img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel9SM.jpg"/>
        <img id="carrouselSM" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel10SM.jpg"/>
SM
			</div>   
			<div v-show="carrouselMD" class="h-[90vh] left-0">
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel2SM.jpg"/>
 				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel5SM.jpg"/>
        <img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel7SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel6SM.jpg"/>
        <img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel1SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel11SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel8SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel3SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel4SM.jpg"/>
				<img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel9SM.jpg"/>
        <img id="carrouselMD" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/imgCarrousel10SM.jpg"/>

			</div>
       <div v-show="carrouselLG" class="h-[90vh] left-0">
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test2.jpg"/>
 				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test5.jpg"/>
        <img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test7.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test6.jpg"/>
        <img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test11.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test8.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test3.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test4.jpg"/>
				<img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test9.jpg"/>
        <img id="carrouselLG" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" alt="Image de l'atelier d'André Chipeaux" src="../assets/test10.jpg"/>

			</div>
      <h1 class="absolute z-10 text-4xl font-bona-nova font-bold text-center text-white left-1/2 -translate-x-1/2 top-24 leading-none">André Chipeaux</h1>
      <ChevronDoubleDownIcon class="absolute text-white z-10 top-3/4 w-24 left-1/2 -translate-x-1/2"/>
    </div>
    <div class="flex flex-col gap-5 px-3 md:px-6 lg:px-10 pb-6">
      <div class="absolute -z-10 top-[80vh] left-0 w-full bg-red-400 h-1/2 -skew-y-6"></div>
      <div>
        <div class="flex flex-col gap-4">
          <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux, motoriste depuis 40 ans</h2>
          <div class="flex justify-between gap-2 items-center font-cabin text-sm md:text-base">
            <p class="leading-none">Sa carrière de motoriste professionnel commence en 1995. André Chipeaux est repéré par Manfred Fresinger après avoir visité son garage où se trouvait une voiture de sa conception. Il sera pris dès le lendemain dans les ateliers Fresinger Motorsport jusqu'à ce qu'il se décide à se lancer en freelance au début des années 2000 jusqu'à aujourd'hui.</p>
            <img class="w-1/4 md:w-1/6 lg:w-1/6" src="@/assets/P1120267_2.jpg" alt="Image d'André Chipeaux en train de travailler">
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux, l'expert porsche</h2>
          <div class="flex flex-row-reverse justify-end gap-2 items-center font-cabin text-sm md:text-base">
            <div>
              <p class="leading-none">Il découvre sa passion pour Porsche et les moteurs en rencontrant Georges Dessené qui prépare un moteur de Simca 1000.</p> 
              <p class="leading-none">C'est à la suite de cette rencontre qu'il façonnera dans son garage sa première Porsche, une 911 3.0 RS de 1974 en deux ans.</p>
            </div>
              <img class="w-1/4 md:w-1/6" src="@/assets/illustration5.jpg" alt="Photogtaphie d'une voiture utilisant un moteur conçu par André Chipeaux pleine course">
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux, un travail entièrement manuel</h2>
          <div class="flex justify-between gap-2 items-center font-cabin text-sm md:text-base">
            <div>
              <p class="leading-none">Pas besoin de machine quand on a ses mains et ses outils ! Les moteurs sont entièrement montés à la main, sans l'intervention de machine. Cela requiert de la rigueur, du sérieux et beaucoup de passion, tout ce qui caractérise André Chipeaux !</p>
            </div>
            <img class="w-1/4 md:w-1/6" src="@/assets/illustration4.jpg" alt="Image de l'atelier d'André Chipeaux montrant certains de ses outils">
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 sm:gap-7">
        <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux en chiffres</h2>
        <ul class="grid grid-cols-2 text-center">
          <li>
            <div class="flex flex-col gap-4 sm:gap-7">
              <p class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl">40</p>
              <p class="font-cabin text-sm md:text-base leading-none">années d'expériences</p>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-4 sm:gap-7">
              <p class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl">7</p>
              <p class="font-cabin text-sm md:text-base leading-none md:leading-none">années dans la team Fresinger Motorsport</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.carrousel {
	padding: 0px;
	position: relative;
	overflow: hidden;
}

.images15 {
  height:90vh;
	left:0;
}



.image15 {
	position: absolute;
  height:100vh;
  min-width:100%;
	top:0;
	left:0;
	z-index: 0;
}
</style>