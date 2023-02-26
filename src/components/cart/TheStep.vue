<template>
  <div class="row justify-content-center">
    <div class="col-lg-10 col-12">
      <div class="row justify-content-center seperation-bottom px-2 px-sm-0">
        <div class="col-sm-8 col-12">
          <div class="row">
            <slot name="step-order">
              <div class="col-4 step text-center text-blue-600 active">
                <span>STEP&nbsp;01</span>
                <div class="h5 mt-2">建立訂單</div>
              </div>
            </slot>
            <slot name="step-pay">
              <div class="col-4 step text-center text-blue-600">
                <span>STEP&nbsp;02</span>
                <div class="h5 mt-2">確認付款</div>
              </div>
            </slot>
            <slot name="step-finish">
              <div class="col-4 step text-center text-blue-600">
                <span>STEP&nbsp;03</span>
                <div class="h5 mt-2">完成訂單</div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/thems.scss';

.step {
  border-bottom: 5px solid $blue-100;
}
.active {
  border-color: $blue-600;
}
</style>
