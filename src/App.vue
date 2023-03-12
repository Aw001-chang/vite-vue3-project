<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/scss/all.scss';
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul{
  margin-bottom: 0 !important;
  padding-left: 0 !important;
  li{
    list-style: none;
  }
}
</style>
