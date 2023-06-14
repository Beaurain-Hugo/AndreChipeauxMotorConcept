<script setup>
    import { supabase } from "@/supabase";
import Voiture from '@/components/voiture.vue'
import cardVoiture from '@/components/cardVoiture.vue'
const { data: voitures, error } = await supabase
      .from("Voiture")
      .select("*")
        if (error) {
          console.log("n'a pas pu récupérer les montres", { error });
        } else console.log('Appel à tous les résultats', voitures)

</script>

<template>
  <main class="min-h-[100vh]">
    <div class="absolute -z-10 -top-8 left-0 w-full bg-red-400 h-1/2 -skew-y-6"></div>
    <div class="flex flex-col">
      <div class="px-3 py-6 md:px-6 lg:px-10">
        <h1 class="text-4xl font-bona-nova font-bold text-center text-Extended/blue-gray/750 leading-none">Palmarès</h1>
      </div>
      <img class="h-[200vh]" src="@/assets/palmaresIllustration.jpg" alt="">
      <div class="absolute mt-16">
      <div class="first:mt-36 odd:ml-[10vw] odd:sm:ml-[20vw] md:odd:ml-[25vw] lg:odd:ml-[30vw] 2xl:odd:ml-[35vw] even:ml-[60vw]" v-for="voiture in voitures" :key="voiture.id">
            <cardVoiture v-bind="voiture" />
        </div>
      </div>
      <a href="https://www.facebook.com/andre.chipeaux/"><img class="absolute top-32 left-10 w-24 sm:w-36" src="@/assets/drapeauFacebook.png" alt=""/></a>
    </div>
  </main>
</template>

<style>

</style>
