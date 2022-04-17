<template>
  <section class="home-instagram">
    <BaseTitle
      >UŻYJ #Taga <strong class="more">#7MORE7</strong> I POKAŻ NAM SWÓJ OUTFIT</BaseTitle
    >
    <div class="instagram-grid">
      <img :src="pic1" alt="zdjecie ig" class="imgs" />
      <img :src="pic2" alt="zdjecie ig" class="imgs" />
      <img :src="pic3" alt="zdjecie ig" class="imgs" />
      <img :src="pic4" alt="zdjecie ig" class="imgs" />
      <img :src="pic5" alt="zdjecie ig" class="imgs" />
      <img :src="pic6" alt="zdjecie ig" class="imgs" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const pic1 = require("../../assets/images/ig1.jpg");
    const pic2 = require("../../assets/images/ig2.jpg");
    const pic3 = require("../../assets/images/ig3.jpg");
    const pic4 = require("../../assets/images/ig4.jpg");
    const pic5 = require("../../assets/images/ig5.jpg");
    const pic6 = require("../../assets/images/ig6.jpg");

    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
    };
  },
};
</script>

<style scoped lang="scss">
.home-instagram {
  width: 100vw;
  height: 80vh;
  background-color: rgb(255, 255, 255);
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 120px;
  height: 120px;
}

@media only screen and (min-width: 600px) {
  .imgs {
    width: 200px;
    height: 200px;
  }
}
</style>
