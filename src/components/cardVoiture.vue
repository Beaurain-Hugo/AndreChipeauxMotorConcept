<script setup>
    import Voiture from '@/components/voiture.vue'
        defineProps({
            nomPilote: String,
            place: String,
            course: String,
            moteur: String,
        })
</script>

<template>
    <div class="group relative max-w-min">
        <div class="px-3 hidden m-auto py-1 font-cabin bg-gray-300 top-[-9rem] border-2 absolute border-black w-max group-hover:block">
            <p class="text-2xl after:inline-block after:align-middle after:mx-1 after:h-0.5 after:w-10 after:content-[''] after:bg-black">{{ nomPilote }}</p>
            <div class="flx gap- after:inline-block after:align-middle after:mx-1 after:h-0.5 after:w-10 after:content-[''] after:bg-black">
                <p class="after:inline-block after:align-middle after:mx-1 after:h-0.5 after:w- after:content-[''] after:bg-black">{{ place }}</p>
                <p>{{ course }}</p>
            </div>
            <p>{{ moteur }}</p>
        </div>
        <Voiture class="" />
    </div>
</template>