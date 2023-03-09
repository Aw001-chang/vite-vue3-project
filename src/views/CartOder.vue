<script setup>
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { useGoodsAll } from '../stores/goods';
import { useRouter } from 'vue-router';

import { useCart } from '../stores/cart';

import CartItem from '../components/cart/CartItem.vue';
import OrderForm from '../components/cart/OrderForm.vue';
import TheStep from '../components/cart/TheStep.vue';
import Watched from '../components/Watched.vue';

const dataGoodsAll = useGoodsAll();
const { clearStorage, getGoodId } = dataGoodsAll;
const { WatchedData } = storeToRefs(dataGoodsAll);

const dataCart = useCart();
const { deleteCart, updateCart, useCoupon } = dataCart;
const { cart, isLoading, couponCode, couponSuccess } = storeToRefs(dataCart);

const router = useRouter()
watchEffect(()=>{
  if (cart.value.carts.length < 1) {
    router.push(`goods`)
  }
})

</script>

<template>
  <Loading :active="isLoading"></Loading>
  <TheStep></TheStep>
  <div class="row justify-content-between seperation-top seperation-bottom">
    <!-- 訂購商品 -->
    <div class="col-lg-5 col-md-6 col-12">
      <div class="h4 mb-4 text-center text-md-start text-orange-800">訂購商品</div>
      <CartItem v-for="item in cart.carts" :key="item.index">
        <template #orderImage>
          <a href="#" @click.prevent="getGoodId(item.product.id)">
            <img :src="item.product.imageUrl"
              class="d-block"
              alt="">
          </a>
        </template>
        <template #orderTitle>
          {{ item.product.title }}
        </template>
        <template #orderFinalTotal>
          {{ item.product.price }}
        </template>
        <template #orderQtyReduce>
          <button @click.prevent="updateCart(item, item.qty--)"
            :class="{'disabled': item.qty <= 1}"
            type="button"
            class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-dash-lg"></i>
          </button>
        </template>
        <template #orderQty>
          <input v-model.number="item.qty"
            @change="updateCart(item)"
            type="number"
            class="text-center form-control rounded-0 border-start-0 border-end-0 border-secondary">
        </template>
        <template #orderQtyPlus>
          <button @click.prevent="updateCart(item, item.qty++)"
            :class="{'disabled': item.qty >= 10}"
            type="button"
            class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-plus-lg"></i>
          </button>
        </template>
        <template #orderDelete>
          <a href="#" @click.prevent="deleteCart(item)">
            <i class="bi bi-trash text-danger fs-6 fw-lighter"></i>
          </a>
        </template>
      </CartItem>
      <div class="input-group mt-5">
        <input
          v-model.trim="couponCode"
          :disabled="couponSuccess === true"
          type="text"
          class="form-control"
          placeholder="輸入折扣碼"
          aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <button
          @click.prevent="useCoupon(couponCode)"
          :disabled="couponSuccess === true"
          class="btn btn-success"
          type="button"
          id="button-addon2">套用折價券
        </button>
      </div>
      <div class="h4 mt-5 text-end">
        <div class="mb-2">
          總計:
        </div>
        <div class="fw-bold text-danger">NT$&nbsp;{{ cart.final_total }}</div>
      </div>
    </div>
    <!-- 訂購人資訊 -->
    <OrderForm />
    
  </div>
  <div
    v-if="WatchedData.length !== 0"
    class="row seperation-top seperation-bottom border-top">
    <div class="col-12">
      <div class="d-flex flex-md-row flex-column align-items-center justify-content-start justify-content-xl-start justify-content-md-center mb-5">
        <div class="h4 mb-0 text-orange-800">瀏覽紀錄</div>
        <button type="button" @click="clearStorage"
          class="btn btn-outline-toffee btn-sm ms-md-3 ms-0 mt-3 mt-md-0">
          <i class="bi bi-trash"></i>
        </button>
      </div>
      <Watched />
    </div>
  </div>
</template>