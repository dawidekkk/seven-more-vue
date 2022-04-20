<template>
  <section class="home-social">
    <h1 class="h1">Dołącz do nas!</h1>
    <BaseTitle>BĄDŹ NA BIEŻĄCO Z NOWOŚCIAMI!</BaseTitle>
    <div class="social-wrapper">
      <div>
        <h3>10,816</h3>
        <p>Facebook</p>
      </div>
      <div>
        <h3>61,300</h3>
        <p>Instagram</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.home-social {
  width: 100vw;
  height: 55vh;
  background-color: rgb(161, 161, 161);
  padding: 4rem 0rem;
  background-image: url("../../assets/images/bg_4.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
}

.social-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.h1 {
  opacity: 0;
  @media screen and (min-width: 1200px) {
    opacity: 1;
    position: absolute;
    top: -18%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: rgba(128, 128, 128, 0.12);
    font-size: 160px;
    width: 1000px;
  }
}

h3 {
  font-size: 28px;
}

@media only screen and (min-width: 600px) {
  h3 {
    font-size: 36px;
  }
}
</style>
