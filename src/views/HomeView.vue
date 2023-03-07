<script setup>
import { RouterView } from 'vue-router';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import ToastContainer from '../components/ToastContainer.vue';
</script>

<template>
  <div class="userboard position-relative">
    <ToastContainer />
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss">
.userboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.h3 {
  position: relative;
  letter-spacing: 0.125rem;

  &:before {
    content: '';
    width: 300px;
    height: 2px;
    background: #D9D9D9;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  &:after {
    content: '';
    width: 80px;
    height: 2px;
    background: #999797;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
}

.seperation-top {
  padding-top: 100px;
}

.seperation-bottom {
  padding-bottom: 100px;
}

.text-2-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*省略第n行後的文字*/
  -webkit-box-orient: vertical;
  white-space: break-spaces;
}

.text-1-line {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /*省略第n行後的文字*/
  -webkit-box-orient: vertical;
  white-space: break-spaces;
}

.text-2-line-height {
  height: 48px;
}
.good-title{
  letter-spacing: 0.075rem;
}
@media (max-width:280px) {
  .h3 {
    &:before {
      width: 240px;
    }
  }
}
</style>
