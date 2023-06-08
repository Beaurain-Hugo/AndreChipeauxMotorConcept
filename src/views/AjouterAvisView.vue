<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";

const router = useRouter();

async function upsertAvis(dataForm) {
  const { data, error } = await supabase
    .from("Avis")
    .upsert(dataForm);
  if (error) {
    console.error(
      "Impossible d'ajouter l'avis : ",
      " erreur : ",
      error
    );
  } else {
    window.location.href="/livredor";
  }
}

</script>

<template>
<main class="min-h-[100vh]">
    <div class="absolute -z-10 -top-8 left-0 w-full bg-red-400 h-1/2 -skew-y-6"></div>
    <FormKit
        id="form"
        type="form" 
        :config="{ classes:{input:'text-black font-cabin w-3/4 border-2', actions: 'justify-self-end', label: 'font-cabin text-xl', form: '$reset grid grid-cols-1 gap-2 mx-10' }}"
        :submit-attrs="{
        inputClass: 'rounded-md shadow-sm w-full focus-style p-2  bg-green-300 hover:bg-green-500',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertAvis"
        :submit-label="'Envoyer'">
        <FormKit type="hidden" name="id" />
        <FormKit name="nom" label="Votre nom"/> 
        <FormKit
        type="select" 
        name="note"
        label="Note"
        :options="['0', '1','2','3','4','5']"
        placeholder="Choisir une note"/>
        <FormKit name="commentaire" type="textarea" rows="10" label=  "Commmentaire"/>
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-2 bg-red-600 hover:bg-red-800 hover:text-white justify-self-end">
        Effacer
        </button>
    </FormKit>
    </main>
</template>
