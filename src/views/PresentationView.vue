<script setup>
import { onMounted } from 'vue';
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/outline';
function carrousel() {
    
    var images15 = document.querySelectorAll('#carrousel');
    let translate = window.innerWidth;
    console.log(translate)
      let d = 2000;
      let delta = 1000;
  
      images15.forEach(function(img,indice) {
          img.style.zIndex = images15.length - indice;
      });
  
      let anim15 = anime.timeline({
          loop: true,
          delay: 0
      });
  
      anim15.add({
          targets: images15,
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
})
</script>

<template>
  <main class="flex flex-col gap-6">
    <div class="p-0 relative overflow-hidden">
			<div class="h-[90vh] left-0">
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test2.jpg"/>
 				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test5.jpg"/>
        <img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test7.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test6.jpg"/>
        <img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test11.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test8.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test3.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test4.jpg"/>
				<img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test9.jpg"/>
        <img id="carrousel" class="absolute h-[100vh] min-w-full top-0 left-0 z-0" src="../assets/test10.jpg"/>

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
            <img class="w-1/4 md:w-1/6 lg:w-1/6" src="@/assets/P1120267_2.jpg" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux, l'expert porsche</h2>
          <div class="flex flex-row-reverse justify-between gap-2 items-center font-cabin text-sm md:text-base">
            <div>
              <p class="leading-none">Il découvre sa passion pour Porsche et les moteurs en rencontrant Georges Dessené qui prépare un moteur de Simca 1000.</p> 
              <p class="leading-none">C'est à la suite de cette rencontre qu'il façonnera dans son garage sa première Porsche, une 911 3.0 RS de 1974 en deux ans.</p>
            </div>
              <img class="w-1/4 md:w-1/6" src="@/assets/P1120267_2.jpg" alt="">
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4">
          <h2 class="font-bona-nova font-bold text-xl md:text-2xl lg:text-4xl leading-none">André Chipeaux, un travail entièrement manuel</h2>
          <div class="flex justify-between gap-2 items-center font-cabin text-sm md:text-base">
            <p class="leading-none">Enim laboris fugiat ea do amet cupidatat laboris sint esse sunt id mollit. Culpa eiusmod adipisicing reprehenderit commodo sint pariatur minim et laboris. Sit pariatur minim quis aliquip nostrud anim anim id minim occaecat qui.</p>
            <img class="w-1/4 md:w-1/6" src="@/assets/P1120267_2.jpg" alt="">
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