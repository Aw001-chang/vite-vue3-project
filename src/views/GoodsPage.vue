<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useGoodsAll } from '../stores/goods';
import { useCategorySelect } from '../stores/categorySelect';
import { useCollection } from '../stores/collection';
import { useCart } from '../stores/cart';

import Category from '../components/goods/Category.vue';
import SectionTitle from '../components/sectionTitle.vue';
import GoodCard from '../components/GoodCard.vue';
import AnimateCard from '../components/AnimateCard.vue';
import Pagination from '../components/goods/Pagination.vue';

const dataCollection = useCollection();
const { collectID } = storeToRefs(dataCollection);
const { addMyCollection } = dataCollection;

const datagoodsAll = useGoodsAll();
const { goodsAll, goods, isLoading, pagination } = storeToRefs(datagoodsAll);
const { getGoodId, getGoods } = datagoodsAll;

const categorySelect = useCategorySelect();
const { selectTitle, isActive } = storeToRefs(categorySelect);

const dataCart = useCart();
const { addToCart } = dataCart;

const filterGoodsData = computed(()=>{
  return goodsAll.value.filter((item)=>{
    if (isActive.value === item.category ){
      return item
    }
  })
});

</script>

<template>
  <Loading :active="isLoading"></Loading>
<!-- 商品列表選單 -->
  <Category/>
  <SectionTitle>
    <template #sectionTitle>{{ selectTitle }}</template>
  </SectionTitle>

  <section class="container-sm">
    <!-- <AnimateCard /> -->

    <!-- 全部 has padination-->
    <div class="row" v-if="isActive === null">
        <div
          v-for="item in goods"
          :key="item.id"
          class="col-lg-3 col-md-4 col-sm-6 col-12">
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
        <Pagination :pages="pagination" @emit-pages="getGoods"/>
    </div>
    <!-- 花束、盆花、課程 -->
    <div class="row" v-if="isActive !== null">
      <div
        v-for="item in filterGoodsData"
        :key="item.id"
        class="col-lg-3 col-md-4 col-sm-6 col-12">
        <Suspense>
          <GoodCard>
            <template #goodImage>
              <img @click="getGoodId(item.id)"
                :src="item.imageUrl"
                class="card-img-top"
                alt="">
            </template>
            <template #goodTitle>{{ item.title}}</template>
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
  </section>
</template>

