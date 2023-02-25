<script setup>
import About from '../components/homepage/About.vue';
</script>
<template>
  <About/>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
