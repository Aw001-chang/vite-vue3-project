<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useWindowSize, onClickOutside } from '@vueuse/core';

import { useCart } from '@/stores/cart';
import { useGoodsAll } from '@/stores/goods';

import CartItem from '@/components/cart/CartItem.vue';

const dataGoodsAll = useGoodsAll;
const { getGoodId } = dataGoodsAll();

const dataCart = useCart();
const { deleteCart, updateCart } = dataCart;
const { cart, cartsLength } = storeToRefs(dataCart);
const { height } = useWindowSize();

const activeClass = ref('active');
const route = useRoute();
// cart OutsideClick
const isShow = ref(false);
const cartRef = ref(null);
onClickOutside(
  cartRef,
  (event)=> {
    isShow.value = false;
  }
)
// menu OutsideClick
const menuRef = ref(null);
const isMenuShow = ref(false);
onClickOutside(
  menuRef,
  (event) => {
    isMenuShow.value = false;
  }
)
</script>

<template>
  <div class="container-lg">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid px-0">
        <div class="col">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/img/logo.png"
              alt="">
          </router-link>
        </div>
        <div class="col order-md-2 d-flex justify-content-end align-items-center">
          <div class="d-flex justify-content-md-end me-4 me-md-0">
            <div>
              <a href="#"
                @click="isShow = !isShow"
                class="me-sm-3 me-0 position-relative cart-btn"
                >
                <i class="bi bi-cart text-brown"></i>
                <span
                  :class="cartsLength > 0 ? 'bg-danger' : 'bg-secondary'"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {{ cartsLength }}
                </span>
              </a>
              <div
                :class="{ show: isShow }"
                ref="cartRef"
                class="cart shadow-lg">
                <div class="position-relative" :style="{ height: height + 'px' }">
                  <div class="cart-header border-bottom d-flex flex-row justify-content-between align-items-center">
                    <h5 class="mb-0 ps-3 fw-normal text-brown">?????????</h5>
                    <button type="button" class="btn" @click="isShow = !isShow">
                      <i class="bi bi-x fs-2 text-brown"></i>
                    </button>
                  </div>
                  <div class="cart-body" v-if="cartsLength === 0">
                    <div class="d-flex flex-column align-items-center mt-5">
                      <i class="fs-1 bi bi-exclamation-triangle-fill text-black-50"></i>
                      <span class="text-black-50">??????????????????</span>
                    </div>
                      
                  </div>
                  <div class="cart-body" v-else>
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
                          :class="{ 'disabled': item.qty <= 1 }"
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
                          :class="{ 'disabled': item.qty >= 10 }"
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
                  </div>
                  <div class="cart-footer border-top position-absolute bottom-0 w-100 bg-white">
                    <router-link to="/goods" v-if="cartsLength === 0">
                      <button
                        @click="isShow = false"
                        type="button"
                        class="btn btn-toffee rounded-0 fs-5 px-4 h-100 w-100">????????????
                      </button>
                    </router-link>
                    <div class="d-flex flex-row justify-content-end align-items-stretch" v-else>
                      <div class="total text-end pe-3 py-2">
                        <span class="d-block fw-light">?????????:</span>
                        <span class="text-danger fw-bold fs-5">NT$&nbsp;{{ $filter.currency(cart.final_total) }}</span>
                      </div>
                      <router-link to="/cart">
                        <button
                          @click="isShow = false"
                          type="button" 
                          class="btn btn-toffee rounded-0 fs-5 px-4 h-100">?????????
                        </button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="d-sm-block d-none">
              <a href="#">??????</a>|<a href="#">EN</a>
            </div> -->
          </div>
          <button class="navbar-toggler"
            type="button"
            @click="isMenuShow = !isMenuShow">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col-md-6 col-12">
          <div :class="{ show: isMenuShow }" ref="menuRef"
            class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup">
            <div class="navbar-nav pt-5 pt-md-0 text-center text-md-unset" @click="isMenuShow = false">
              <router-link
                :class="[route.name === 'about' ? activeClass : '']"
                to="/about"
                class="nav-link">
                ????????????
              </router-link>
              <router-link
                to="/goods"
                :class="[route.name === 'goods' ? activeClass : '']"
                class="nav-link">
                ????????????
              </router-link>
              <router-link
                :class="[route.name === 'collect' ? activeClass : '']"
                to="/collect"
                class="nav-link">
                ????????????
              </router-link>
              <router-link
                :class="[route.name === 'booking' ? activeClass : '']"
                to="/booking"
                class="nav-link">
                ????????????
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar-brand {
  img {
    height: 30px;
  }
}
.cart{
  position: fixed;
  top: 0;
  right: -280px;
  background-color: #fff;
  width: 280px;
  height: 100vh;
  z-index: 1000;
  transition: .5s;
}
.cart.show{
  right: 0;
  
}
.cart-header{
  button{
    &:active{
      border-color: transparent;
    }
  }
}
.cart-body{
  overflow: scroll;
  height: 100%;
}

</style>
