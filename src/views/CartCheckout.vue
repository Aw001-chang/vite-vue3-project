<script setup>
import axios from 'axios';
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useClipboard } from '@vueuse/core';

import { useToastMessage } from '../stores/toastMessage';
import { scrollToTop } from '../composable/scrollTop';
import TheStep from '../components/cart/TheStep.vue';

const route = useRoute();
const orderId = route.params.orderId;
// ----------------- toast訊息元件 ------------------------------
const dataToastMessage = useToastMessage();
const { pushMessage } = dataToastMessage;
let msg;
// // ----------------- 取得單筆訂單 ------------------------------
const order = ref({
  user:{}
});
const orderListId = ref('');

const getOrder = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/order/${orderId}`;
    const res = await axios.get(api);
    order.value = res.data.order;
    orderListId.value = res.data.order.id;
  } catch (error) {

  }
}
// ----------------- 結帳 ------------------------------
const payOrder = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/pay/${orderId}`;
    const res = await axios.post(api);
    if(res.data.success){
      getOrder()
      scrollToTop()
    }
  } catch (error) {
    console.log(error)
  }
};
// ----------------- 是否完成結帳，Step樣式狀態 ------------------------------
const isActive = ref(false);
watchEffect(async () => {
  if (route.name === 'cartCheckout') {
    isActive.value = true
  }
});
// ----------------- copy ------------------------------
const { copy } = useClipboard({orderListId});

const copyOrderId = (id) =>{
  copy(id);
  msg = {
    style: 'teal-700',
    content: '成功複製訂單編號'
  };
  scrollToTop();
  pushMessage(msg);
};

onMounted(getOrder);

</script>

<template>
  <TheStep>
    <template #step-pay>
      <div :class="{ active: isActive}"
        class="col-4 step text-center text-blue-600">
        <span>STEP&nbsp;02</span>
        <div class="h5 mt-2">確認付款</div>
      </div>
    </template>
    <template #step-finish>
      <div
        :class="{ 'active': order.is_paid !== false }"
        class="col-4 step text-center text-blue-600">
        <span>STEP&nbsp;03</span>
        <div class="h5 mt-2">完成訂單</div>
      </div>
    </template>
  </TheStep>
  <div class="row justify-content-center seperation-top seperation-bottom px-2 px-sm-0">
    <div
      v-if="order.is_paid !== false"
      class="col-lg-12 col-sm-10 col-12 border-bottom pb-3">
      <div class="d-sm-flex justify-content-start align-items-end mb-sm-3 mb-5">
        <div class="h4 mb-sm-0 text-orange-800">訂單編號</div>
        <span class="text-danger ms-sm-2">複製以保存您的訂單編號，便於查找訂單狀態</span>
      </div>
      <div class="d-sm-flex justify-content-between align-items-center">
        <div class="h5 m-sm-0 mb-5 fw-bold text-wrap text-break text-primary">{{ orderListId }}</div>
        <button
          @click="copyOrderId(orderListId)"
          type="button"
          class="btn btn-primary">複製訂單編號
        </button>
      </div>
    </div>
  </div>
  <div class="row justify-content-between seperation-bottom">
    <div class="col-lg-5 col-md-6 col-12">
      <div class="h4 mb-4 text-center text-md-start text-orange-800">訂購商品</div>
      <div
        v-for="item in order.products"
        class="items d-flex justify-content-center py-2 px-3 border-bottom">
        <img :src="item.product.imageUrl" class="d-block" alt="">
        <div class="good-title px-3">
          <div class="mb-2">
            <div class="text-1-line">{{ item.product.title }}</div>
          </div>
          <div class="fw-bold mb-2">NT$&nbsp;{{ item.product.price }}</div>
        </div>
        <div class="fs-5 ms-auto mb-auto">
          <div>X{{ item.qty }}</div>
        </div>
      </div>
      <div class="h4 mt-5 text-end">
        <div class="mb-2">總計:</div>
        <div class="fw-bold text-danger">NT$&nbsp;{{ order.total }}</div>
      </div>
    </div>
    <div class="col-md-6 col-12 mt-5 mt-md-0">
      <div class="h4 mb-4 text-center text-md-start text-orange-800">訂購人資訊</div>
      <form class="border p-3 rounded shadow" @submit="payOrder">
        <div class="mb-3">
          <label for="formGroupExampleInput"
            class="form-label h6">電子信箱</label>
          <input
            :value="order.user.email"
            disabled
            type="email"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2"
            class="form-label h6">收件人姓名</label>
          <input
            :value="order.user.name"
            disabled
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2"
            class="form-label h6">收件人電話</label>
          <input
            :value="order.user.tel"
            disabled
            type="tel"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder">
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2"
            class="form-label h6">收件人地址</label>
          <input
            :value="order.user.address"
            disabled
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder">
        </div>
        <div class="mb-5">
          <label for="exampleFormControlTextarea1"
            class="form-label">備註<span>&nbsp;(可選填)</span></label>
          <textarea
            :value="order.message"
            disabled
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"></textarea>
        </div>
        <div class="d-block text-center">
          <button
            v-if="order.is_paid === false"
            class="btn btn-toffee">確認付款
          </button>
          <button
            v-else="order.is_paid !== false"
            disabled
            class="btn btn-toffee">付款成功
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/thems.scss';

.step {
  border-bottom: 5px solid rgb(162, 162, 162);
}

.active {
  border-color: $blue-600;
}
.items {
  img {
    width: 100px;
  }
}
</style>