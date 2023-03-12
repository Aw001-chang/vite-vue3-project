<script setup>
import SectionTitle from '@/components/sectionTitle.vue';
</script>

<template>
  <div class="container-xl">
    <SectionTitle>
      <template #sectionTitle>購物車</template>
    </SectionTitle>
    <RouterView />
  </div>
</template>
