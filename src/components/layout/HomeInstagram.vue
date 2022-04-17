<template>
  <section class="home-instagram">
    <h2 class="ig-h2">UŻYJ #Taga <strong class="more">#7MORE7</strong> I POKAŻ NAM SWÓJ OUTFIT</h2>
    <div class="instagram-grid">
      <img :src="pic1" alt="zdjecie ig" class="imgs">
      <img :src="pic2" alt="zdjecie ig" class="imgs">
      <img :src="pic3" alt="zdjecie ig" class="imgs">
      <img :src="pic4" alt="zdjecie ig" class="imgs">
      <img :src="pic5" alt="zdjecie ig" class="imgs">
      <img :src="pic6" alt="zdjecie ig" class="imgs">
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const pic1 = require('../../assets/images/ig1.jpg')
    const pic2 = require('../../assets/images/ig2.jpg')
    const pic3 = require('../../assets/images/ig3.jpg')
    const pic4 = require('../../assets/images/ig4.jpg')
    const pic5 = require('../../assets/images/ig5.jpg')
    const pic6 = require('../../assets/images/ig6.jpg')

    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
    }
  }
}
</script>

<style scoped>

.home-instagram {
  width: 100vw;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgb(161, 161, 161);
  padding: 4rem 0rem;
}

.ig-h2 {
  color: white;
  text-align: center;
  font-size: 36px;
}

.instagram-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.more {
  color: green;
}

.imgs {
  width: 120px; height: 120px;
}
</style>