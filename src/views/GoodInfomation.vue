<script setup>
import axios from 'axios';
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCart } from '../stores/cart';
import { useCollection } from '../stores/collection';

import SectionTitle from '../components/sectionTitle.vue';

// 加入收藏
const dataCollection = useCollection();
const { collectID } = storeToRefs(dataCollection);
const { addMyCollection } = dataCollection;

// 取得商品id
const route = useRoute();
const id = route.params.id;

// 加入購物車
const dataCart = useCart();
const { addToCart } = dataCart;
const { isLoading } = storeToRefs(dataCart);

const good = ref({
  qty: 1
});
const numVal = ref();

isLoading.value = true;
// 獲取商品詳細資訊
const getGoodsInfo = async() => {
  const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${id}`;
  const res = await axios.get(api);
  isLoading.value = false;
  good.value = res.data.product;
  good.value.qty = res.data.qty;
};

onMounted(getGoodsInfo);
</script>

<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-xxl">
    <div class="row justify-content-center">
      <div class="col-xl-8 col-lg-10 col-12">
        <SectionTitle>
          <template #sectionTitle>{{ good.category }}</template>
        </SectionTitle>
        
        <div class="row">
          <div class="col-sm-7 col-12">
            <div class="mb-3">
              <img :src="good.imageUrl" class="w-100" alt="">
            </div>
            <ul class="d-flex">
              <!-- <li class="me-2">
                <img src="../assets/img/demo.png" class="w-100" alt="">
              </li>
              <li class="me-2">
                <img src="../assets/img/demo.png" class="w-100" alt="">
              </li>
              <li class="me-2">
                <img src="../assets/img/demo.png" class="w-100" alt="">
              </li>
              <li class="me-2">
                <img src="../assets/img/demo.png" class="w-100" alt="">
              </li>
              <li class="me-2">
                <img src="../assets/img/demo.png" class="w-100" alt="">
              </li> -->
            </ul>
          </div>
          <div class="col-sm-5 col-12 mt-5 mt-sm-0 text-orange-900">
            <div class="h4 mb-4">{{ good.title }}</div>
            <div class="mb-4">
              <div class="h5 text-red-600">NT$&nbsp;{{ $filter.currency(good.price) }}</div>
            </div>
            <div class="mb-5">
              <div>花材:</div>
              <p>杏粉田園玫瑰、白芨、橘水仙百合、雪柳葉、白桔梗</p>
            </div>
            <div class="form-floating mb-4">
              <select
                v-model.number="good.qty"
                class="form-select text-orange-900"
                id="floatingSelect"
                aria-label="Floating label select example">
                <option :value="numVal" disabled>請選擇數量</option>
                <option
                  v-for="qty in 10"
                  :key="qty"
                  :value="qty"
                  selected
                >{{qty}}</option>
              </select>
              <label for="floatingSelect">數量:</label>
            </div>
            <div class="row">
              <div class="col-md-6 col-sm-12 col-6 mb-3 mb-md-0">
                <button
                    v-if="collectID.indexOf(good.id) > -1"
                    @click="addMyCollection(good, good.id)"
                    type="button"
                    class="btn btn-success w-100">
                    <i class="bi bi-bookmark me-1"></i>取消收藏
                  </button>
                <button
                  v-else
                  @click="addMyCollection(good, good.id)"
                  type="button"
                  class="btn btn-outline-success w-100">
                  <i class="bi bi-bookmark me-1"></i>加入收藏
                </button>
              </div>
              <div class="col-md-6 col-sm-12 col-6">
                <button
                  @click="addToCart(good.id, good.qty)"
                  type="button"
                  class="btn btn-success w-100">
                  <i class="bi bi-cart me-1"></i>加入購物車
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 seperation-top seperation-bottom">
            <ul class="nav nav-tabs"
              id="myTab"
              role="tablist">
              <li class="nav-item"
                role="presentation">
                <button class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true">商品說明</button>
              </li>
              <li class="nav-item"
                role="presentation">
                <button class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false">商品運送</button>
              </li>
            </ul>
            <div class="tab-content p-4"
              id="myTabContent">
              <div class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0">
                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master
                cleanse. Mustache cliche tempor, williams burg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamc
                atcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
                Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
              </div>
              <div class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0">...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
