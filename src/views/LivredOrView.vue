<script setup>
import {ref, onMounted} from 'vue'
  import { AdjustmentsHorizontalIcon, PlusIcon } from '@heroicons/vue/20/solid'
  import AvisComp from '../components/avis.vue'
  const request = await fetch("/data.json")
  const Avis = await request.json()

const avisAncienVisibility = ref(false)
const avisRecentsVisibility = ref(false)
const avisCroissantsVisibility = ref(false)
const avisDecroissantsVisibility = ref(false)


const filtreAncien = () => {
  let avisAncien = supabase
  .from('Avis')
  .select('*')
  avisAncienVisibility.value = true
  avisRecentsVisibility.value = false
  avisCroissantsVisibility.value = false
  avisDecroissantsVisibility.value = false
  return(avisAncien)
}

let {data: avisAncien} = await filtreAncien()


const filtreRecent = () => {
  let avisRecents = supabase
  .from('avisrecent')
  .select('*')
  avisAncienVisibility.value = false
  avisRecentsVisibility.value = true
  avisCroissantsVisibility.value = false
  avisDecroissantsVisibility.value = false
  return(avisRecents)
}

let {data: avisRecents } = await filtreRecent()

const filtreCroissant = () => {
  let avisCroissants = supabase
  .from('aviscroissant')
  .select('*')
  avisAncienVisibility.value = false
  avisRecentsVisibility.value = false
  avisCroissantsVisibility.value = true
  avisDecroissantsVisibility.value = false
  return(avisCroissants)
}

let {data: avisCroissants } = await filtreCroissant()

const filtreDecroissant = () => {
  let avisDecroissants = supabase
  .from('avisdecroissant')
  .select('*')
  avisAncienVisibility.value = false
  avisRecentsVisibility.value = false
  avisCroissantsVisibility.value = false
  avisDecroissantsVisibility.value = true
  return(avisDecroissants)
}

let {data: avisDecroissants } = await filtreDecroissant()

onMounted(() => {
  filtreRecent()
})

</script>

<template>
  <main class="min-h-[100vh]">
    <div class="absolute -z-10 -top-8 left-0 w-full bg-red-400 h-1/2 -skew-y-6"></div>
    <div class="flex flex-col gap-5 px-3 pt-6 md:px-6 lg:px-10 pb-6">
      <h1 class="text-4xl font-bona-nova font-bold text-center text-Extended/blue-gray/750 leading-none">Livre d'Or</h1>
      <div class="flex flex-col gap-5">
        <div class="flex gap-5 justify-center">
          <div class="dropdown">
            <label tabindex="0" class="flex cursor-pointer items-center bg-red-600 hover:bg-red-800 hover:text-white px-4 py-2 rounded-md">
                <AdjustmentsHorizontalIcon class="w-4" />
                <span>Filtrer</span>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><button @click="filtreRecent">Les plus récents</button></li>
              <li><button @click="filtreAncien">Les plus anciens</button></li>
              <li><button @click="filtreDecroissant">Les meilleurs</button></li>
              <li><button @click="filtreCroissant">Les moins bons</button></li>
            </ul>
          </div>
          <RouterLink to="/ajouteravisview" class="flex items-center bg-red-600 hover:bg-red-800 hover:text-white px-4 py-2 rounded-md">
            <PlusIcon class="w-4" />
            <span>Ajouter un avis</span>
        </RouterLink>
        </div>
        <div class="flex flex-col gap-8">
          <div v-show="avisAncienVisibility" class="odd:bg-gray-100 rounded-xl even:bg-red-700 even:text-white relative" v-for="avis in avisAncien" :key="avis.id">
            <AvisComp v-bind="avis" />
          </div>
           <div v-show="avisRecentsVisibility" class="even:bg-gray-100 rounded-xl odd:bg-red-700 odd:text-white relative" v-for="avis in avisRecents" :key="avis.id">
            <AvisComp v-bind="avis" />
          </div>
          <div v-show="avisCroissantsVisibility" class="odd:bg-gray-100 rounded-xl even:bg-red-700 even:text-white relative" v-for="avis in avisCroissants" :key="avis.id">
            <AvisComp v-bind="avis" />
          </div>
          <div v-show="avisDecroissantsVisibility" class="odd:bg-gray-100 rounded-xl even:bg-red-700 even:text-white relative" v-for="avis in avisDecroissants" :key="avis.id">
            <AvisComp v-bind="avis" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
