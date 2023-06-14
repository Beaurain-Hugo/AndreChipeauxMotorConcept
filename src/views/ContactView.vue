<script setup>

  import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';

      // Import éléments de vue
      import {onMounted, ref, reactive} from 'vue'
    // Import leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet 
    import 'leaflet/dist/leaflet.css'

    // Canevas leaflet pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme de ref
    let map = ref()

    const inputNameEmpty = ref(true)
    const inputNameFill = ref(false)
    const inputMailEmpty = ref(true)
    const inputMailFill = ref(false)
    const inputMessageEmpty = ref(true)
    const inputMessageFill = ref(false)
    const inputNameValue = ref('')
    const inputMailValue = ref('')
    const inputMessageValue = ref('')
    function checkInput() {
      if (inputNameValue.value !== '') {
      // L'input n'est pas vide, faites quelque chose
      inputNameFill.value = true
      inputNameEmpty.value = false
    
      }
      if (inputNameValue.value == ''){
        inputNameFill.value = false
        inputNameEmpty.value = true
      } 
      if (inputMailValue.value !== '') {
      // L'input n'est pas vide, faites quelque chose
      inputMailFill.value = true
      inputMailEmpty.value = false
    
      }
      if (inputMailValue.value == ''){
        inputMailFill.value = false
        inputMailEmpty.value = true
      }
      if (inputMessageValue.value !== '') {
      // L'input n'est pas vide, faites quelque chose
      inputMessageFill.value = true
      inputMessageEmpty.value = false
    
      }
      if (inputMessageValue.value == ''){
       inputMessageFill.value = false
       inputMessageEmpty.value = true
      }
      
}

    // Lorsque le composant est monté dans la vue
    // On affiche la carte
    onMounted( async () => {
      checkInput()
        // Caractéristiques visuelles de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
            {
                attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            }
        );

        // Création de la carte sur la div ayant : id='map'
        map = Leaflet.map('map',
        {
            zoomControl:true,        // Contrôle du zoom
            layers: [tileLayer],    // Canevas pour dessiner la carte
            maxZoom:18,             // Zoom maxi autorisé
            minZoom:6               // Zoom mini autorisé
        })
        // Projection de la carte avec centrage aux coordonées indiquées, avec facteur d'agrandissement
        .setView([47.7463629,6.727125], 17)

        // Création d'un icône
        let myIcon = Leaflet.icon({
            iconUrl: 'marker-icon.png',              // Image de l'icône
            shadowUrl: 'marker-shadow.png',          // Image de l'ombre
                iconSize:           [25,41],                // Taille de l'icône
                shadowSize:         [25,41],                // Taille de l'ombre
                iconAnchor:         [0,0],                  // Point de position de l'icône
                shadowAnchor:        [-10, -10],              // Point de position de l'ombre
                popupAnchor:         [0,0]                   // Point de position popup si elle existe, relativement à l'icône
        });

        // Ajout d'un marqueur
        let marker = Leaflet.marker([47.746416,6.7298049], {icon: myIcon}).addTo(map)

        // Ajout d'une infobulle
        marker.bindPopup("André Chipeaux: Motor Concept, 1 Rue du charbonnier, 70400, Plancher-Bas")



    })

</script>

<template>
  <main class="min-h-[100vh]">
    <div class="absolute -z-10 -top-8 left-0 w-full bg-red-400 h-1/2 -skew-y-6"></div>
    <div class="flex flex-col gap-5 px-3 md:px-6 lg:px-10 pb-6">
      <div class="pt-6">
        <h1 class="text-4xl font-bona-nova font-bold text-center text-Extended/blue-gray/750 leading-none">Contact</h1>
      </div>
      <div>
        <form class="flex flex-col sm:flex-row sm:justify-evenly items-center gap-10 px-6 py-3 md:px-12 md:py-6 rounded-xl bg-gray-900"
        action="https://getform.io/f/661e2b65-6acf-4f76-897f-f65e1832c3a7" method="POST">
          <div class="flex flex-col gap-5 md:gap-20">
            <div class="flex items-end gap-6">
              <div class="flex flex-col gap-4">
                <label class="text-xl lg:text-3xl font-cabin uppercase text-white">Votre nom</label>
                <input name="name" v-model="inputNameValue" class="bg-gray-700 text-red-500 text-xl" type="text" @input="checkInput">
              </div>
              <div>
                <svg v-show="inputNameEmpty" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <svg class="rotate-180" v-show="inputNameFill" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="flex items-end gap-6">
              <div class="flex flex-col gap-4">
                <label class="text-xl lg:text-3xl font-cabin uppercase text-white">Votre adresse mail</label>
                <input name="email" v-model="inputMailValue" class="bg-gray-700 text-red-500 text-xl" type="text" @input="checkInput">
              </div>
              <div>
                <svg v-show="inputMailEmpty" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <svg class="rotate-180" v-show="inputMailFill" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="flex items-end gap-6">
              <div class="flex flex-col gap-4">
                <label class="text-xl lg:text-3xl font-cabin uppercase text-white">Votre message</label>
                <textarea name="message" v-model="inputMessageValue" class="bg-gray-700 text-red-500 text-xl" @input="checkInput"></textarea>
              </div>
              <div>
                <svg v-show="inputMessageEmpty" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
                <svg class="rotate-180" v-show="inputMessageFill" width="33" height="57" viewBox="0 0 33 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16.5" cy="40.5" r="16.5" fill="#F1F5F9"/>
                  <g filter="url(#filter0_d_506_62376)">
                    <path d="M19.5 10C19.5 8.61929 18.3807 7.5 17 7.5C15.6193 7.5 14.5 8.61929 14.5 10H19.5ZM19.5 43L19.5 10H14.5L14.5 43H19.5Z" fill="#F1F5F9"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_506_62376" x="10.5" y="0.5" width="13" height="43.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="-3"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_62376"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_62376" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-red-500 p-3 md:p-4 rounded-full">
              <PaperAirplaneIcon class="w-8 md:w-12 text-white"/>
            </button>
          </div>
        </form>
      </div>
      <div>
        <div>
            <div class="w-full h-[50vh] sm:h-[70vh] z-10" id="map">

            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
   
</style>
