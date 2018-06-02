<template>
  <section>
    <div class="logo">
      <img src="~assets/images-baemin/logo@2x.png" alt="">
    </div>
    <div class="header-container">
      <div class="bg-img">
        <img src="~assets/images-baemin/main_05@2x.jpg" alt="">
      </div>
      <img class="header-text" src="~assets/images-baemin/main_text_05@2x.png" alt="">
      <a href="#none" class="app-download">
        <img src="~assets/images-baemin/btn_down@2x.png" alt="">
      </a>

    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
html,body,div,section,.header-container{height:100%;}
.logo{margin:40px 0 0 46px;position: absolute;}
.logo img{width:142px;height:32px;}
.bg-img{z-index: -1;position: absolute;width:100%;}
.bg-img img{width:100%;}
.header-text{margin:140px 0 0 46px;width: 600px;}
.app-download{position:absolute;right:100px;bottom:50px;}
.app-download img{width:300px;}
</style>
