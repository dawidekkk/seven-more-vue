<template>
  <section class="home-ambasadors">
    <h2 class="ambasador-title">AMBASADORZY</h2>
    <div class="ambasador-nitro">
      <h3>TheNitroZyniak</h3>
    </div>
    <div class="ambasador-sandra">
      <!-- <img src="../../assets/images/sandra.jpg" alt=""> -->
      <h3>slythi</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">

@mixin pic {
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
}

.home-ambasadors {
  width: 100vw; height: 55vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: #f8f9fa;
  padding: .25rem;
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 100px 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "ambasador-title ambasador-title"
    "ambasador-nitro ambasador-sandra"; 
}

.ambasador-title {
  font-size: 52px;
  position: absolute;
  top: 100%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  grid-area: ambasador-title;
  color: rgba(128, 128, 128, 0.12);
}

.ambasador-nitro {
  background-image: url(../../assets/images/nitro.jpg);
  @include pic();
  grid-area: ambasador-nitro;
}

.ambasador-sandra {
  background-image: url(../../assets/images/sandra.jpg);
  @include pic();
  grid-area: ambasador-sandra;
}

@media only screen and(min-width: 768px) {
  .ambasador-title {
    font-size: 88px;
  }
}

@media only screen and(min-width: 1200px) {
  .ambasador-title {
    font-size: 180px;
  }

  .ambasador-nitro,
  .ambasador-sandra {
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>