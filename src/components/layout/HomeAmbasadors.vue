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

<style scoped>
.home-ambasadors {
  width: 100vw; height: 55vh;
  position: relative;
  top: 0;
  left: 0;
  background-color: rgb(222, 222, 222);
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
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  font-size: 52px;
  position: absolute;
  top:100%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  grid-area: ambasador-title;
  color: white;
}

.ambasador-nitro {
  background-image: url(../../assets/images/nitro.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 200px; height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  grid-area: ambasador-nitro;
  z-index: 40;
}

.ambasador-sandra {
  background-image: url(../../assets/images/sandra.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 200px; height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  grid-area: ambasador-sandra;
  z-index: 40;
}
</style>