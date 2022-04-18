<template>
  <section class="home-instagram">
    <h1 class="h1">#7more7</h1>
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
      <img :src="pic7" alt="zdjecie ig" class="imgs" />
      <img :src="pic8" alt="zdjecie ig" class="imgs" />
      <img :src="pic9" alt="zdjecie ig" class="imgs" />
      <img :src="pic10" alt="zdjecie ig" class="imgs" />
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
    const pic7 = require("../../assets/images/ig7.jpg");
    const pic8 = require("../../assets/images/ig8.jpg");
    const pic9 = require("../../assets/images/ig9.jpg");
    const pic10 = require("../../assets/images/ig10.jpg");

    return {
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      pic6,
      pic7,
      pic8,
      pic9,
      pic10,
    };
  },
};
</script>

<style scoped lang="scss">
.home-instagram {
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  padding: 4rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // position: relative;
}

.instagram-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.more {
  color: green;
}

.h1 {
  opacity: 0;
  @media screen and (min-width: 1200px) {
    opacity: 1;
    position: absolute;
    top: -22%; left: 50%;
    transform: translate(-50%, 50%);
    color: rgba(128, 128, 128, 0.12);
    font-size: 180px;
  }

  @media screen and (min-width: 1400px) {
    top: -20%;
  }

  @media screen and (min-width: 1600px) {
    top: -18%;
  }
}

.imgs {
  width: 82px;
  height: 120px;
  filter: brightness(0.6);
  transition: all 0.5s;

  &:hover {
    filter: brightness(1);
  }

  @media screen and (min-width: 600px) {
    width: 140px;
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  @media screen and (min-width: 992px) {
    width: 200px;
    height: 260px;
  }

  @media screen and (min-width: 1200px) {
    width: 240px;
    height: 260px;
  }
  @media screen and (min-width: 1400px) {
    width: 280px;
    height: 300px;
  }
  @media screen and (min-width: 1600px) {
    width: 320px;
    height: 340px;
  }
}


</style>
