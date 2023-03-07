<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import AOS from 'aos';

import { useGoodsAll } from '../stores/goods';
import { useCart } from '../stores/cart';
import { useCollection } from '../stores/collection';

import NewIn from '../layout/NewIn.vue';

import GoodCard from '../components/GoodCard.vue';
import About from '../components/homepage/About.vue';
import Feature from '../components/homepage/Feature.vue';
import AnimateCard from '../components/AnimateCard.vue';
import Banner from '../components/homepage/Banner.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

const modules = ref([Navigation, Pagination, Mousewheel, Keyboard, Scrollbar])

const dataCollection = useCollection();
const { collectID } = storeToRefs(dataCollection);
const { addMyCollection } = dataCollection;

const dataCart = useCart();
const { addToCart } = dataCart;

const AllDataGoodsAll = useGoodsAll();
const { goodsAll } = storeToRefs(AllDataGoodsAll);
const { getGoodId } = AllDataGoodsAll;

onMounted(()=>{
  AOS.init();
})
</script>

<template>
  <main class="home">
    <Banner/>
    <NewIn>
      <!-- +++++++++++++++++ -->
      <template #slotGoodCard>
        <div class="col-12">
        <swiper
          :slidesPerView="1"
          :centeredSlides="false"
          :slidesPerGroupSkip="1"
          :grabCursor="true"
          :spaceBetween="10"
          :keyboard="{
            enabled: true,
          }"
          :scrollbar="true"
          :mousewheel="true"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }"
          :modules="modules"
          class="mySwiper mb-5"
        >
          <swiper-slide v-for="item in goodsAll.slice(0, 6)" :key="item.id" class="mt-5">
            <Suspense>
              <GoodCard>
                <template #goodImage>
                  <img @click.prevent="getGoodId(item.id)"
                    :src="item.imageUrl"
                    class="card-img-top rounded-0"
                    alt="">
                </template>
                <template #goodTitle>{{ item.title }}</template>
                <template #goodPrice>NT$&nbsp;{{ $filter.currency(item.price) }}</template>
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
          </swiper-slide>
        </swiper>
        </div>
      </template>
    </NewIn>
    <About/>
    <Feature/>
  </main>
</template>
