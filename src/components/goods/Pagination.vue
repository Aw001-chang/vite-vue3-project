<script setup>
defineProps(['pages']);
const emit = defineEmits(['emit-pages']);

const updatePage = (page) => {
  emit('emit-pages', page)
};
</script>

<template>
  <div class="text-center seperation-bottom">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a
            :class="{ 'disabled' : !pages.has_pre }"
            @click.prevent="updatePage(pages.current_page-1)"
            class="page-link text-toffee"
            href="#"
            aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="page in pages.total_pages"
          :key="page"
          class="page-item">
          <a
            :class="{'active': page === pages.current_page}"
            @click.prevent="updatePage(page)"
            class="page-link text-toffee"
            href="#">
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a
            :class="{ 'disabled' : !pages.has_next }"
            @click.prevent="updatePage(pages.current_page+1)"
            class="page-link text-toffee"
            href="#"
            aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav{
  display: inline-block;
  .active{
    background-color: $toffee !important;
    border-color:$toffee !important;
    color:#ffffff !important;
  }
}
</style>
