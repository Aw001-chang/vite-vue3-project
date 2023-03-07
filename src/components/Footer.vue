<template>
  <div class="contact-us container-fluid">
    <div class="text-center seperation-top seperation-bottom">
      <div class="h3 pb-2 text-light">聯絡我們</div>
    </div>
    <div class="row contact-info">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row align-items-center justify-content-md-between justify-content-center">
              <div class="col-md-5">
                <a href="#" class="brand-link d-inline-block">
                  <img src="../assets/img/logo.png" class="d-block my-md-5 my-2"
                    alt="">
                </a>
              </div>
              <div class="col-7 text-light mt-5 mt-md-0">
                <div class="d-sm-flex align-items-center">
                  <ul>
                    <li class="mb-2 fw-light">
                      <i class="bi bi-telephone-fill me-2"></i>0911&nbsp;111&nbsp;111
                    </li>
                    <li class="mb-2 fw-light">
                      <i class="bi bi-geo-alt-fill me-2"></i>台北市大安區青田街
                    </li>
                    <li class="mb-2 fw-light">
                      <i class="bi bi-envelope-fill me-2"></i>a1111111@gmail.com
                    </li>
                    <li class="mb-2 fw-light">
                      <i class="bi bi-clock-fill me-2"></i>09:00 - 21:00
                    </li>
                  </ul>
                  <div class="d-flex ms-sm-auto justify-content-center justify-content-md-unset mt-5 mt-sm-0">
                    <a href="" class=" text-light">
                      <i class="bi bi-facebook fs-4 me-3"></i>
                    </a>
                    <a href="" class=" text-light">
                      <i class="bi bi-instagram fs-4 me-3"></i>
                    </a>
                    <a href="" class=" text-light">
                      <i class="bi bi-line fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright text-light fw-light text-center pt-4 pb-2">
      資料、圖片、文章來源皆來自網路，僅用來作為學習用途
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul{
  padding: 0;
  margin: 0;
  li{
    list-style: none;
  }
}
.contact-us {
  background-color: #462D1A;
  position: relative;
  width: 100%;
  &:after{
    content:'';
    width: 80.138888%;
    height: -webkit-fill-available;
    position: absolute;
    right:0;
    top:0;
    background-color: #843817;
  }
}
.h3{
  z-index: 1;
}
.contact-info{
  position: relative;
  letter-spacing: 0.05rem;
  &:before{
    content: '';
    width: 41.458333%;
    height: -webkit-fill-available;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #f5f1ed;
    z-index: 1;
  }
  .container-lg{
    z-index: 2;
  }
}
.brand-link{
  img{
    height: 64px;
  }
}
.copyright{
  z-index: 1;
  position: relative;
  font-size: 0.875em;
}
@media (max-width:767.98px){
  .contact-info {
    &:before {
      width: 80.138888%;
      height: 70px;
    }
  }
}
.brand-link {
  img {
    height: 48px;
  }
}
</style>
