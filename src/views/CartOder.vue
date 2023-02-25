<script setup>
import { storeToRefs } from 'pinia';
import { useGoodsAll } from '../stores/goods';
import { useCart } from '../stores/cart';

import CartItem from '../components/cart/CartItem.vue';
import OrderForm from '../components/cart/OrderForm.vue';
import TheStep from '../components/cart/TheStep.vue';
import Watched from '../components/Watched.vue';

const dataGoodsAll = useGoodsAll();
const { clearStorage } = dataGoodsAll;
const { WatchedData } = storeToRefs(dataGoodsAll);

const dataCart = useCart();
const { deleteCart, updateCart } = dataCart;
const { cart, isLoading } = storeToRefs(dataCart);

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
          <img :src="item.product.imageUrl" class="d-block" alt="">
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
          <button @click.prevent="deleteCart(item)"
            type="button"
            class="btn btn-outline-danger btn-sm">
            <i class="bi bi-trash"></i>
          </button>
        </template>
      </CartItem>
      <div class="input-group mt-5">
        <input type="text"
          class="form-control"
          placeholder="輸入折扣碼"
          aria-label="Recipient's username"
          aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary"
          type="button"
          id="button-addon2">套用折價券</button>
      </div>
      <div class="h4 mt-5 text-end">
        <div class="mb-2">總計:</div>
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
      <div class="d-flex align-items-center justify-content-between">
        <div class="h4 mb-0">瀏覽紀錄</div>
        <button type="button" @click="clearStorage"
          class="btn btn-outline-primary">清除歷史紀錄</button>
      </div>
      <Watched />
    </div>
  </div>
</template>