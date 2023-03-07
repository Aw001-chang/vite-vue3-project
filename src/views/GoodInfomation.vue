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
  try{
    const api = `${import.meta.env.VITE_APP_API}/api/${import.meta.env.VITE_APP_PATH}/product/${id}`;
    const res = await axios.get(api);
    isLoading.value = false;
    good.value = res.data.product;
    good.value.qty = res.data.qty;
  }catch(error){
    console.log(error.response);
  }
};


onMounted(getGoodsInfo);
</script>

<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <SectionTitle>
      <template #sectionTitle>{{ good.category }}</template>
    </SectionTitle>
    <div class="container-fluid">
      <div class="good-img px-0 float-md-start">
        <img :src="good.imageUrl" alt="">
      </div>
      <div class="text-infomation float-md-end">
        <div class="pb-5 border-bottom">
          <div class="h2 mb-4 text-orange-800">{{ good.title }}</div>
          <div class="bg-yellow-700 delivery d-flex flex-row align-items-center py-1 px-3 rounded">
            <img src="../assets/img/icon-delivery.svg" alt="" class="me-2">
            <p class="mb-0 fw-lighter text-white">滿 2,000 台北鮮花配送直達免運</p>
          </div>
        </div>
        <div class="pt-5 border-bottom">
          <div class="mb-5">
            售價&nbsp;:&nbsp;
            <span class="fs-3 text-red-500">NT$&nbsp;{{ $filter.currency(good.price) }}</span>
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
              >{{ qty }}</option>
            </select>
            <label for="floatingSelect">數量:</label>
          </div>
          <div class="row pb-5">
            <div class="col-md-6 col-12 mb-3 mb-md-0">
              <button
                v-if="collectID.indexOf(good.id) > -1"
                @click.prevent="addMyCollection(good, good.id)"
                type="button"
                class="btn btn-outline-toffee w-100 py-3">
                <i class="bi bi-bookmark-fill me-1"></i>取消收藏
              </button>
              <button
                v-else
                @click.prevent="addMyCollection(good, good.id)"
                type="button"
                class="btn btn-outline-toffee w-100 py-3">
                <i class="bi bi-bookmark me-1"></i>加入收藏
              </button>
            </div>
            <div class="col-md-6 col-12">
              <button
                @click.prevent="addToCart(good.id, good.qty)"
                type="button"
                class="btn btn-toffee w-100 py-3">
                <i class="bi bi-cart me-1"></i>加入購物車
              </button>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <div>商品運送流程說明&nbsp;:</div>
          <ul class="mt-2 fw-light">
            <li>接單：當顧客下單後，花店會立即接收並確認訂單。</li>
            <li>準備產品：花店將根據訂單要求準備鮮花及其它產品。</li>
            <li>包裝：花店會將鮮花和產品仔細包裝，以確保在運送過程中不受損壞。</li>
            <li>運送：花店會選擇最適合的運輸方式將產品送到指定的地點。有些花店可能提供同日或隔日送達服務。</li>
            <li>交付：當鮮花和產品到達目的地時，花店會將其交付給收件人或者指定的代收人。</li>
          </ul>
        </div>
        <div class="pt-5">
          <div>退換貨須知&nbsp;:</div>
          <ul class="mt-2 fw-light">
            <li>請確認在下單前閱讀並了解。只接受在收到貨品後1小時內退貨期限。</li>
            <li>需要提供合理的退貨理由</li>
            <li>請先聯繫花店並提供相關訂單信息和退貨理由。花店會為您提供退貨指引，包括如何退貨和退款方式等。</li>
            <li>在退貨前，請確認商品是否完好並與原來的狀態相同。如退貨的商品已損壞或者已使用，花店拒絕退貨。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid{
  padding: 0;
  height: 100%;
  margin-bottom: 40px;
  .good-img{
    position: sticky;
    top:0;
    width: 49.5%;
    overflow: hidden;
    img{
      width: 100%;
      height: auto;
    }
  }
  .text-infomation{
    width: 49.5%;
    height: 100%;
    padding: 40px;
    .delivery{
      width: fit-content;
      img{
        width: 32px;
      }
      p{
        letter-spacing: 0.08rem;
      }
    }
  }
}
@media(max-width: 767.98px){
  .container-fluid{
    height: auto;
    .good-img{
      position: static;
    }
    .good-img, .text-infomation{
      width: 100%;
      float: none;
    }
  }
  
}
@media(max-width: 575.98px){
  .container-fluid{
    .text-infomation{
      padding: 12px;
    }
  }
}
</style>