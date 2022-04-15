<template>
  <div class="hero">
    <div class="hero-logo">
      <img src="../../assets/images/hero.png" alt="Logo hero">
      <p>7more7 clothing brand</p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url(../../assets/images/bg_1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%; height: 100vh;
  position: relative;
  top: 0; left: 0;
}

.hero-logo {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%; left: 50%;
}

img {
  width: auto; height: 200px;
}

p {
  text-transform: uppercase;
  background-color: black;
  color: white;
  font-size: 20px;
  letter-spacing: 4px;
  width: 100%;
  line-height: 1.5;
}
</style>