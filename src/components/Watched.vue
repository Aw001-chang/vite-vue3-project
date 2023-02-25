<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useGoodsAll } from '../stores/goods';
import { useCart} from '../stores/cart';
import GoodCard from '../components/GoodCard.vue';

const { addToCart } = useCart();
const dataGoodsAll = useGoodsAll();
const { getGoodId } = dataGoodsAll;
const { WatchedData, goodsAll } = storeToRefs(dataGoodsAll);

const theWatched = computed(() => {
  return [...new Set(WatchedData.value)]
});
// 從goodsAll獲取完整資料
const getWatched = computed(() => {
  return goodsAll.value.filter((item)=>{
    return theWatched.value.indexOf(item.id) > -1
  })
});

</script>

<template>
  <div class="row mt-4">
    <GoodCard class="col-3"
      v-for="item in getWatched"
      :key="item.id">
      <template #goodImage>
        <img @click="getGoodId(item.id)"
          :src="item.imageUrl"
          class="card-img-top"
          alt="">
      </template>
      <template #goodTitle>{{ item.title }}</template>
      <template #goodPrice>{{ $filter.currency(item.price) }}</template>
      <template #goodToCart>
        <button type="button"
          @click="addToCart(item.id, 1)"
          class="btn btn-success flex-fill">加入購物車</button>
      </template>
    </GoodCard>
  </div>
</template>
