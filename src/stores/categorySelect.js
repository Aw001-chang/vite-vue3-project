import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useCategorySelect = defineStore('categorySelect', () => {
  const defaultBtn = ref('全部');
  const categoryBtn = ref(['花束', '盆花', '課程']);
  const isActive = ref(null);
  const isDefault = ref({
    active: true
  });
  const selectTitle = ref('全部');
  // 預設值按鈕
  const defaultSelected = () => {
    isActive.value = null;
    isDefault.value.active = true;
  }
  // 其他按鈕
  const isSelected = (btn) => {
    isDefault.value.active = false;
    isActive.value = btn;
  }
  // 監聽按鈕主題＝商品列表標題
  watch(isActive, (newx) => {
    if( newx !== null){
      selectTitle.value = newx
    }else{
      selectTitle.value = '全部'
    };
  })



  return{
    defaultBtn,
    categoryBtn,
    isActive,
    isDefault,
    selectTitle,
    defaultSelected,
    isSelected,
  }
})