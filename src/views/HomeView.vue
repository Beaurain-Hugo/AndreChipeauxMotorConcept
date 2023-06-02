<script setup>
  import { onMounted } from 'vue';

  function redirectToHomepage() {
        window.location.href="/index.html";
    }

onMounted(() => {
  redirectToHomepage()
})
</script>
<template>

</template>