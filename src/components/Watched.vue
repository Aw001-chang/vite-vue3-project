<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useGoodsAll } from '../stores/goods';
import { useCart} from '../stores/cart';
import { useCollection } from '../stores/collection';

import GoodCard from '../components/GoodCard.vue';
import AnimateCard from '../components/AnimateCard.vue';

const dataGoodsAll = useGoodsAll();
const { getGoodId } = dataGoodsAll;
const { WatchedData, goodsAll } = storeToRefs(dataGoodsAll);

const { addToCart } = useCart();

const dataCollection = useCollection();
const { collectID } = storeToRefs(dataCollection);
const { addMyCollection } = dataCollection;


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
  <div class="container-sm px-0">
    <div class="row mt-4">
      <div class="col-lg-3 col-md-4 col-sm-6" v-for="item in getWatched.slice(0, 4)" :key="item.id">
        <Suspense>
          <GoodCard>
            <template #goodImage>
              <img @click.prevent="getGoodId(item.id)"
                :src="item.imageUrl"
                class="card-img-top"
                alt="">
            </template>
            <template #goodTitle>{{ item.title }}</template>
            <template #goodPrice>{{ $filter.currency(item.price) }}</template>
            <template #myCollect>
              <a @click.prevent="addMyCollection(item, item.id)"
                href="#"
                class="btn me-2"
                :class="collectID.indexOf(item.id) > -1 ? 'btn-toffee' : 'btn-outline-toffee'">
                <i class="bi bi-bookmark"></i>
              </a>
            </template>
            <template #goodToCart>
              <button type="button"
                @click.prevent="addToCart(item.id, 1)"
                class="btn btn-outline-toffee flex-fill">加入購物車</button>
            </template>
          </GoodCard>
          <template #fallback>
            <AnimateCard />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>
