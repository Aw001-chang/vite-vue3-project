<script setup>
await new Promise((res) => setTimeout(res, 1000));
</script>

<template>
  <div class="card border-0 mb-5">
    <div class="card-img">
      <slot name="goodImage"></slot>
    </div>
    <div class="card-body px-0 text-orange-900">
      <h5 class="card-title text-2-line text-2-line-height fw-normal">
        <slot name="goodTitle"></slot>
      </h5>
      <p class="card-text">
        <slot name="goodPrice"></slot>
      </p>
      <div class="btns d-flex w-100">
        <slot name="myCollect"></slot>
        <slot name="goodToCart"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 346px;
  background-color: #ffffff;
  &:hover {
    transform: translate(0, -5%);
    transition: 1s;

    .btns {
      bottom: 0;
      transition: 1s;
    }
  }
  .card-img {
    height: 200px;
    position: relative;
    overflow: hidden;
    div {
      position: absolute;
      z-index: 1;
      opacity: .8;

      i {
        padding: 4px;
      }
    }
    img {
      width: 120%;
      transition: 1s;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .card-body{
    letter-spacing: 0.04rem;
  }
  .btns {
    position: absolute;
    bottom: -40px;
    left: 0;
  }
}

@media(max-width:767.98px) {
  .card {
    .btns {
      position: unset;
    }
    .card-img{
      height: 300px;
      img{
        width: 100%;
      }
    }
  }
}
@media(max-width:575.98px) {
  .card {
    height: auto;
    max-width: 300px;
    margin: 0 auto;
    .card-img{
      height: auto;
    }
  }
}
</style>
