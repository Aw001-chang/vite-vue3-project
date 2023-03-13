<script setup>
import { ref, onMounted  } from 'vue';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle';

const toast = ref([]);
const props = defineProps(['msg']);
const msgObject = ref({});
const msgStyle = ref();
const msgContent = ref();

for( let i = 0; i < props.msg.length; i++){
  msgObject.value = props.msg[i]
};
msgStyle.value = msgObject.value.style;
msgContent.value = msgObject.value.content;

msgStyle.value = `bg-${msgStyle.value}`;

onMounted(() => {
  const toastEl = toast.value
  const toastShow = new Toast(toastEl, {
    autohide: true,
    delay: 1200,
  });
  toastShow.show();
})

</script>

<template>
  <div
    ref="toast"
    class="toast align-items-center text-white border-0 rounded-0 w-100"
    :class="msgStyle"
    role="alert"
    aria-live="assertive"
    aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body">
        {{ msgContent }}
      </div>
      <button type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"></button>
    </div>
  </div>
</template>
