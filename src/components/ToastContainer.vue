<script setup>
import { storeToRefs } from 'pinia';
import Toasts from './Toasts.vue';
import { useToastMessage } from '@/stores/toastMessage';

const dataToastMessage = useToastMessage();
const { messages } = storeToRefs(dataToastMessage);

const theMsg = messages.value;
</script>

<template>
  <div class="toast-container position-fixed top-0 w-100">
    <Toasts v-for="(msg, key) in messages" :key="key" :msg="theMsg" />
  </div>
</template>
