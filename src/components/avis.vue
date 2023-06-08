<script setup>
import {ref, onMounted } from 'vue'
defineProps({
    nom: String,
    date: String,
    commentaire: String,
    note: Number,
})

//const emit = defineEmits(['note'])
//const note = () => {
//    emit('noteAvis')
//}



</script>

<template>
    <div class="flex p-4">
        <div class="flex items-center gap-5 after:absolute after:content-[''] after:w-5/6 after:h-0.5 after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-red-300">
            <img class="w-32" :src="`notes/compteur${note}.png`" alt="">
            <div class="flex flex-col gap-2">
                <div class="flex flex-col">
                    <p class="font-cabin font-bold leading-none">{{ nom }}</p>
                    <p class="font-cabin leading-none">{{ date }}</p>
                </div>
                <p class="font-cabin leading-none">{{ commentaire }}</p>
            </div>
        </div>
    </div>
</template>