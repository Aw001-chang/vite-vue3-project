<script setup>
import { storeToRefs } from 'pinia';
import { useCart } from '../stores/cart';
import CartItem from '../components/cart/CartItem.vue';
import SectionTitle from '../components/sectionTitle.vue';

const dataCart = useCart();
const { orderList, inputOrderID, isLoading, orderUser, isNull } = storeToRefs(dataCart);
const { getOrder } = dataCart;

</script>

<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-lg">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <SectionTitle>
          <template #sectionTitle>查詢訂單</template>
        </SectionTitle>
      </div>
      <div class="col-12 text-center seperation-top seperation-bottom">
        <div class="row justify-content-center">
          <div class="col-sm-4 col-12">
            <div class="input-group mb-3">
              <input
                v-model.trim="inputOrderID"
                type="text"
                class="form-control"
                placeholder="請輸入訂單編號"
                aria-label="Recipient's username"
                aria-describedby="button-addon2">
              <button
                @click="getOrder(inputOrderID)"
                class="btn btn-outline-primary"
                type="button">查詢訂單
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isNull"
      class="row justify-content-center seperation-bottom">
      <div class="col-lg-10">
        <div class="row">
          <div class="col-12 mb-4 border-bottom pb-3">
            <div>訂單編號:&nbsp;{{ orderList.id }}</div>
            <div>訂購日期:&nbsp;{{ $filter.date(orderList.create_at) }}</div>
          </div>
          <div class="col-12 mb-5">
            <div class="fs-4 fw-bold mb-4 text-orange-800">訂購商品:</div>
            <CartItem v-for="item in orderList.products"
              :key="item">
              <template #orderImage>
                <img :src="item.product.imageUrl"
                  class="d-block"
                  alt="">
              </template>
              <template #orderTitle>
                {{ item.product.title }}
              </template>
              <template #orderFinalTotal>
                {{ item.product.price }}
              </template>
              <template #orderDelete>
                <div>x&nbsp;{{ item.qty }}</div>
              </template>
            </CartItem>
            <div class="fs-5 fw-bold text-end mt-3 text-red-600">總金額:&nbsp;{{ $filter.currency(orderList.total) }}</div>
          </div>
          <div class="col-12">
            <div class="row">
            <div class="fs-4 fw-bold mb-4 text-orange-800">收件人資訊:</div>
              <div class="border-bottom p-3">
                <div class="mb-2 fw-bold">收件人姓名:</div>
                <div>{{ orderUser.name }}</div>
              </div>
              <div class="border-bottom p-3">
                <div class="mb-2 fw-bold">收件人電話:</div>
                <div>{{ orderUser.tel }}</div>
              </div>
              <div class="border-bottom p-3">
                <div class="mb-2 fw-bold">收件人電子信箱:</div>
                <div>{{ orderUser.email }}</div>
              </div>
              <div class="border-bottom p-3">
                <div class="mb-2 fw-bold">收件人地址:</div>
                <div>{{ orderUser.address }}</div>
              </div>
              <div class="p-3">
                <div class="mb-2 fw-bold">備註:</div>
                <div>{{ orderList.message }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>