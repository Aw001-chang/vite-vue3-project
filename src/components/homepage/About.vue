<script setup>
import { useWindowSize } from '@vueuse/core'
import SectionTitle from '../sectionTitle.vue';

const { height } = useWindowSize()
</script>

<template>
  <div
    class="aboutComponent container-fluid position-sticky top-0 px-0 seperation-bottom"
    :style="{ height: height + 'px'}">
    <SectionTitle>
      <template #sectionTitle>
        <div class="text-white">關於桂子飄香</div>
      </template>
    </SectionTitle>
    <div class="about-deco" data-aos="fade-up" data-aos-duration="2000">
      <div class="container-lg fs-5 text-white fw-light">
        <div class="row justify-content-center">
          <div class="col-md-8 col-9 text-start">
            <p>
              桂子飄香，是一間專門販售鮮花的精品花店，我們提供高品質的鮮花和專業的客戶服務，為您打造最美好的花卉體驗。
            </p>
            <p>
              我們的花店擁有豐富多樣的花卉產品，包括鮮花、乾花、花束、花籃、花盆等，不僅擁有多種花卉選擇，更有各式各樣的花卉配件和包裝供您選擇，讓您的送禮或佈置更加完美。
            </p>
            <p>
              桂子飄香不僅擁有優質的花卉，更注重客戶的需求和體驗。我們的專業花藝師可以根據您的需求和風格，為您量身定制花束和花籃，讓您的心意傳達得更加深刻。
            </p>
            <p>
              無論是送禮、佈置場地還是裝飾自己的家，桂子飄香都是您最佳的選擇。我們以熱情、專業、誠信的態度，為您打造最美好的花卉體驗。歡迎來到桂子飄香，讓我們一起創造美好的回憶。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutComponent{
  background-image: url('@/assets/img/homeAbout-bg.webp');
  background-size: cover;
  background-position: top center;
  background-attachment:fixed;
  min-height: 615px;
  letter-spacing: 0.03rem;
  .about-deco{
    height: 60%;
    overflow: scroll;
    .row{
      div{
        padding: 80px ;
        background-color: #843817d5;
        p{
          margin-bottom: 20px;
          text-shadow: 0.1em 0.1em 0.2em #291801;
        }
      }
    }
  }
}

@media screen and (max-width:575.98px){
  .aboutComponent{
    background-position: top;
    .about-deco{
      .row{
        div{
          padding-left: 12px;
          padding-right: 12px;
        }
      }
    }
  }
}
</style>
