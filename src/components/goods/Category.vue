<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useCategorySelect } from '../../stores/categorySelect';
const categorySelect = useCategorySelect();
const { defaultBtn, categoryBtn, isActive, isDefault } = storeToRefs(categorySelect);
const { defaultSelected, isSelected } = categorySelect;

onMounted(defaultSelected);
</script>

<template>
  <div class="category-btns container py-3 mt-5">
    <div class="d-flex justify-content-center align-items-center">
      <button
        :class="isDefault"
        @click.prevent="defaultSelected"
        type="button"
        class="btn me-2">{{ defaultBtn }}
      </button>
      <button
        v-for="btn in categoryBtn"
        :key="btn"
        :class="{ active: btn === isActive  }"
        @click.prevent="isSelected(btn)"
        type="button"
        class="btn me-2">{{ btn }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/thems.scss';

.btn{
  border:1px solid $orange-100;
  color: $orange-700;
  &:hover{
    background-color: $orange-100;
    color: $orange-700;
  }
}
.btn.active{
  border:1px solid $orange-100;
  background-color: $orange-100;
  color: $orange-800;
}
</style>
