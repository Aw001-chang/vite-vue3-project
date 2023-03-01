<script setup>
import { storeToRefs } from 'pinia';

import { useGoodsAll } from '../stores/goods';
import { useCart } from '../stores/cart';
import { useCollection } from '../stores/collection';

import NewIn from '../layout/NewIn.vue';

import GoodCard from '../components/GoodCard.vue';
import About from '../components/homepage/About.vue';
import Feature from '../components/homepage/Feature.vue';
import AnimateCard from '../components/AnimateCard.vue';

const dataCollection = useCollection();
const { collectID } = storeToRefs(dataCollection);
const { addMyCollection } = dataCollection;

const dataCart = useCart();
const { addToCart } = dataCart;

const AllDataGoodsAll = useGoodsAll();
const { goodsAll } = storeToRefs(AllDataGoodsAll);
const { getGoodId } = AllDataGoodsAll;
</script>

<template>
  <main>
    <NewIn>
      <template #slotGoodCard>
        <div
          v-for="item in goodsAll.slice(0, 4)"
          :key="item.id"
          class="col-md-3 col-sm-6">
          <Suspense>
            <good-card>
              <template #goodImage>
                <img @click="getGoodId(item.id)"
                  :src="item.imageUrl"
                  class="card-img-top"
                  alt="">
              </template>
              <template #goodTitle>{{ item.title }}</template>
              <template #goodPrice>NT$&nbsp;{{ $filter.currency(item.price) }}</template>
              <template #myCollect>
                <a @click="addMyCollection(item, item.id)"
                  href="#"
                  class="btn me-2"
                  :class="collectID.indexOf(item.id) > -1 ? 'btn-toffee' : 'btn-outline-toffee'">
                  <i class="bi bi-bookmark"></i>
                </a>
              </template>
              <template #goodToCart>
                <button type="button"
                  @click="addToCart(item.id, 1)"
                  class="btn btn-outline-toffee flex-fill">加入購物車</button>
              </template>
            </good-card>
            <template #fallback>
              <AnimateCard />
            </template>
            
          </Suspense>
        </div>
      </template>
    </NewIn>
    <div class="mt-5 text-center seperation-bottom">
      <router-link to="/goods">
        <button type="button"
          class="btn btn-outline-secondary btn-sm">查看更多</button>
      </router-link>
    </div>
    <About/>
    <Feature/>
  </main>
</template>
