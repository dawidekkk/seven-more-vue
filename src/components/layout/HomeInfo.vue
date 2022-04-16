<template>
  <section class="home-info">
    <div class="girl-photo"></div>
    <div class="home-info-specify">
      <h2>{{ info }}</h2>
      <p>{{ infoP1 }}</p>
      <p>{{ infoP2 }}</p>
      <p>{{ infoP3 }}</p>
      <p>{{ infoP4 }}</p>
    </div>
  </section>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    // const img = ref(require('../../assets/images/girl.png'))
    const info = ref('ODZIEŻ PRODUKOWANA W 100% W POLSCE')
    const infoP1 = ref('Jako 7more7 stawiamy przede wszystkim na zadowolenie klienta.')
    const infoP2 = ref('Nasza odzież szyta jest od postaw w Polsce.')
    const infoP3 = ref('Do produkcji wykorzystujemy materiały najwyższej jakości.')
    const infoP4 = ref('Sprawdź naszą ofertę i wybierz coś dopasowanego do Ciebie.')
    return {
      // img: img.value,
      info: info.value,
      infoP1,
      infoP2,
      infoP3,
      infoP4
    }
  }
}
</script>

<style scoped>
.home-info {
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  margin: 2rem auto 0rem auto;
}

.girl-photo {
  background-image: url(../../assets/images/girl.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%; height: 100vh;
  position: relative;
  top: 0; left: 0;
}

.home-info-specify {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.75rem;
  text-align: left;
  width: 100vw;
  padding: 2rem;
}

h2 {
  margin-bottom: 2rem;
}

p {
  font-size: 1rem;
  text-align: left;
}
</style>