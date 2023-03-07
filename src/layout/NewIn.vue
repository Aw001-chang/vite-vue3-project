<script setup>
import SectionTitle from '../components/sectionTitle.vue';
</script>

<template>
  <div class="container-lg">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-10">
        <SectionTitle>
          <template #sectionTitle>最新商品</template>
        </SectionTitle>
        <div class="row justify-content-center seperation-bottom">
          <slot name="slotGoodCard"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media(max-width:767.98px){
  .container-lg{
    max-width: 540px;
    position: static;
  }
}
</style>

