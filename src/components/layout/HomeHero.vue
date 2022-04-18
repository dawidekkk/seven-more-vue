<template>
  <div class="home-hero">
    <div class="hero-logo">
      <img :src="img" alt="Logo hero" />
      <h1>7more7 clothing brand</h1>
    </div>
    <button class="circle" @click="scrollInto('home-carousel')">
      <font-awesome-icon icon="arrow-down" class="arrow" />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const img = ref(require("../../assets/images/hero.png"));
    
    const scrollInto = (id) => {
      document.getElementById(id).scrollIntoView({behavior: "smooth"})
    }

    return {
      img: img.value,
      scrollInto,
    };
  },
};
</script>

<style scoped lang="scss">
.home-hero {
  background-image: url(../../assets/images/bg_1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;

  .hero-logo {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    h1 {
      text-transform: uppercase;
      background-color: black;
      color: white;
      font-size: 20px;
      letter-spacing: 4px;
      width: 100%;
      text-align: center;
    }

    img {
      width: auto;
      height: 200px;

      @media screen and (min-width: 1200px) {
        height: 350px;
      }
    }
  }
}

.circle {
  background-color: black;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;

  .arrow {
    animation-name: arrowDown;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
}

@keyframes arrowDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
