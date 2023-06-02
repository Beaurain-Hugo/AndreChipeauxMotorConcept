<script setup>
    import { ref } from 'vue';
    import SvgVoiture from '@/components/voiture.vue';
    import { useRouter } from "vue-router";
    import { supabase } from "@/supabase";

const router = useRouter();

async function upsertResultat(dataForm) {
  const { data, error } = await supabase
    .from("Voiture")
    .upsert(dataForm);
  if (error) {
    console.error(
      "Impossible d'ajouter le résultat : ",
      " erreur : ",
      error
    );
  } else {
    window.location.href="/palmares";
  }
}
</script>
<template>
    <div class="p-2">
        <div>
            <SvgVoiture class="carousel-item w-64" />
        </div>
        <FormKit id="form"
        type="form" 
        :config="{ classes:{input:'text-black w-3/4', actions: 'justify-self-end', form: '$reset grid grid-cols-1 gap-2' }}"
        :submit-attrs="{
        inputClass: 'rounded-md shadow-sm focus-style p-2 bg-blue-300 ',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertResultat"
        :submit-label="'Envoyer'">
            <FormKit name="nomPilote" label="Nom du pilote"/> 
            <FormKit name="moteur" label="Moteur du véhicule"/> 
            <FormKit name="place" label="Position"/> 
            <FormKit name="course" label="Course"/> 
        </FormKit>
    </div>
</template>