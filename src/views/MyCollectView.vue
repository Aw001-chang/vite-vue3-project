<script setup>
import { storeToRefs } from 'pinia';

import { useCollection } from '../stores/collection';
import { useGoodsAll } from '../stores/goods';
import { useCart } from '../stores/cart';

import GoodCard from '../components/GoodCard.vue';
import AnimateCard from '../components/AnimateCard.vue';
import SectionTitle from '../components/sectionTitle.vue';

const dataCart = useCart();
const { addToCart } = dataCart;

const AllDataGoodsAll = useGoodsAll();
const { getGoodId } = AllDataGoodsAll;

const dataCollection = useCollection();
const { addMyCollection } = dataCollection;
const { collectionData, collectID, collectionLength } = storeToRefs(dataCollection);

</script>

<template>
  <div class="container-lg">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <SectionTitle>
          <template #sectionTitle>我的收藏</template>
        </SectionTitle>
      </div>
      <!-- 以下 尚未收藏 -->
      <div class="col-12 text-center seperation-top seperation-bottom"  v-if="collectionData.length === 0">
        <div class="text-muted">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>尚未收藏品項
        </div>
      </div>
      <!-- 以下 收藏清單 -->
      <div class="col-12 seperation-bottom" v-else>
        <div class="row">
          <div class="col-12 seperation-bottom">顯示所有&nbsp;{{ collectionLength }}個結果</div>
          <div  class="col-md-3 col-sm-6" v-for="item in collectionData" :key="item.id">
            <Suspense>
                <GoodCard>
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
                </GoodCard>
              <template #fallback>
                <AnimateCard />
              </template>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>