<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';
</script>

<template>
  <div class="card mb-4">
    <div class="card-img">
      <AnimatedPlaceholder height="200px" width="100%" />
    </div>
    <div class="card-body body-placeholder">
      <h5 class="card-title text-2-line text-2-line-height">
        <AnimatedPlaceholder height="18px" width="70%" border-radius="8px"/>
      </h5>
      <p class="card-text">
        <AnimatedPlaceholder height="12px" width="40%" border-radius="8px"/>
      </p>
      <div class="btns d-flex w-100">
        <slot name="myCollect"></slot>
        <slot name="goodToCart"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-placeholder{
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%
}
</style>
