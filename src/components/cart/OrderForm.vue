<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { useCart } from '../../stores/cart';
const dataCart = useCart();
const { orderForm } = storeToRefs(dataCart);
const { createOrder } = dataCart;

const simpleSchema = {
  email(value){
    // if the field is empty
    if (!value) {
      return '欄位不得為空';
    }
    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return '請輸入有效的電子信箱';
    }
    // All is good
    return true;
  },
  orderName(value){
    if(!value){
      return '欄位不得為空';
    }
    return true
  },
  orderAddress(value){
    if(!value){
      return '欄位不得為空'
    }
    return true
  },
  phoneNumber(value){
    if(!value){
      return '欄位不得為空'
    }
    const regex = /^(09)[0-9]{8}$/
    if (!regex.test(value)) {
      return '請輸入手機號碼';
    }
    return true
  }
};
</script>

<template>
  <div class="col-md-6 col-12 mt-5 mt-md-0">
    <div class="h4 mb-4 text-center text-md-start text-orange-800">收件人資訊</div>
    <Form
      @submit="createOrder"
      :validation-schema="simpleSchema"
      class="border p-3 rounded shadow">
      <div class="form-floating mb-3">
        <Field
          v-model="orderForm.user.email"
          name="email"
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="name@example.com"/>
        <ErrorMessage name="email" class="text-danger fs-6" />
        <label
          for="emailInput"
          class="fw-bolder">電子信箱&nbsp;:
        </label>
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="orderForm.user.name"
          name="orderName"
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="林宜慧" />
        <ErrorMessage name="orderName" class="text-danger fs-6"/>
        <label
          for="nameInput"
          class="fw-bolder">收件人姓名&nbsp;:
        </label>
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="orderForm.user.tel"
          name="phoneNumber"
          type="tel"
          class="form-control"
          id="floatingInput"
          placeholder="0922222222"/>
        <ErrorMessage name="phoneNumber" class="text-danger fs-6" />
        <label
          for="floatingInput"
          class="fw-bolder">收件人電話&nbsp;:
        </label>
      </div>
      <div class="form-floating mb-3">
        <Field
          v-model="orderForm.user.address"
          name="orderAddress"
          type="text"
          class="form-control"
          id="addressInput"
          placeholder="收件人地址" />
        <ErrorMessage name="orderAddress" class="text-danger fs-6" />
        <label for="addressInput"
          class="fw-bolder">收件人地址&nbsp;:
        </label>
      </div>
      <div class="form-floating mb-5">
        <textarea
          v-model="orderForm.message"
          class="form-control"
          id="floatingTextarea"
          style="height:100px;"
          placeholder="備註"></textarea>
        <label for="floatingTextarea"
          class="fw-bolder">備註&nbsp;:<span class="text-secondary fw-normal">(可選填)</span>
        </label>
      </div>
      <div class="d-block text-center">
        <button
          type="submit"
          class="btn btn-toffee">建立訂單</button>
      </div>
    </Form>
  </div>
</template>
