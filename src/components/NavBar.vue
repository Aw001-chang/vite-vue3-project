<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import 'bootstrap/dist/js/bootstrap.bundle';
import CartItem from '../components/cart/CartItem.vue';
import { useCart } from '../stores/cart';

const dataCart = useCart();
const { deleteCart, updateCart } = dataCart;
const { cart, cartsLength } = storeToRefs(dataCart);

const activeClass = ref('active');
const route = useRoute();
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
            <div class="dropdown">
              <a href="#"
                class="me-sm-4 me-0 position-relative cart-btn"
                role="button"
                id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                <i class="bi bi-cart text-brown"></i>
                <span
                  :class="cartsLength > 0 ? 'bg-danger' : 'bg-secondary'"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {{ cartsLength }}
                </span>
              </a>
              <div class="dropdown-menu shadow-lg border-toffee py-0"
                aria-labelledby="dropdownMenuClickableInside">
                <div class="border-bottom bg-toffee rounded-top py-2 px-3 text-white fw-normal fs-5 text-center cart-title">購物車</div>
                <!-- 以下為 購物車尚未選購商品 -->
                <div v-if="cartsLength === 0">
                  <div class="text-center mt-4 d-flex justify-content-center flex-column">
                    <i class="fs-1 bi bi-exclamation-triangle-fill text-black-50"></i>
                    <span class="text-black-50">尚未選購商品</span>
                  </div>
                  <div class="text-center mt-4 mb-3 px-3">
                    <router-link to="/goods"
                      class="btn btn-outline-toffee w-100 d-block">選購商品</router-link>
                  </div>
                </div>
                <!-- 以下為 購物車已已選購商品 -->
                <div v-else>
                  <div class="dropdown-item p-0">
                    <!--  -->
                    <div class="card border-0">
                      <div class="card-body overflow-scroll p-0">
                        <CartItem v-for="item in cart.carts" :key="item.index">
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
                      </div>
                      <div class="card-footer">
                        <div class="text-center mt-2">
                          <div class="fs-5 fw-bolder text-danger">
                            總計:&nbsp;&nbsp;NT$&nbsp;{{ $filter.currency(cart.final_total) }}
                          </div>
                        </div>
                        <div class="text-center mt-4">
                          <router-link to="/cart"
                            class="btn btn-toffee text-white w-100 d-block mb-3">前往結帳</router-link>
                          <router-link to="/goods"
                            class="btn btn-outline-toffee w-100 d-block">繼續選購</router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="d-sm-block d-none">
              <a href="#">中文</a>|<a href="#">EN</a>
            </div> -->
          </div>
          <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="col-md-6 col-12">
          <div class="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup">
            <div class="navbar-nav pt-5 pt-md-0 text-center text-md-unset">
              <router-link
                :class="[route.name === 'about' ? activeClass : '']"
                to="/about"
                class="nav-link">
                關於我們
              </router-link>
              <router-link
                to="/goods"
                :class="[route.name === 'goods' ? activeClass : '']"
                class="nav-link">
                商品列表
              </router-link>
              <router-link
                :class="[route.name === 'collect' ? activeClass : '']"
                to="/collect"
                class="nav-link">
                我的收藏
              </router-link>
              <router-link
                :class="[route.name === 'booking' ? activeClass : '']"
                to="/booking"
                class="nav-link">
                查詢訂單
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.collapse{
  .navbar-nav{
    .active{
      color: $orange-900;
    }
  }
}
.navbar-brand {
  img {
    height: 30px;
  }
}
.cart{
  ::hover{
    transform: none !important;
  }
}
.cart-btn{
  span{
    font-size: 0.75rem;
    font-weight: normal !important;
  }
  .translate-middle{
    transform:translate(-40%, -40%) !important;
  }
}
.dropdown-menu {
  width: 360px;
  left: auto;
  right: -65%;
  top: 49px !important;
  transform: .3s ease-out;
  .cart-title{
    letter-spacing: 0.0875rem;
  }
  .overflow-scroll {
    max-height: 300px;
    .photo{
      width: 100px;
      height: 102px;
      img{
        width: 128%;
      }
    }
  }
}
.dropdown-item {
  &:hover {
    background-color: transparent !important;
  }
  &:active{
    color: unset
  }
  .items {
    &:last-child {
      border-bottom: unset !important;
    }
  }
}

@media(min-width:545px) {
  .dropdown-menu {
    left: auto !important;
    right: 0 !important;
  }
}
</style>
