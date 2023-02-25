import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastMessage = defineStore('toastMessage', () => {

  const messages = ref([]);

  const pushMessage = (msg) => {
    messages.value.push(msg);
  }


  return{
    pushMessage,
    messages
  }
})