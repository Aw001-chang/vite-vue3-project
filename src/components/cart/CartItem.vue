<template>
  <div class="items d-flex justify-content-around py-2 px-2 border-bottom">
    <slot name="orderImage"></slot>
    <div class="px-2 good-title text-orange-900 d-flex flex-column justify-content-between">
      <div>
        <div class="text-1-line text-start">
          <slot name="orderTitle"></slot>
        </div>
      </div>
      <div class="fw-semibold mb-2 text-start text-red-600">
        NT$&nbsp;<slot name="orderFinalTotal"></slot>
      </div>
      <div class="btn-group">
        <slot name="orderQtyReduce"></slot>
        <slot name="orderQty"></slot>
        <slot name="orderQtyPlus"></slot>
      </div>
    </div>
    <div class="fs-5 ms-auto mb-auto">
      <slot name="orderDelete"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.items {
  img {
    width: 100px;
  }
}
</style>
