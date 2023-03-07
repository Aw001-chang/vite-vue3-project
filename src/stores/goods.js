import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useStorage } from '@vueuse/core';
import { scrollToTop } from '../composable/scrollTop';

export const useGoodsAll = defineStore('goodsAll', () => {
  const isLoading = ref(false);
  // ----------------- 瀏覽紀錄 ------------------------------
  const WatchedData = ref(
    useStorage('recentWatched',[])
  );
  // ----------------- 所有商品 ------------------------------
  const goodsAll = ref([]);

  const getAllProducts = async() => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products/all`
      isLoading.value = true
      const res = await axios.get(api)
      isLoading.value = false
      goodsAll.value = res.data.products
      goodsAll.value.reverse()
    }catch(error) {
      console.log(error.response)
    }
  };

  // ----------------- 所有商品（有分頁） ------------------------------
  const goods = ref([]);
  const pagination = ref({});

  const getGoods = async ( page = 1 ) => {
    try{
      const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/products?page=${page}`;
      isLoading.value = true;
      const res = await axios.get(api);
      isLoading.value = false;
      goods.value = res.data.products;
      pagination.value = res.data.pagination;
    }catch(error) {
      console.log(error.response);
    }
    scrollToTop();
  }
  // ----------------- 跳轉至商品詳情 ------------------------------
  const router = useRouter();
  const getGoodId = (id) => {
    router.push(`goodInfomation/${id}`);
    // 加入歷史瀏覽紀錄
    WatchedData.value.push(id);
    localStorage.setItem('recentWatched', id);
  }
  // ----------------- 清除歷史瀏覽紀錄 ------------------------------
  const clearStorage = () => {
    WatchedData.value.length = 0;
    localStorage.removeItem('recentWatched');
  }




  onMounted(getAllProducts);
  onMounted(getGoods);
  return {
    isLoading,
    goodsAll,
    getGoodId,
    goods,
    pagination,
    WatchedData,
    clearStorage,
    getGoods
  }
})