<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

import { ref } from 'vue'
const menuOuvert = ref(false)
const menuFermer = ref(true)
</script>

<template>
  <header>
    <nav class="flex justify-between bg-white font-cabin px-6 py-3 after:absolute after:w-full after:h-0.5 after:top-12 after:left-0  after:bg-red-300 ">
      <a href="/test.html">
        <img src="@/assets/logoMotorConceptCouleur.svg" alt="Logo de l'entreprise André Chipeaux: Motor Concept" width="200"/>
      </a>
      <ul class="hidden lg:flex gap-11">
        <li><RouterLink to="/presentation">Présentation</RouterLink></li>
        <li><RouterLink to="/palmares">Palmarès</RouterLink></li>
        <li><RouterLink to="/livredor">Livre d'Or</RouterLink></li>
        <li><RouterLink to="/contact">Me contacter</RouterLink></li>
        <li><RouterLink to="/galerie">Galerie</RouterLink></li>
        <li><RouterLink to="/expertise">Expertise</RouterLink></li>
      </ul>
      <button 
      class="lg:hidden"
      aria-haspopup="true"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer"
      :class="{'flex': menuFermer }">
        <Bars3Icon class="w-8"/>
        <span class="sr-only">Menu</span> 
      </button>
    </nav>
    <div 
    id="menu"
    class="fixed inset-0 flex z-50 text-center flex-col bg-white justify-center motion-safe:transition-transform motion-safe:duration-1000"
    :class="{ 'translate-x-0': menuOuvert, 'translate-x-full': menuFermer }">
      <button class="absolute top-3 right-3"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer">
        <XMarkIcon class="w-8"/>
        <span class="sr-only">Fermer menu</span> 
      </button>
      <a class="absolute top-3 left-3" href="/index.html">
        <img src="@/assets/logoMotorConceptCouleur.svg" alt="Vue logo" width="200"/>
      </a>
      <nav class="flex flex-col font-cabin gap-5 text-4xl">
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/presentation">Présentation</RouterLink>
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/palmares">Palmarès</RouterLink>
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/livredor">Livre d'Or</RouterLink>
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/contact">Me contacter</RouterLink>
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/galerie">Galerie</RouterLink>
        <RouterLink class="relative z-10" @click="menuOuvert = !menuOuvert, menuFermer = !menuFermer" to="/expertise">Expertise</RouterLink>
      </nav>
      <div class="absolute -bottom-32 w-full bg-red-500 h-2/4 -skew-y-12"></div>
    </div>
  </header>

  <suspense>
    <RouterView />
  </suspense>

  <footer class="flex flex-col items-center font-cabin md:items-stretch px-7 py-3 bg-Extended/blue-gray/750 text-neutral-50">
    <div class="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0">
      <a class="my-auto" href="/"><img class="w-full stroke-whte" src="@/assets/logoMotorConceptBlanc.svg" alt="Logo d'André Chipeaux Motor Concept"></a>
      <div class="px-8 flex flex-col gap-5">
        <ul class="flex flex-col gap-2 text-sm lg:text-base">
          <li class="flex items-center gap-2"><img class="w-8 text-white" src="@/assets/facebook.png" alt=""> <a href="https://www.facebook.com/andre.chipeaux/" target="_blank">Andre.Chipeaux</a></li>
          <li class="flex items-center gap-2"><EnvelopeIcon class="w-8"/><a href="mailto:andrechipeaux@gmail.com">andrechipeaux@gmail.com</a></li>
          <li class="flex items-center gap-2"><PhoneIcon class="w-8"/><a href="tel:+33767710356">06 64 99 44 55</a></li>
          <li class="flex items-center gap-2"><MapPinIcon class="w-8"/>1 Rue du charbonnier, 70423, Plancher-Bas</li>
        </ul>
      </div>
      <div class="md:flex items-center px-8 text-sm lg:text-base">
        <nav>
          <ul class="flex flex-col gap-2">
            <li>
              <RouterLink to="/presentation">Présentation</RouterLink>
            </li>
            <li>
              <RouterLink to="/palmares">Palmarès</RouterLink>
            </li>
            <li>
              <RouterLink to="/expertise">Expertise</RouterLink>
            </li>
            <li>
              <RouterLink to="/livredor">Livre d'Or</RouterLink>
            </li>
            <li>
              <RouterLink to="/galerie">Galerie</RouterLink>
            </li>
            <li>
              <RouterLink to="/mentionslegales">Mentions Légales</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>

</template>