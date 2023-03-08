<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core';
import { useToastMessage } from '@/stores/toastMessage';

// ----------------- toast訊息元件 ------------------------------
const dataToastMessage = useToastMessage();
const { pushMessage } = dataToastMessage;
let msg;
// ----------------- copy ------------------------------
const discountCode = ref('spring2023')

const copyDiscount = () => {
  copy(discountCode.value);
  msg = {
    style: 'teal-700',
    content: '成功複製優惠碼'
  };
  pushMessage(msg);
}
const { copy } = useClipboard({ copyDiscount });
</script>

<template>
  <div class="banner position-relative">
    <div class="container-lg">
      <div class="position-absolute text-brown" data-aos="fade-right" data-aos-duration="3000">
        <h1 class="fw-lighter w-auto p-0">永恆花</h1>
        <p class="fs-5 fw-light font-monospace w-auto">即將推出傳遞永恆的情感&nbsp;締造永久的感動</p>
        <router-link
          to="/goods"
          class="btn btn-brown btn-lg px-5 fw-lighter mt-4">立即訂購
        </router-link>
      </div>
    </div>
    <div class="discount bg-brown text-white p-2 fw-light text-center position-absolute w-100">
      即日起至三月底，輸入優惠碼享50%折價。優惠碼:&nbsp;
      <span @click.prevent="copyDiscount">{{ discountCode }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 680px;
  &:before{
    content: '';
    position: absolute;
    top: -56px;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/rose-flower.webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: -100;
  }
  div{
    div{
      bottom:150px;
      h1{
        font-size: 5.25rem;
        display: block;
      }
    }
  }
  .discount{
    letter-spacing: 0.08rem;
    bottom:56px;
    span{
      cursor: pointer;
    }
  }
}
@media(max-width:767.98px){
  .banner{
    &:before{
      top:0;
    }
    div{
      div{
        bottom: 230px;
      }
    }
    .discount{
      bottom: 0;
    }
  }
}
</style>