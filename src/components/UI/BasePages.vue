<template>
  <section class="base-pages">
    <div class="img">
      <h2>{{ pageName }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pageName: String,
  }
}
</script>

<style scoped lang="scss">

.img {
  background-image: url('../../assets/images/bg_6.jpg');
  background-position: center center;
  background-size: cover;
  width: 100vw; height: 250px;
  top: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: black;
    text-align: center;
  }
}
</style>