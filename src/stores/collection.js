import { defineStore } from "pinia";
import { ref, watch, computed, watchEffect } from "vue";
import { useLocalStorage } from '@vueuse/core';
import { useToastMessage } from './toastMessage';

export const useCollection = defineStore('collection', () => {
  // ----------------- toast訊息元件 ------------------------------
  const dataToastMessage = useToastMessage();
  const { pushMessage } = dataToastMessage;
  let msg;
  
  const collectionData = ref(
    useLocalStorage('collection',[])
  );

  if (localStorage.getItem('collection')){
    collectionData.value = JSON.parse(localStorage.getItem('collection'))
  };

  watch(
    collectionData,
    (collactionVal) => {
      localStorage.setItem('collection', JSON.stringify(collactionVal))
    },
    { deep: true }
  );


  const addMyCollection = (item, id) => {
    const match = collectionData.value.findIndex((itemVal) => item.id === itemVal.id);

    if(match === -1) {
      collectionData.value.push(item)
      msg = {
        style: 'teal-700',
        content: '成功加入我的收藏'
      }
    }else if ( match > -1 ) {
      collectionData.value.splice(match, 1)
      msg = {
        style: 'teal-700',
        content: '成功移除我的收藏'
      }
    };
    pushMessage(msg);
    localStorage.setItem('collection', JSON.stringify(collectionData));
  }

  const collectID = computed(() => {
    return collectionData.value.map((item) => {
      return item.id
    })
  });



  
  return {
    collectionData,
    addMyCollection,
    collectID,
  }
},
{
  persist: true
})